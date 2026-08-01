import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const stitchDir = path.join(root, 'stitch_thakur_consultancy_corporate_portal')

const pages = [
  { name: 'HomePage', file: 'thakur_consultancy_home/code.html', activeItem: 'home', variant: 'default', ctaLabel: 'Get Started' },
  { name: 'AboutPage', file: 'thakur_consultancy_about_us/code.html', activeItem: 'about', variant: 'default', ctaLabel: 'Get Started', manual: true },
  { name: 'HrCompliancePage', file: 'thakur_consultancy_hr_compliance_services/code.html', activeItem: 'services', variant: 'services', ctaLabel: 'Get Started' },
  { name: 'AccountingTaxPage', file: 'thakur_consultancy_accounting_tax_services/code.html', activeItem: 'services', variant: 'default', ctaLabel: 'Get Started' },
  { name: 'AuditCertificationsPage', file: 'thakur_consultancy_audit_certifications/code.html', activeItem: 'services', variant: 'default', ctaLabel: 'Get Started' },
  { name: 'IndustriesPage', file: 'thakur_consultancy_industries_we_serve/code.html', activeItem: 'industries', variant: 'default', ctaLabel: 'Get Started' },
  { name: 'WorkingProcessPage', file: 'thakur_consultancy_working_process/code.html', activeItem: 'process', variant: 'default', ctaLabel: 'Consult Experts' },
  { name: 'BlogPage', file: 'thakur_consultancy_insights_compliance_blog/code.html', activeItem: 'blog', variant: 'default', ctaLabel: 'Get Started' },
  { name: 'FaqPage', file: 'thakur_consultancy_frequently_asked_questions/code.html', activeItem: 'faq', variant: 'default', ctaLabel: 'Get Started' },
  { name: 'ContactPage', file: 'thakur_consultancy_contact_us/code.html', activeItem: 'contact', variant: 'default', ctaLabel: 'Get Started' },
]

function extractBodyContent(html) {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)
  if (!bodyMatch) return ''
  let content = bodyMatch[1]

  content = content.replace(/<!-- TopNavBar -->[\s\S]*?<\/nav>/i, '')
  content = content.replace(/<!-- Top Navigation Bar -->[\s\S]*?<\/nav>/i, '')
  content = content.replace(/<header[^>]*>[\s\S]*?<\/header>/i, '')
  content = content.replace(/<nav[^>]*>[\s\S]*?<\/nav>/i, '')
  content = content.replace(/<\/header>/gi, '')

  content = content.replace(/<!-- Footer -->[\s\S]*?<\/footer>/i, '')
  content = content.replace(/<footer[\s\S]*?<\/footer>/i, '')
  content = content.replace(/<script[\s\S]*?<\/script>/gi, '')
  content = content.replace(/<style[\s\S]*?<\/style>/gi, '')
  content = content.replace(/<!--[\s\S]*?-->/g, '')

  return content.trim()
}

