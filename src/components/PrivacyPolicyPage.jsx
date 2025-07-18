import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen section-padding">
      <div className="container-max">
        <div className="mb-8">
          <Link to="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            It is our commitment to end users to operate this web site with integrity and honesty – taking the time, effort, and care to protect users and information that may be provided.
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">ActionCOACH Global Privacy Policy</h2>
          <p className="text-gray-600 mb-6">
            Canada (PIPEDA), Brazil (LGPD), EU & UK (GDPR), California, USA (CCPA/ CPRA) and Australian Privacy Act 1988.
          </p>
          <p className="text-sm text-gray-500 mb-8"><em>Effective Date: April 15, 2025</em></p>

          <h3 className="text-xl font-bold text-blue-800 mb-3">1. Information We Collect</h3>
          <p className="mb-4">
            We collect personal information when voluntarily submitted by users through forms, contact pages, subscriptions, or enquiries. This may include:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Name, email address, phone number</li>
            <li>Business name, location, industry</li>
            <li>Preferences or interests related to coaching services</li>
            <li>Information included in open-text fields or uploaded documents</li>
          </ul>
          <p className="mb-6">
            We also collect certain technical data automatically (e.g. IP address, device type, browser, cookies).
          </p>

          <h3 className="text-xl font-bold text-blue-800 mb-3">2. Purpose of Collection</h3>
          <p className="mb-4">Your personal data is used to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Provide coaching services or respond to your enquiries</li>
            <li>Connect you with a local coach, franchisee, or licensee</li>
            <li>Send requested resources or information</li>
            <li>Improve the website experience and tailor content</li>
            <li>Send marketing communications, if you opt in</li>
          </ul>

          <h3 className="text-xl font-bold text-blue-800 mb-3">3. Legal Basis for Processing</h3>
          <p className="mb-4">Where applicable, we process your data under the following lawful bases:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Consent – when you opt in to receive updates or marketing</li>
            <li>Contractual necessity – when responding to enquiries or delivering services</li>
            <li>Legitimate interests – improving our services and user experience</li>
            <li>Legal obligation – where required by law</li>
          </ul>
          <p className="mb-6">
            In jurisdictions such as Canada (PIPEDA) and Brazil (LGPD), we ensure transparency, accountability, and purpose limitation in processing your data.
          </p>

          <h3 className="text-xl font-bold text-blue-800 mb-3">4. Third-Party Enquiries (Franchisees, Licensees, Coaches)</h3>
          <p className="mb-4">
            If you submit a request intended for a specific coach or regional representative, we may share your information with them. In this case:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>ActionCOACH acts as a data intermediary</li>
            <li>Your data will be used to respond to your enquiry or provide services</li>
            <li>That third party may contact you directly</li>
            <li>Their handling of your data is subject to their own privacy policies</li>
          </ul>

          <h3 className="text-xl font-bold text-blue-800 mb-3">5. Cookies and Tracking Technologies</h3>
          <p className="mb-4">We use cookies and similar tools to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Analyze site usage and performance</li>
            <li>Store your preferences</li>
            <li>Personalize content</li>
            <li>Provide functionality (e.g., login, form memory)</li>
          </ul>

          <h3 className="text-xl font-bold text-blue-800 mb-3">6. Sharing of Information</h3>
          <p className="mb-4">We do not sell your personal information.</p>
          <p className="mb-4">We may share data with:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Local franchisees, coaches, or licensees</li>
            <li>Technology vendors (e.g., CRM, analytics, cloud hosting)</li>
            <li>Government authorities, when legally required</li>
          </ul>
          <p className="mb-6">All third parties are bound by data protection agreements where applicable.</p>

          <h3 className="text-xl font-bold text-blue-800 mb-3">7. Data Retention</h3>
          <p className="mb-6">
            We retain personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Contact details and enquiry records may be kept for up to 12 months, unless a longer retention period is legally required or you continue as a client.
          </p>

          <h3 className="text-xl font-bold text-blue-800 mb-3">8. Data Security</h3>
          <p className="mb-6">
            We implement physical, electronic, and administrative safeguards to protect your data. Access is restricted to authorized staff and partners under strict confidentiality obligations.
          </p>

          <h3 className="text-xl font-bold text-blue-800 mb-3">9. International Data Transfers</h3>
          <p className="mb-4">
            As a global organization, your data may be processed in countries outside your region (e.g., the United States). Where applicable, we implement safeguards such as:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Standard Contractual Clauses (SCCs)</li>
            <li>Cross-border agreements with service providers</li>
            <li>Country-specific adequacy decisions (e.g., EU, UK, Canada)</li>
          </ul>
          <p className="mb-6">
            We take all reasonable steps to ensure your data remains protected in accordance with local privacy laws.
          </p>

          <h3 className="text-xl font-bold text-blue-800 mb-3">10. Your Rights</h3>
          <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>Access a copy of your data</li>
            <li>Correct or update inaccurate data</li>
            <li>Request deletion of your data ("right to be forgotten")</li>
            <li>Object to or restrict certain processing</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>
          <p className="mb-6">To exercise your rights, contact us at: stevenrouget@actioncoach.com</p>

          <h3 className="text-xl font-bold text-blue-800 mb-3">11. Children's Privacy</h3>
          <p className="mb-6">
            Our services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children.
          </p>

          <h3 className="text-xl font-bold text-blue-800 mb-3">12. Changes to this Policy</h3>
          <p className="mb-6">
            We may update this Privacy Policy periodically. Any changes will be posted on this page with the updated effective date.
          </p>

          <h3 className="text-xl font-bold text-blue-800 mb-3">13. Contact Us</h3>
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="font-semibold">Steven Rouget ActionCOACH</p>
            <p>Victoria, Australia</p>
            <p>Email: stevenrouget@actioncoach.com</p>
            <p>Phone: 0412 351 755</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage

