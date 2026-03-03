import { LegalLayout } from '@/components/legal-layout'

export default function Refund() {
  return (
    <LegalLayout title="Refund Policy" lastUpdated="March 2026">
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">1. Overview</h2>
        <p className="text-muted-foreground mb-4">
          At Edgar Espinoza, we are committed to your satisfaction. We stand behind our work and will work with you to ensure you are completely satisfied with the deliverables.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">2. Refund Eligibility</h2>
        <p className="text-muted-foreground mb-4">Refunds may be requested within 30 days of project completion if:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
          <li>The deliverables do not meet the agreed-upon specifications</li>
          <li>There are material defects or failures that we cannot resolve</li>
          <li>We fail to deliver on the agreed timeline without valid cause</li>
        </ul>
        <p className="text-muted-foreground mb-4 font-semibold">
          Refunds are not available for dissatisfaction with design aesthetic choices or minor revisions that fall outside the included revision rounds.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">3. Refund Process</h2>
        <p className="text-muted-foreground mb-4">
          To request a refund, you must provide written documentation of the issue within 30 days of project completion. We will:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
          <li>Review your claim within 5 business days</li>
          <li>Attempt to resolve the issue at no additional cost</li>
          <li>If unresolvable, process a refund of paid fees minus work completed</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">4. Partial Refunds</h2>
        <p className="text-muted-foreground mb-4">
          If we have completed a significant portion of the work, refunds will be calculated on a pro-rata basis. For example, if 60% of the project is complete, you would be responsible for 60% of the project fee.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">5. Non-Refundable Circumstances</h2>
        <p className="text-muted-foreground mb-4">Refunds will not be issued for:</p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
          <li>Change of mind or aesthetic preference</li>
          <li>Scope creep or additional requirements not in the original agreement</li>
          <li>Client-caused delays or unavailability</li>
          <li>Requests made beyond 30 days of completion</li>
          <li>Services already rendered beyond the refund period</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">6. Refund Timeline</h2>
        <p className="text-muted-foreground mb-4">
          If a refund is approved, it will be processed within 10 business days. Depending on your financial institution, it may take an additional 3-5 business days for the funds to appear in your account.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property Upon Refund</h2>
        <p className="text-muted-foreground mb-4">
          If a refund is granted, Edgar Espinoza retains ownership of all deliverables until full payment is received. Upon refund, you will no longer have the right to use any custom designs or code created.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">8. Satisfaction Guarantee</h2>
        <p className="text-muted-foreground mb-4">
          While we offer refunds only for material failures, we are committed to your satisfaction. We include unlimited revisions during the design phase specifically to ensure you are happy with the direction before development begins. If you have concerns during the project, please communicate them immediately so we can address them.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">9. Dispute Resolution</h2>
        <p className="text-muted-foreground mb-4">
          In the event of a dispute regarding refund eligibility, both parties agree to attempt resolution through good-faith discussion. If resolution cannot be reached, disputes will be subject to binding arbitration.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact for Refund Requests</h2>
        <p className="text-muted-foreground mb-4">
          To request a refund, please contact us at:
        </p>
        <div className="bg-card border border-border rounded-lg p-6 text-muted-foreground">
          <p className="mb-2">Email: esgrespin1255@outlook.com</p>
          <p className="mb-2">Phone: +1 (914) 150-0043</p>
          <p>Please include &quot;Refund Request&quot; in the subject line and provide detailed documentation of the issue.</p>
        </div>
      </section>
    </LegalLayout>
  )
}
