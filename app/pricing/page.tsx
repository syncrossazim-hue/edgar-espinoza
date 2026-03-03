'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PricingCard } from '@/components/pricing-card'
import { Button } from '@/components/ui/button'

export default function Pricing() {
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small projects and businesses just getting online',
      price: '$3,999',
      period: 'per project',
      cta: 'Get Started',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO',
        'Email support',
        'One round of revisions',
        'Modern animations',
        'Mobile optimized',
        'Form integration',
      ],
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses with more complex needs',
      price: '$8,999',
      period: 'per project',
      highlighted: true,
      cta: 'Get Started',
      features: [
        'Up to 15 pages',
        'Full design system',
        'Advanced SEO',
        'Priority support',
        'Unlimited revisions',
        'CMS integration',
        'User accounts',
        'Analytics setup',
        'API integrations',
        'Performance optimization',
      ],
    },
    {
      name: 'Enterprise',
      description: 'For large-scale projects with custom requirements',
      price: 'Custom',
      period: 'contact for quote',
      cta: 'Contact Us',
      features: [
        'Unlimited pages',
        'Custom development',
        'Advanced integrations',
        'Dedicated support team',
        ' 24/7 availability',
        'Custom architecture',
        'E-commerce solutions',
        'Real-time features',
        'Machine learning integration',
        'White-label options',
      ],
    },
  ]

  const addOns = [
    { name: 'Additional Pages', price: '$299/page' },
    { name: 'Advanced SEO Package', price: '$2,500' },
    { name: 'Monthly Maintenance', price: '$499/month' },
    { name: 'Content Writing', price: '$150/hour' },
    { name: 'Training & Documentation', price: '$250/hour' },
    { name: 'Priority Support', price: '$1,999/month' },
  ]

  const faqItems = [
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, bank transfers, and PayPal. A 50% deposit is required to begin work.',
    },
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we offer flexible payment plans. For projects over $5,000, we can arrange installment payments.',
    },
    {
      question: 'What is included in support?',
      answer: 'Support varies by plan. Starter includes email support, Professional includes priority email and phone, and Enterprise includes 24/7 dedicated support.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We stand by our work. If you\'re not satisfied, we\'ll work with you until you are. View our refund policy for details.',
    },
    {
      question: 'What if my project exceeds the scope?',
      answer: 'We\'ll discuss any scope changes upfront. Additional work is billed at $150/hour or we can adjust your plan.',
    },
    {
      question: 'How long is support included?',
      answer: 'All plans include 30 days of free post-launch support. Extended support and maintenance packages are available.',
    },
  ]

  return (
    <>
      <Header />
      <main className="bg-background">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Choose the right plan for your project. All plans include our commitment to quality and excellence.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingCard
                key={index}
                name={tier.name}
                description={tier.description}
                price={tier.price}
                period={tier.period}
                features={tier.features}
                highlighted={tier.highlighted}
                cta={tier.cta}
              />
            ))}
          </div>
        </section>

        {/* Add-ons */}
        <section className="bg-card border-y border-border py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
                Add-Ons & Extras
              </h2>
              <p className="text-xl text-muted-foreground text-balance">
                Extend your project with additional services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {addOns.map((addOn, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-6 flex items-center justify-between"
                >
                  <span className="text-foreground font-semibold">{addOn.name}</span>
                  <span className="text-accent font-bold">{addOn.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What\'s Included */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
              What\'s Included in Every Plan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Unlimited revisions during design phase',
              'Responsive & mobile-first design',
              'Fast, optimized performance',
              'SEO best practices',
              'Browser & device testing',
              'Accessibility compliance',
              'Clear documentation',
              'Post-launch support',
              'Source code ownership',
              'Modern technology stack',
              'Security best practices',
              'Analytics & tracking setup',
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                <p className="text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-card border-y border-border py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
                Pricing FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-background border border-border rounded-lg p-6"
                >
                  <h3 className="font-bold text-foreground mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-muted border border-border rounded-lg p-8">
            <h3 className="font-bold text-foreground mb-4">Pricing Disclaimer</h3>
            <p className="text-sm text-muted-foreground mb-4">
              All prices are estimates and subject to change based on scope, complexity, and specific requirements. Final pricing will be determined after our initial consultation and detailed project assessment.
            </p>
            <p className="text-sm text-muted-foreground">
              Rush delivery and weekend/holiday work may incur additional fees. Please contact us for a custom quote if you have unique requirements.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-primary/80 py-16 mt-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6 text-balance">
              Get a Custom Quote
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 text-balance">
              Every project is unique. Schedule a free consultation to get an accurate quote for your specific needs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
