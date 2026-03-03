import Link from 'next/link'
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-bold text-foreground mb-4">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Edgar Espinoza is a digital craftsman specializing in building high-performance web experiences.
              Focused on merging aesthetic design with technical excellence to help brands grow.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Edgar Espinoza</strong>
              </p>
              <p>
                <a href="mailto:esgrespin1255@outlook.com" className="hover:text-primary transition-colors">
                  esgrespin1255@outlook.com
                </a>
              </p>
              <p>
                <a href="tel:+19141500043" className="hover:text-primary transition-colors">
                  +1 (914) 150-0043
                </a>
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal/refund" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Edgar Espinoza. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-4 sm:mt-0">
            Made with care and precision
          </p>
        </div>
      </div>
    </footer>
  )
}
