import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'

export default function Contact() {
  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
              Let&apos;s Talk
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Whether you have a question or want to start a project, feel free to reach out. I&apos;m here to help.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ContactForm />
        </section>

        {/* Contact Info Section */}
        <section className="bg-card border-y border-border py-20 mt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Email */}
              <div className="bg-background rounded-lg p-8 border border-border text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:esgrespin1255@outlook.com"
                  className="text-primary hover:underline break-all"
                >
                  esgrespin1255@outlook.com
                </a>
              </div>

              {/* Phone */}
              <div className="bg-background rounded-lg p-8 border border-border text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684h2.064a1 1 0 00.948-.684h3.28a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Phone</h3>
                <a
                  href="tel:+19141500043"
                  className="text-primary hover:underline"
                >
                  +1 (914) 150-0043
                </a>
              </div>

              {/* Location */}
              <div className="bg-background rounded-lg p-8 border border-border text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">
                  La Reina Avenue, 9620<br />
                  Downey, CA 90240<br />
                  United States of America
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