function htmlToJsx(html) {
  let jsx = html

  jsx = jsx.replace(/=&gt;/g, '=>')

  jsx = jsx.replace(/style="([^"]*)"/g, (_, styleStr) => {
    const props = styleStr
      .split(';')
      .filter(Boolean)
      .map((rule) => {
        const colonIdx = rule.indexOf(':')
        if (colonIdx === -1) return null
        const key = rule.slice(0, colonIdx).trim()
        const camelKey = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase())
        let value = rule.slice(colonIdx + 1).trim()
        if (/^\d+$/.test(value)) value = `${value}px`
        return `${camelKey}: '${value.replace(/'/g, "\\'")}'`
      })
      .filter(Boolean)
      .join(', ')
    return `style={{ ${props} }}`
  })

  jsx = jsx
    .replace(/\bclass=/g, 'className=')
    .replace(/\bfor=/g, 'htmlFor=')
    .replace(/\btabindex=/g, 'tabIndex=')
    .replace(/\breadonly\b/g, 'readOnly')
    .replace(/\bautocomplete=/g, 'autoComplete=')
    .replace(/\bmaxlength=/g, 'maxLength=')
    .replace(/\bcolspan=/g, 'colSpan=')
    .replace(/\browspan=/g, 'rowSpan=')

  jsx = jsx.replace(/<br\b([^>]*?)(?<!\/)>/gi, '<br$1 />')

  const voidTags = ['img', 'hr', 'input', 'meta', 'link', 'area', 'base', 'col', 'embed', 'param', 'source', 'track', 'wbr']
  for (const tag of voidTags) {
    const regex = new RegExp(`<${tag}([^>]*?)(?<!\\/)>`, 'gi')
    jsx = jsx.replace(regex, `<${tag}$1 />`)
  }

  jsx = jsx.replace(/\s\/\/>/g, ' />')
  jsx = jsx.replace(/&amp;/g, '&')
  jsx = jsx.replace(/&nbsp;/g, '\u00a0')

  return jsx
}

function wrapPage(name, content, meta) {
  const needsReveal = ['HomePage', 'AboutPage', 'IndustriesPage', 'HrCompliancePage', 'BlogPage'].includes(name)
  const imports = [`import Layout from '../components/layout/Layout'`]
  if (needsReveal) imports.push(`import { useScrollReveal } from '../hooks/useScrollReveal'`)
  if (name === 'FaqPage') imports.push(`import { toggleAccordion } from '../hooks/useFaqInteractions'`)
  if (name === 'ContactPage') imports.push(`import { FormEvent } from 'react'`)
  if (name === 'WorkingProcessPage') imports.push(`import { useEffect } from 'react'`)
  if (name === 'AccountingTaxPage') imports.push(`import { useEffect } from 'react'`)

  let hooks = ''
  if (needsReveal) hooks += '\n  useScrollReveal()\n'
  if (name === 'WorkingProcessPage') {
    hooks += `
  useEffect(() => {
    document.querySelectorAll('.step-node').forEach((node) => {
      node.addEventListener('mouseenter', () => node.classList.add('step-active'))
    })
  }, [])
`
  }
  if (name === 'AccountingTaxPage') {
    hooks += `
  useEffect(() => {
    document.querySelectorAll('.glass-card').forEach((card) => {
      card.addEventListener('mouseenter', () => card.classList.add('scale-[1.02]'))
      card.addEventListener('mouseleave', () => card.classList.remove('scale-[1.02]'))
    })
  }, [])
`
  }
  if (name === 'ContactPage') {
    hooks += `
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Thank you for your inquiry. Our team will contact you shortly.')
  }
`
  }

  let jsxContent = content
  if (name === 'ContactPage') {
    jsxContent = jsxContent.replace(/<form([^>]*)>/i, '<form$1 onSubmit={handleSubmit}>')
  }

  return `${imports.join('\n')}

export default function ${name}() {${hooks}
  return (
    <Layout activeItem="${meta.activeItem}" variant="${meta.variant}" ctaLabel="${meta.ctaLabel}">
      <>
${jsxContent
  .split('\n')
  .map((line) => '        ' + line)
  .join('\n')}
      </>
    </Layout>
  )
}
`
}

const outDir = path.join(root, 'src', 'pages')
fs.mkdirSync(outDir, { recursive: true })

for (const page of pages) {
  if (page.manual) {
    console.log(`Skipped ${page.name}.tsx (manual)`)
    continue
  }
  const htmlPath = path.join(stitchDir, page.file)
  const html = fs.readFileSync(htmlPath, 'utf8')
  const body = extractBodyContent(html)
  const jsx = htmlToJsx(body)
  const wrapped = wrapPage(page.name, jsx, page)
  fs.writeFileSync(path.join(outDir, `${page.name}.tsx`), wrapped)
  console.log(`Generated ${page.name}.tsx`)
}
