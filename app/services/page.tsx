'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { Button } from '@/components/ui/button'
import { SERVICES } from '@/lib/services-data'

export default function ServicesPage() {
  const processSteps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We understand your goals, audience, and requirements through detailed consultation.',
    },
    {
      number: '02',
      title: 'Design & Strategy',
      description: 'We create detailed designs and technical specifications for your approval.',
    },
    {
      number: '03',
      title: 'Development & Build',
      description: 'Our team builds your project with quality, performance, and scalability in mind.',
    },
    {
      number: '04',
      title: 'Testing & Refinement',
      description: 'Comprehensive testing ensures everything works perfectly across all platforms.',
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'We deploy your project and provide ongoing support and maintenance.',
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Comprehensive digital solutions designed to transform your business and achieve your goals
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.shortDescription}
                deliveryTime={service.deliveryTime}
                features={service.features}
              />
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="bg-card border-y border-border py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                Our Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                A proven methodology that ensures quality, on-time delivery, and your complete satisfaction
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-background border border-border rounded-lg p-6">
                  <div className="text-3xl font-bold text-primary mb-4">{step.number}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute right-0 top-1/2 w-4 h-1 bg-primary" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Why Choose Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Experienced professionals with a passion for digital excellence',
              },
              {
                title: 'Client-Focused',
                description: 'Your goals are our goals. We prioritize your vision and success',
              },
              {
                title: 'Quality Assured',
                description: 'Rigorous testing and quality control on every project',
              },
              {
                title: 'On-Time Delivery',
                description: 'We respect your timeline and deliver projects on schedule',
              },
              {
                title: 'Ongoing Support',
                description: 'Dedicated support and maintenance after project launch',
              },
              {
                title: 'Latest Technology',
                description: 'We use cutting-edge tools and frameworks for optimal results',
              },
            ].map((benefit, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-card border-y border-border py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Schedule a free consultation to discuss your needs and explore how we can help
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Book Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
