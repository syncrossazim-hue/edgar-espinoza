'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { SERVICES, getServiceById } from '@/lib/services-data'
import { ArrowLeft, Check, Clock, DollarSign } from 'lucide-react'
import { useParams } from 'next/navigation'

export default function ServiceDetail() {
  const params = useParams()
  const serviceId = params.id as string
  const service = getServiceById(serviceId)

  if (!service) {
    return (
      <>
        <Header />
        <main className="bg-background">
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
            <p className="text-lg text-muted-foreground mb-8">
              The service you're looking for doesn't exist.
            </p>
            <Link href="/services">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Back to Services
              </Button>
            </Link>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  const relatedServices = SERVICES.filter((s) => s.id !== service.id).slice(0, 3)

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Breadcrumb */}
        <section className="border-b border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/services" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Services</span>
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6 inline-block">
                <service.icon className="w-16 h-16 text-primary" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
                {service.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                    Get Started
                  </Button>
                </Link>
                <Link href="#process">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-border hover:bg-muted">
                    Learn Our Process
                  </Button>
                </Link>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-6 h-6 text-accent" />
                  <span className="text-sm font-semibold text-muted-foreground">Delivery Time</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{service.timeline}</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-6 h-6 text-accent" />
                  <span className="text-sm font-semibold text-muted-foreground">Investment</span>
                </div>
                <p className="text-2xl font-bold text-foreground">{service.pricing}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-card border-y border-border py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">What's Included</h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <span className="text-lg text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Key Benefits</h2>
                <div className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <Check className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <span className="text-lg text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              A proven methodology tailored for {service.title.toLowerCase()} projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card border border-border rounded-lg p-8 h-full">
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mt-4">{step}</h3>
                </div>
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-1 bg-primary" />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        {service.technologies && (
          <section className="bg-card border-y border-border py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Technologies We Use</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {service.technologies.map((tech, index) => (
                  <div key={index} className="bg-background border border-border rounded-lg p-6 text-center">
                    <p className="text-lg font-semibold text-foreground">{tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Complementary Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <Link key={relatedService.id} href={`/services/${relatedService.id}`}>
                  <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <relatedService.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-3">{relatedService.title}</h3>
                    <p className="text-muted-foreground mb-6">{relatedService.shortDescription}</p>
                    <div className="text-primary font-semibold">Explore Service →</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 rounded-lg mx-4 sm:mx-6 lg:mx-8 my-16 p-12 md:p-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance">
            Let's discuss how {service.title} can transform your business. Book a free consultation today.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Schedule Consultation
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
