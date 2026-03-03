import { LegalLayout } from '@/components/legal-layout'

export default function ServiceAgreement() {
  return (
    <LegalLayout title="Service Agreement" lastUpdated="March 2026">
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">1. Parties</h2>
        <p className="text-muted-foreground mb-4">
          This Service Agreement (&quot;Agreement&quot;) is entered into between Edgar Espinoza (&quot;Service Provider&quot;) and the client (&quot;Client&quot;).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">2. Scope of Services</h2>
        <p className="text-muted-foreground mb-4">
          The Service Provider agrees to provide the services as outlined in the project proposal and agreed upon by both parties. Any services not explicitly listed in the proposal are considered outside the scope and may require additional fees.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">3. Timeline and Deliverables</h2>
        <p className="text-muted-foreground mb-4">
          The Service Provider will deliver the project according to the timeline specified in the project proposal. The timeline begins upon receipt of the initial deposit and completion of the discovery phase. Delays caused by Client feedback or materials may extend the timeline.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">4. Fees and Payment</h2>
        <p className="text-muted-foreground mb-4 font-semibold">Payment Structure:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
          <li>50% deposit required to begin work</li>
          <li>Remaining 50% due upon project completion</li>
          <li>Payment must be received before deliverables are released</li>
          <li>Late payment may result in suspension of services</li>
        </ul>
        <p className="text-muted-foreground mb-4 font-semibold">Additional Fees:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
          <li>Scope creep: $150/hour</li>
          <li>Extra revisions beyond included rounds: $150/hour</li>
          <li>Rush delivery: 25% surcharge</li>
          <li>Weekend/holiday work: 50% surcharge</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">5. Revisions</h2>
        <p className="text-muted-foreground mb-4">
          The agreed-upon package includes a specific number of revision rounds during the design phase. Each revision round allows for feedback and modifications to the designs. Once development begins, revisions are limited to 3 rounds. Additional revisions are billed at $150/hour.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">6. Client Responsibilities</h2>
        <p className="text-muted-foreground mb-4">The Client agrees to:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
          <li>Provide clear project requirements and materials promptly</li>
          <li>Respond to requests for feedback within 5 business days</li>
          <li>Provide content, images, and branding materials on time</li>
          <li>Communicate changes and concerns immediately</li>
          <li>Honor payment obligations as outlined</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property Rights</h2>
        <p className="text-muted-foreground mb-4">
          Upon receipt of full payment, all custom designs, code, and deliverables created specifically for this project become the exclusive property of the Client. The Service Provider retains the right to:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
          <li>Display the work in portfolio and case studies (with permission)</li>
          <li>Use the work for marketing purposes</li>
          <li>Reuse general design patterns and code frameworks (not custom code)</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">8. Confidentiality</h2>
        <p className="text-muted-foreground mb-4">
          Both parties agree to maintain strict confidentiality regarding any proprietary information, business strategies, or sensitive data shared during the course of the project. This obligation continues for 2 years after project completion.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">9. Warranties</h2>
        <p className="text-muted-foreground mb-4">
          The Service Provider warrants that all work will be performed in a professional and timely manner in accordance with industry standards. However, the Service Provider does not warrant that the project will generate specific business results or revenue.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">10. Limitation of Liability</h2>
        <p className="text-muted-foreground mb-4">
          The Service Provider&apos;s total liability under this Agreement shall not exceed the total amount paid for the project. The Service Provider will not be liable for indirect, incidental, or consequential damages.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">11. Termination</h2>
        <p className="text-muted-foreground mb-4">
          Either party may terminate this Agreement with written notice. If the Client terminates, they are responsible for payment for work completed to that point. If the Service Provider terminates due to Client non-payment or breach, the Client forfeits any deposits.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">12. Post-Launch Support</h2>
        <p className="text-muted-foreground mb-4">
          All projects include 30 days of free post-launch support for bug fixes and minor adjustments. Additional support and maintenance are available through our support packages at $499/month or $150/hour.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">13. Communication</h2>
        <p className="text-muted-foreground mb-4">
          Communication will primarily occur via email. The Client agrees to provide a primary contact person who will be responsible for all project communication and decisions.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">14. Governing Law</h2>
        <p className="text-muted-foreground mb-4">
          This Agreement is governed by the laws of California, United States. Any disputes shall be resolved through binding arbitration.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">15. Agreement Acceptance</h2>
        <p className="text-muted-foreground mb-4">
          By signing the project proposal or submitting the initial deposit, the Client agrees to all terms outlined in this Service Agreement and the specific project proposal.
        </p>
      </section>
    </LegalLayout>
  )
}
