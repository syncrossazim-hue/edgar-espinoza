import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PricingCardProps {
  name: string
  description: string
  price: string
  period?: string
  features: string[]
  highlighted?: boolean
  cta?: string
}

export function PricingCard({
  name,
  description,
  price,
  period = 'per project',
  features,
  highlighted = false,
  cta = 'Get Started',
}: PricingCardProps) {
  return (
    <div
      className={`rounded-lg p-8 border transition-all ${highlighted
          ? 'bg-primary border-primary shadow-xl scale-105'
          : 'bg-card border-border hover:shadow-lg'
        }`}
    >
      {highlighted && (
        <div className="mb-4">
          <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <h3
        className={`text-2xl font-bold mb-2 ${highlighted ? 'text-primary-foreground' : 'text-foreground'
          }`}
      >
        {name}
      </h3>

      <p
        className={`text-sm mb-6 ${highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'
          }`}
      >
        {description}
      </p>

      <div className="mb-6">
        <span
          className={`text-4xl font-bold ${highlighted ? 'text-primary-foreground' : 'text-foreground'
            }`}
        >
          {price}
        </span>
        <span
          className={`text-sm ml-2 ${highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'
            }`}
        >
          {period}
        </span>
      </div>

      <Button
        className={`w-full mb-6 cursor-pointer ${highlighted
            ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
            : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }`}
      >
        {cta}
      </Button>

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <Check
              className={`w-5 h-5 flex-shrink-0 ${highlighted ? 'text-primary-foreground' : 'text-primary'
                }`}
            />
            <span
              className={`text-sm ${highlighted
                  ? 'text-primary-foreground'
                  : 'text-foreground'
                }`}
            >
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
