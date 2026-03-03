import Link from 'next/link'
import { LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  id: string
  icon: LucideIcon
  title: string
  description: string
  deliveryTime: string
  features: string[]
}

export function ServiceCard({
  id,
  icon: Icon,
  title,
  description,
  deliveryTime,
  features,
}: ServiceCardProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <Icon className="w-8 h-8 text-primary" />
        <span className="text-xs font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
          {deliveryTime}
        </span>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>

      <div className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      <Link href={`/services/${id}`}>
        <Button className="w-full bg-primary cursor-pointer hover:bg-primary/90 text-primary-foreground">
          Learn More
        </Button>
      </Link>
    </div>
  )
}
