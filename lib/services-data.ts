import { LucideIcon, Palette, Code, Search, Smartphone, Zap, Cog } from 'lucide-react'

export interface Service {
  id: string
  icon: LucideIcon
  title: string
  shortDescription: string
  longDescription: string
  deliveryTime: string
  features: string[]
  benefits: string[]
  pricing: string
  timeline: string
  process: string[]
  technologies?: string[]
}

export const SERVICES: Service[] = [
  {
    id: 'ui-ux-design',
    icon: Palette,
    title: 'UI/UX Design',
    shortDescription: 'User-centered design that creates beautiful, intuitive experiences',
    longDescription:
      'We craft digital experiences that users love. Our UI/UX design service goes beyond aesthetics—we focus on creating interfaces that are intuitive, accessible, and drive user engagement. From initial concept to final implementation, we ensure every pixel serves a purpose.',
    deliveryTime: '2-3 weeks',
    features: ['Wireframing & prototyping', 'User research & testing', 'Design systems', 'Accessibility audit'],
    benefits: [
      'Increased user engagement and satisfaction',
      'Reduced bounce rates and improved conversions',
      'Consistent brand experience across platforms',
      'Faster development cycles with design systems',
      'Improved accessibility for all users',
    ],
    pricing: '$2,500 - $8,000',
    timeline: '2-3 weeks',
    process: [
      'User research and discovery',
      'Competitive analysis and benchmarking',
      'Wireframing and user flows',
      'Visual design and prototyping',
      'Usability testing and iteration',
      'Design system documentation',
    ],
    technologies: ['Figma', 'Adobe XD', 'Prototype.io', 'UserTesting'],
  },
  {
    id: 'full-stack-development',
    icon: Code,
    title: 'Full-Stack Development',
    shortDescription: 'Robust, scalable applications built with modern technology',
    longDescription:
      'Transform your ideas into powerful, scalable applications. Our full-stack development service covers everything from frontend interfaces to backend infrastructure, ensuring your application is performant, secure, and maintainable for years to come.',
    deliveryTime: '4-8 weeks',
    features: ['Frontend development', 'Backend development', 'Database design', 'API development'],
    benefits: [
      'Scalable architecture for growth',
      'High performance and reliability',
      'Security best practices implemented',
      'Maintainable, well-documented code',
      'Future-proof technology stack',
    ],
    pricing: '$5,000 - $20,000',
    timeline: '4-8 weeks',
    process: [
      'Technical requirements gathering',
      'Architecture and database design',
      'Frontend development',
      'Backend API development',
      'Integration and testing',
      'Deployment and monitoring setup',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: 'seo-performance',
    icon: Search,
    title: 'SEO & Performance',
    shortDescription: 'Optimize your site for search engines and peak performance',
    longDescription:
      'Get found online and load fast. Our SEO and performance optimization service ensures your website ranks high in search results and delivers blazing-fast load times. We combine technical SEO, content optimization, and performance tuning for maximum visibility and user satisfaction.',
    deliveryTime: '1-2 weeks',
    features: ['On-page SEO', 'Technical SEO', 'Performance optimization', 'Analytics setup'],
    benefits: [
      'Higher search engine rankings',
      'Increased organic traffic',
      'Improved user experience and engagement',
      'Better conversion rates',
      'Competitive advantage in search results',
    ],
    pricing: '$1,500 - $5,000',
    timeline: '1-2 weeks',
    process: [
      'SEO audit and analysis',
      'Keyword research and strategy',
      'Technical SEO improvements',
      'Content optimization',
      'Performance optimization',
      'Analytics setup and reporting',
    ],
    technologies: ['Google Search Console', 'SEMrush', 'Lighthouse', 'GTmetrix'],
  },
  {
    id: 'mobile-development',
    icon: Smartphone,
    title: 'Mobile Development',
    shortDescription: 'Native and cross-platform mobile applications',
    longDescription:
      'Reach your users on any device. We develop native iOS and Android apps, plus cross-platform solutions that work seamlessly across all devices. Our mobile applications are optimized for performance, user experience, and app store success.',
    deliveryTime: '6-12 weeks',
    features: ['iOS development', 'Android development', 'Cross-platform apps', 'App store optimization'],
    benefits: [
      'Reach millions of mobile users',
      'Native performance and user experience',
      'Cross-platform efficiency with native quality',
      'App store optimization and visibility',
      'Offline functionality and synchronization',
    ],
    pricing: '$8,000 - $30,000',
    timeline: '6-12 weeks',
    process: [
      'Mobile strategy and planning',
      'UI/UX design for mobile',
      'Native or cross-platform development',
      'Backend API integration',
      'Testing and quality assurance',
      'App store submission and launch',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
  },
  {
    id: 'ecommerce-solutions',
    icon: Zap,
    title: 'E-Commerce Solutions',
    shortDescription: 'Complete e-commerce platforms that drive sales',
    longDescription:
      'Launch your online store with confidence. We build complete e-commerce solutions that are designed to convert. From product showcase to checkout optimization, payment integration to inventory management, we handle every aspect of your online business.',
    deliveryTime: '4-6 weeks',
    features: ['Store setup', 'Payment integration', 'Inventory management', 'Marketing tools'],
    benefits: [
      'Increased sales and revenue',
      'Reduced cart abandonment',
      'Streamlined inventory management',
      'Integrated marketing tools',
      'Mobile-optimized shopping experience',
    ],
    pricing: '$4,000 - $15,000',
    timeline: '4-6 weeks',
    process: [
      'E-commerce platform selection',
      'Store design and setup',
      'Product catalog creation',
      'Payment and shipping integration',
      'Marketing and SEO optimization',
      'Testing and launch preparation',
    ],
    technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Klaviyo'],
  },
  {
    id: 'consulting-strategy',
    icon: Cog,
    title: 'Consulting & Strategy',
    shortDescription: 'Expert guidance for your digital transformation',
    longDescription:
      'Make informed decisions about your digital future. Our consulting service provides expert guidance on technology strategy, digital transformation, and business optimization. We work with you to identify opportunities, mitigate risks, and create a roadmap for success.',
    deliveryTime: '1-4 weeks',
    features: ['Digital audits', 'Technology roadmaps', 'Architecture review', 'Team training'],
    benefits: [
      'Clear technology strategy aligned with business goals',
      'Reduced technical debt and risk',
      'Optimized team efficiency',
      'Better technology investment decisions',
      'Competitive digital advantage',
    ],
    pricing: '$2,000 - $10,000',
    timeline: '1-4 weeks',
    process: [
      'Business and technology discovery',
      'Current state analysis',
      'Gap identification and opportunity assessment',
      'Strategy and roadmap development',
      'Implementation planning',
      'Team training and knowledge transfer',
    ],
    technologies: ['Industry best practices', 'Market research', 'Competitive analysis'],
  },
]

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((service) => service.id === id)
}
