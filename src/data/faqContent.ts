export interface FaqItem {
  question: string
  answer: string
  defaultOpen?: boolean
}

export interface FaqSection {
  id: string
  title: string
  icon: string
  description: string
  questions: FaqItem[]
}

export const faqSections: FaqSection[] = [
  {
    id: 'hr',
    title: 'HR & Documentation',
    icon: 'groups',
    description: 'Onboarding, policies, contracts, and employee record management.',
    questions: [
      {
        question: 'What documents are essential for new employee onboarding in India?',
        answer:
          'Essential onboarding documents include the Offer Letter, Appointment Letter, KYC documents (Aadhaar, PAN), educational certificates, previous employment relieving letters, bank account details, and signed Confidentiality or NDA agreements. Thakur Consultancy provides a standardized digital toolkit to automate collection while ensuring full regulatory compliance.',
        defaultOpen: true,
      },
      {
        question: 'How often should employee policies and handbooks be updated?',
        answer:
          'Employee policies should be reviewed at least annually, or immediately after major labour law changes such as new Wage Code provisions. We recommend a bi-annual audit of your Employee Handbook to reflect hybrid work policies, POSH compliance, data privacy standards, and industry-specific requirements.',
      },
      {
        question: 'Is a POSH policy mandatory for all companies in India?',
        answer:
          'Yes. Under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013, every organization with 10 or more employees must have a written POSH policy, constitute an Internal Complaints Committee (ICC), and conduct annual awareness training. We draft compliant policies and assist with ICC formation.',
      },
      {
        question: 'What is the difference between an offer letter and an appointment letter?',
        answer:
          'An Offer Letter is a conditional proposal outlining role, compensation, and joining terms before employment begins. An Appointment Letter is issued upon acceptance and formalizes the employer-employee relationship with detailed terms of service, probation, notice period, and statutory references. Both must align with applicable labour laws.',
      },
      {
        question: 'How should companies maintain employee statutory registers?',
        answer:
          'Organizations must maintain registers under applicable acts including Muster Roll, Wage Register, Leave Register, and registers under the Shops & Establishments Act. These should be updated regularly, retained for prescribed periods, and made available during labour inspections. We digitize and maintain these registers for clients across Delhi NCR.',
      },
      {
        question: 'Can employment contracts include non-compete clauses in India?',
        answer:
          'Non-compete clauses during employment are generally enforceable if reasonable. Post-employment non-compete restrictions are largely unenforceable under Section 27 of the Indian Contract Act, except in limited cases involving trade secrets. We draft contracts that protect business interests while remaining legally valid.',
      },
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Statutory Filings',
    icon: 'verified_user',
    description: 'Regulatory filings, registrations, and multi-state compliance management.',
    questions: [
      {
        question: 'What is the difference between ISO certification and a SMETA audit?',
        answer:
          'ISO certifications (9001, 14001, 45001) validate management systems for quality, environment, or occupational health. SMETA is an ethical trade audit methodology covering labour standards, health and safety, environment, and business ethics for supply chain compliance. Many exporters need both — we help businesses prepare for and maintain multiple frameworks.',
        defaultOpen: true,
      },
      {
        question: 'How can multi-state companies ensure 100% statutory compliance?',
        answer:
          'Multi-state operations require a centralized compliance calendar tracking state-specific labour laws, professional tax, minimum wages, and shop act registrations. Our pan-India compliance platform maps location-wise obligations, automates renewal reminders, and reconciles monthly filings to eliminate gaps before they become penalties.',
      },
      {
        question: 'What are the penalties for late GST return filing?',
        answer:
          'Late filing of GSTR-3B attracts a late fee of ₹50 per day (₹25 CGST + ₹25 SGST), capped at ₹10,000 per return. Interest at 18% per annum applies on outstanding tax liability. Repeated delays can affect GST compliance rating and input tax credit claims. We ensure all clients file at least 48 hours before deadlines.',
      },
      {
        question: 'Is Shop and Establishment registration mandatory for offices in Delhi?',
        answer:
          'Yes. Every commercial establishment operating in Delhi must register under the Delhi Shops and Establishments Act within 90 days of commencing business. Registration covers working hours, weekly offs, leave policies, and display of abstracts. We handle registration, renewals, and amendments across NCR and other states.',
      },
      {
        question: 'What is a compliance calendar and why do businesses need one?',
        answer:
          'A compliance calendar lists every statutory deadline — EPF, ESIC, TDS, GST, professional tax, ROC filings, and labour returns — mapped to your entity structure. Without it, missed deadlines lead to interest, penalties, and audit exposure. We build and manage customized calendars for each client with automated alerts.',
      },
      {
        question: 'How do we handle compliance for remote and hybrid employees?',
        answer:
          'Remote employees must be registered under applicable state shops acts, professional tax (where applicable), and statutory benefits based on work location or company policy. Contracts should define work location, equipment, data security, and jurisdiction. We advise on structuring hybrid workforce compliance across multiple states.',
      },
    ],
  },
  {
    id: 'payroll',
    title: 'Payroll & Benefits',
    icon: 'payments',
    description: 'Salary processing, EPF, ESIC, TDS, and employee benefit administration.',
    questions: [
      {
        question: 'What are the current EPF and ESIC contribution rates in India?',
        answer:
          'EPF contribution is 12% of basic wages plus DA from both employer and employee (employer share includes 8.33% to EPS subject to wage ceiling). ESIC applies to employees earning up to ₹21,000/month at 0.75% employee and 3.25% employer contribution. Rates and wage ceilings are subject to government notifications — we monitor changes in real time.',
        defaultOpen: true,
      },
      {
        question: 'When is EPF registration mandatory for a company?',
        answer:
          'EPF registration is mandatory when an establishment employs 20 or more persons. Voluntary registration is available for smaller establishments. Once registered, all eligible employees must be enrolled. We handle EPF registration, monthly ECR filing, UAN generation, and resolution of EPFO portal discrepancies.',
      },
      {
        question: 'How is TDS on salary calculated and deposited?',
        answer:
          'Employers deduct TDS under Section 192 based on projected annual taxable income, considering declarations, exemptions (HRA, 80C, etc.), and the applicable income tax slab. TDS must be deposited by the 7th of the following month and quarterly returns filed in Form 24Q. We manage end-to-end payroll TDS with Form 16 issuance.',
      },
      {
        question: 'What is included in a standard payslip in India?',
        answer:
          'A compliant payslip includes employee details, pay period, earnings (basic, HRA, allowances), deductions (PF, ESIC, PT, TDS, loans), gross pay, net pay, and YTD figures. It should reflect components used for statutory calculations. Our payroll system generates audit-ready payslips aligned with your compensation structure.',
      },
      {
        question: 'How long does payroll outsourcing onboarding typically take?',
        answer:
          'Standard payroll integration takes 2–4 weeks depending on headcount, legacy data quality, and number of locations. We run a parallel payroll cycle in the first month to validate accuracy before go-live. Complex multi-state setups with contractor workforces may require 4–6 weeks.',
      },
      {
        question: 'Are gratuity and bonus statutory obligations for all employers?',
        answer:
          'Gratuity under the Payment of Gratuity Act applies to establishments with 10 or more employees after five years of continuous service. Bonus under the Payment of Bonus Act applies to establishments with 20 or more employees. Eligibility, calculation, and payment timelines differ — we ensure both are computed and provisioned correctly.',
      },
    ],
  },
  {
    id: 'accounting',
    title: 'Accounting & GST',
    icon: 'account_balance',
    description: 'Bookkeeping, GST registration, returns, and financial reporting.',
    questions: [
      {
        question: 'Who needs to register for GST in India?',
        answer:
          'Businesses with aggregate turnover exceeding ₹40 lakh (₹20 lakh for special category states) for goods, or ₹20 lakh for services, must register for GST. E-commerce sellers, casual taxable persons, and inter-state suppliers must register regardless of turnover. We assess liability and complete registration typically within 3–5 working days.',
        defaultOpen: true,
      },
      {
        question: 'What is the difference between GSTR-1 and GSTR-3B?',
        answer:
          'GSTR-1 reports outward supplies (sales invoices) and must be filed monthly or quarterly based on turnover scheme. GSTR-3B is a summary return with tax liability and input tax credit claims, filed monthly. Mismatches between GSTR-1 and GSTR-3B trigger notices — we reconcile both returns before submission.',
      },
      {
        question: 'How often should a private limited company file financial statements?',
        answer:
          'Every private limited company must file annual financial statements with the ROC within 30 days of the AGM (AOC-4) and annual return (MGT-7). Additionally, quarterly MIS reports aid management decisions. We prepare audit-ready books, statutory financials, and handle ROC filing end to end.',
      },
      {
        question: 'What records must businesses maintain for GST audit readiness?',
        answer:
          'GST law requires maintaining invoices, debit/credit notes, delivery challans, e-way bills, input tax credit registers, and reconciliation statements for at least six years. Digital records must be accessible for department audits. Our accounting practice maintains organized, retrieval-ready documentation.',
      },
      {
        question: 'Can input tax credit be claimed on employee welfare expenses?',
        answer:
          'ITC is generally blocked on goods and services used for exempt supplies, personal consumption, and certain specified categories under Section 17(5) of the CGST Act. Employee welfare expenses may be restricted depending on nature — for example, food and beverages, club memberships, and motor vehicles have specific rules. We advise on ITC optimization within legal bounds.',
      },
      {
        question: 'What is the due date for income tax return filing for companies?',
        answer:
          'Companies must file income tax returns by October 31 following the financial year end (July 31 if transfer pricing report not required). Belated returns attract penalties and interest. We handle corporate ITR preparation, tax audit (Form 3CD), and representation before assessing officers.',
      },
    ],
  },
  {
    id: 'audit',
    title: 'Audit & Certifications',
    icon: 'fact_check',
    description: 'Statutory audits, social audits, and international certification standards.',
    questions: [
      {
        question: 'How long does a standard statutory compliance audit take?',
        answer:
          'A typical statutory compliance audit for a mid-sized enterprise takes 2–6 weeks depending on headcount, number of locations, and scope (EPF, ESIC, labour laws, factory act). Pre-audit readiness assessments can reduce official audit duration by 30–40%. We provide a clear timeline after initial scoping.',
        defaultOpen: true,
      },
      {
        question: 'What is the validity period of ISO certifications?',
        answer:
          'ISO certifications are valid for three years subject to annual surveillance audits in years one and two. Recertification audit occurs in year three. Non-conformities must be closed within agreed timelines. Thakur Consultancy supports gap analysis, implementation, and surveillance audit preparation.',
      },
      {
        question: 'What documents are required for a SMETA or social compliance audit?',
        answer:
          'Auditors typically review employment contracts, wage records, working hour logs, health and safety policies, fire safety certificates, environmental permits, and worker interview records. Mock audits identify gaps before the official visit. We maintain audit-ready documentation packages for manufacturing and export units.',
      },
      {
        question: 'What is the difference between an internal audit and a statutory audit?',
        answer:
          'Internal audits are conducted by or for management to assess process effectiveness and compliance readiness on an ongoing basis. Statutory audits are legally mandated examinations of financial statements by a chartered accountant. Compliance audits focus on labour, tax, and regulatory adherence — we offer all three disciplines.',
      },
      {
        question: 'How should companies prepare for an EPFO or ESIC inspection?',
        answer:
          'Ensure ECR filings match salary registers, all eligible employees are enrolled, contribution challans are paid on time, and statutory registers are updated. Common inspection triggers include mismatched UAN data and delayed deposits. We conduct pre-inspection audits and represent clients during departmental visits.',
      },
      {
        question: 'What is a gap analysis report in the context of certification?',
        answer:
          'A gap analysis compares your current processes and documentation against certification standard requirements (ISO, WRAP, BSCI, etc.) and lists non-conformities with corrective action plans. It is the first step before formal certification audit and helps prioritize remediation by risk and timeline.',
      },
    ],
  },
  {
    id: 'labour',
    title: 'Labour Law',
    icon: 'gavel',
    description: 'Industrial relations, minimum wages, factory compliance, and contractor laws.',
    questions: [
      {
        question: 'What is the new Labour Codes status and how does it affect employers?',
        answer:
          'India\'s four Labour Codes (Wages, Industrial Relations, Social Security, and OSH) consolidate 29 existing laws. While implementation dates vary by state, employers should prepare for changes in wage definitions, fixed-term employment, social security coverage, and occupational safety obligations. We track state-wise rollout and advise on transition planning.',
        defaultOpen: true,
      },
      {
        question: 'What are the working hour limits under Indian labour law?',
        answer:
          'Generally, no adult worker shall work more than 9 hours a day or 48 hours a week under the Factories Act, with overtime at twice the ordinary wage rate. Shops and Establishments Acts in various states prescribe similar limits. We help configure shift rosters and overtime policies that comply with applicable state rules.',
      },
      {
        question: 'When is the Contract Labour (Regulation and Abolition) Act applicable?',
        answer:
          'CLRA applies to establishments employing 20 or more contract workers on any day in the preceding 12 months. Principal employers must ensure contractors hold valid licenses, pay wages on time, and provide statutory benefits. We audit contractor compliance and manage principal employer liability documentation.',
      },
      {
        question: 'What is the Labour Welfare Fund and who must contribute?',
        answer:
          'Labour Welfare Fund is a state-specific statutory contribution (e.g., Delhi, Maharashtra, Karnataka) funded by employees, employers, and government grants to finance welfare schemes. Applicability, rates, and filing frequency vary by state. We manage LWF registrations and periodic contributions for multi-state employers.',
      },
      {
        question: 'How are minimum wages determined for skilled and unskilled workers?',
        answer:
          'Minimum wages are set by central and state governments based on skill category (unskilled, semi-skilled, skilled, highly skilled), zone, and industry. Employers must pay the higher of central or state notified rates. We monitor wage notifications across NCR and update payroll structures accordingly.',
      },
      {
        question: 'What safety obligations apply under the Factories Act?',
        answer:
          'Manufacturing units must obtain factory licenses, maintain safety equipment, conduct periodic safety audits, display emergency procedures, and report accidents as prescribed. Health surveys and hazardous process compliances may apply. We support license renewals, safety documentation, and inspection readiness for industrial clients.',
      },
    ],
  },
]

export const totalFaqCount = faqSections.reduce((sum, section) => sum + section.questions.length, 0)
