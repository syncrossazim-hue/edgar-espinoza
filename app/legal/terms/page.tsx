import { LegalLayout } from '@/components/legal-layout'

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="March 2026">
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement</h2>
        <p className="text-muted-foreground mb-4">
          By accessing and using this website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">2. Use License</h2>
        <p className="text-muted-foreground mb-4">
          Permission is granted to temporarily download one copy of the materials (information or software) on Edgar Espinoza&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
          <li>Modifying or copying the materials</li>
          <li>Using the materials for any commercial purpose or for any public display</li>
          <li>Attempting to decompile or reverse engineer any software contained on the website</li>
          <li>Removing any copyright or other proprietary notations from the materials</li>
          <li>Transferring the materials to another person or &quot;mirroring&quot; the materials on any other server</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
        <p className="text-muted-foreground mb-4">
          The materials on Edgar Espinoza&apos;s website are provided on an &apos;as is&apos; basis. Edgar Espinoza makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
        <p className="text-muted-foreground mb-4">
          In no event shall Edgar Espinoza or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Edgar Espinoza&apos;s website, even if Edgar Espinoza or an authorized representative has been notified orally or in writing of the possibility of such damage.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">5. Project Terms</h2>
        <p className="text-muted-foreground mb-4 font-semibold">Payment Terms:</p>
        <p className="text-muted-foreground mb-4">
          A 50% deposit is required to begin work on a project. The remaining balance is due upon project completion. We accept all major credit cards and bank transfers.
        </p>
        <p className="text-muted-foreground mb-4 font-semibold">Revisions:</p>
        <p className="text-muted-foreground mb-4">
          The specified number of revision rounds are included in your package. Additional revisions beyond the included amount will be billed at $150/hour.
        </p>
        <p className="text-muted-foreground mb-4 font-semibold">Timeline:</p>
        <p className="text-muted-foreground mb-4">
          Project timelines are estimates based on scope and current workload. Delays in client feedback may impact final delivery dates.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">6. Intellectual Property</h2>
        <p className="text-muted-foreground mb-4">
          Upon full payment, all custom designs and code created for your project become your exclusive property. You may use, modify, and distribute the deliverables as you see fit. However, Edgar Espinoza retains the right to showcase the work in its portfolio with your permission.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">7. Confidentiality</h2>
        <p className="text-muted-foreground mb-4">
          Both parties agree to maintain the confidentiality of any proprietary information shared during the course of the project.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">8. Limitation of Liability</h2>
        <p className="text-muted-foreground mb-4">
          In no case shall Edgar Espinoza be liable for more than the amount paid for the project. This limitation applies regardless of whether the claim is based in contract, tort, strict liability, or any other legal theory.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">9. Modifications</h2>
        <p className="text-muted-foreground mb-4">
          Edgar Espinoza may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-foreground mb-4">10. Governing Law</h2>
        <p className="text-muted-foreground mb-4">
          These terms and conditions are governed by and construed in accordance with the laws of California, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>
      </section>
    </LegalLayout>
  )
}
