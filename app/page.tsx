'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ServiceCard } from '@/components/service-card'
import { PricingCard } from '@/components/pricing-card'
import { BookingModal } from '@/components/booking-modal'
import { Button } from '@/components/ui/button'
import { ChevronDown, Sparkles, Zap, Users, Award, ArrowRight } from 'lucide-react'

export default function Home() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [bookingModalOpen, setBookingModalOpen] = useState(false)

  const services = [
    {
      id: 'web-design',
      icon: Sparkles,
      title: 'Web Design',
      description: 'Beautiful, user-centered interfaces that convert',
      deliveryTime: '2-4 weeks',
      features: ['Responsive design', 'Accessibility first', 'Modern aesthetics'],
    },
    {
      id: 'development',
      icon: Zap,
      title: 'Development',
      description: 'Fast, scalable applications built with latest tech',
      deliveryTime: '4-8 weeks',
      features: ['Full-stack solutions', 'Performance optimized', 'API integrations'],
    },
    {
      id: 'consulting',
      icon: Users,
      title: 'Consulting',
      description: 'Strategic guidance for your digital transformation',
      deliveryTime: '1-2 weeks',
      features: ['Expert advice', 'Best practices', 'Custom roadmaps'],
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, Tech Startup',
      text: 'Exceptional work. They transformed our vision into a stunning reality. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      text: 'Best investment we made for our brand. The attention to detail was incredible.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
    {
      name: 'Emma Davis',
      role: 'Product Manager',
      text: 'Professional, creative, and responsive. They truly understand modern design.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
  ]

  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope, but most projects take 2-8 weeks from start to finish. We provide detailed timelines during the consultation phase.',
    },
    {
      question: 'What is your revision policy?',
      answer: 'We include unlimited revisions during the design phase and up to 3 rounds of revisions after project completion at no extra cost.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes, we offer maintenance packages for ongoing support, updates, and improvements to keep your project running smoothly.',
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing based on project scope, ranging from fixed project fees to hourly rates for consulting. Visit our pricing page for more details.',
    },
    {
      question: 'Can you help with my existing project?',
      answer: 'Absolutely! We provide audit, redesign, and optimization services for existing projects. Contact us to discuss your needs.',
    },
  ]

  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for new projects',
      price: '$3,999',
      features: ['Up to 5 pages', 'Responsive design', 'Basic SEO', 'Email support', 'One round of revisions'],
    },
    {
      name: 'Professional',
      description: 'Most popular choice',
      price: '$8,999',
      highlighted: true,
      features: ['Up to 15 pages', 'Full design system', 'Advanced SEO', 'Priority support', 'Unlimited revisions', 'CMS integration'],
    },
    {
      name: 'Enterprise',
      description: 'For complex projects',
      price: 'Custom',
      features: ['Unlimited pages', 'Custom development', 'API integrations', 'Dedicated support', 'Performance optimization', 'Analytics setup'],
    },
  ]

  const trustIndicators = [
    { label: '100+', description: 'Projects Completed' },
    { label: '50+', description: 'Happy Clients' },
    { label: '8+', description: 'Years Experience' },
    { label: '4.9/5', description: 'Average Rating' },
  ]

  return (
    <>
      <Header />
      <BookingModal isOpen={bookingModalOpen} onClose={() => setBookingModalOpen(false)} />
      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Sophisticated Background */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
          <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-50" />
          <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] opacity-30" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" /> available for new projects
                </div>

                <h1 className="text-6xl font-bold text-foreground leading-[1.1] tracking-tight text-balance">
                  Elevating Brands Through <span className="text-primary">Digital Innovation</span>
                </h1>

                <p className="text-xl text-muted-foreground max-w-xl text-balance leading-relaxed">
                  I'm Edgar Espinoza, a digital craftsman building high-performance web experiences that merge aesthetic design with technical excellence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] cursor-pointer"
                    onClick={() => setBookingModalOpen(true)}
                  >
                    Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Link href="/services">
                    <Button size="lg" className="h-14 px-8 text-lg border-border bg-secondary hover:bg-secondary/90 text-foreground transition-all cursor-pointer">
                      Explore Expertise
                    </Button>
                  </Link>
                </div>


              </div>

              <div className="hidden lg:block relative">
                <div className="relative z-10 p-4 bg-muted/30 rounded-2xl border border-border/50 backdrop-blur-sm">
                  <div className="aspect-4/3 bg-card border border-border rounded-xl overflow-hidden shadow-2xl flex items-center justify-center p-12">
                    <div className="relative w-full h-full border-2 border-dashed border-primary/20 rounded-lg flex items-center justify-center group pointer-events-none">
                      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                          <Zap className="w-10 h-10 text-primary" />
                        </div>
                        <p className="text-xl font-semibold text-foreground tracking-tight">Technical Excellence</p>
                        <p className="text-sm text-muted-foreground max-w-[200px] mx-auto">Merging modern design with industry-leading performance.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-10" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-card border-y border-border py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{indicator.label}</div>
                  <p className="text-muted-foreground text-sm">{indicator.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 border-b border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-border shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
                <img
                  src="/profile.avif"
                  alt="Edgar Espinoza - Digital Craftsman"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-background border border-border rounded-xl p-4 shadow-xl">
                <p className="text-sm font-bold text-foreground">Digital Craftsman</p>
                <p className="text-xs text-muted-foreground">Est. 2016</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
                  Meet Your <span className="text-primary">Digital Partner</span>
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  I'm Edgar Espinoza, and for the last 8+ years, I've dedicated myself to the art of digital creation. I don't just build websites; I craft high-performance machines that drive business growth.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground">Design Driven</h3>
                  <p className="text-sm text-muted-foreground">Every pixel is placed with purpose, ensuring your brand leaves a lasting impression.</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-foreground">Technically Precise</h3>
                  <p className="text-sm text-muted-foreground">Clean, scalable code built on modern frameworks for speed and security.</p>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/about">
                  <Button variant="link" className="px-0 text-primary font-bold text-lg hover:gap-3 transition-all cursor-pointer">
                    Learn My Full Story <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Comprehensive solutions tailored to your unique business needs and goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                deliveryTime={service.deliveryTime}
                features={service.features}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer">
                View All Services
              </Button>
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-card border-y border-border py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                Client Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
                Hear from our satisfied clients about their experience working with us
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-background border border-border rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-foreground italic">"{testimonial.text}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Preview */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Choose the plan that fits your needs. All plans include our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {pricingTiers.map((tier, index) => (
              <PricingCard
                key={index}
                name={tier.name}
                description={tier.description}
                price={tier.price}
                features={tier.features}
                highlighted={tier.highlighted}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/pricing">
              <Button className="cursor-pointer bg-primary hover:bg-primary/90 text-primary-foreground">
                View Full Pricing
              </Button>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-card border-y border-border py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-background transition-colors"
                  >
                    <h3 className="font-semibold text-foreground text-left">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform ${expandedFAQ === index ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {expandedFAQ === index && (
                    <div className="border-t border-border px-6 py-4 bg-background">
                      <p className="text-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-linear-to-r from-primary to-primary/80 rounded-lg p-12 md:p-16 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto text-balance">
              Let us help you create something amazing. Book a free consultation with our team today.
            </p>
            <Button
              size="lg"
              className="cursor-pointer bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              onClick={() => setBookingModalOpen(true)}
            >
              Schedule Your Consultation
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
