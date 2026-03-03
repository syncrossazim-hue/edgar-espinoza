import { LegalLayout } from '@/components/legal-layout'

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="March 2026">
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
        <p className="text-muted-foreground mb-4">
          Edgar Espinoza (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website. This Privacy Policy explains our practices regarding the collection, use, and disclosure of your information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
        <p className="text-muted-foreground mb-4">We may collect the following types of information:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
          <li>Contact information (name, email, phone number)</li>
          <li>Project information and requirements</li>
          <li>Payment information (processed securely)</li>
          <li>Website usage data and analytics</li>
          <li>Cookies and tracking technologies</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
        <p className="text-muted-foreground mb-4">We use collected information to:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
          <li>Provide and improve our services</li>
          <li>Communicate with you about projects</li>
          <li>Process payments and send invoices</li>
          <li>Analyze website usage and trends</li>
          <li>Send marketing communications (with consent)</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Security</h2>
        <p className="text-muted-foreground mb-4">
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, disclosure, alteration, and destruction. All payment information is encrypted and processed through secure payment gateways.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">5. Cookies and Tracking</h2>
        <p className="text-muted-foreground mb-4">
          Our website uses cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser. Some features may not function properly if cookies are disabled.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-Party Services</h2>
        <p className="text-muted-foreground mb-4">
          We may use third-party services for analytics, payments, and communication. These third parties have their own privacy policies, and we encourage you to review them.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
        <p className="text-muted-foreground mb-4">You have the right to:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of marketing communications</li>
          <li>Data portability</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
        <p className="text-muted-foreground mb-4">
          If you have questions about this Privacy Policy or our privacy practices, please contact us at:
        </p>
        <div className="bg-card border border-border rounded-lg p-6 text-muted-foreground">
          <p className="mb-2">Email: esgrespin1255@outlook.com</p>
          <p>Phone: +1 (914) 150-0043</p>
        </div>
      </section>
    </LegalLayout>
  )
}
