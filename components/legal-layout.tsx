import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="mb-12">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-4">{title}</h1>
            <p className="text-muted-foreground">Last updated: {lastUpdated}</p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="text-foreground space-y-6">
              {children}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
