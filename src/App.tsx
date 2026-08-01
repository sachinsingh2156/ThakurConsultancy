import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import HrCompliancePage from './pages/HrCompliancePage'
import AccountingTaxPage from './pages/AccountingTaxPage'
import AuditCertificationsPage from './pages/AuditCertificationsPage'
import IndustriesPage from './pages/IndustriesPage'
import WorkingProcessPage from './pages/WorkingProcessPage'
import BlogPage from './pages/BlogPage'
import FaqPage from './pages/FaqPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services/hr-compliance" element={<HrCompliancePage />} />
        <Route path="/services/accounting-tax" element={<AccountingTaxPage />} />
        <Route path="/services/audit-certifications" element={<AuditCertificationsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/process" element={<WorkingProcessPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  )
}
