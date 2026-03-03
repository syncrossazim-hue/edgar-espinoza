'use client'

import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, Code, Zap, Heart, Camera } from 'lucide-react'

export default function AboutPage() {
    const values = [
        {
            icon: Heart,
            title: 'User-First Approach',
            description: 'I believe digital experiences should be intuitive and helpful, solving real problems for real people.',
        },
        {
            icon: Zap,
            title: 'Technical Excellence',
            description: 'Speed and stability are not features, they are requirements. I build for peak performance.',
        },
        {
            icon: Code,
            title: 'Scalable Craft',
            description: 'The code I write today is built to last, providing a solid foundation for your future growth.',
        },
        {
            icon: Sparkles,
            title: 'Aesthetic Precision',
            description: 'Beauty and function go hand in hand. Every detail matters in creating a premium brand feel.',
        },
    ]

    return (
        <>
            <Header />
            <main className="bg-background">
                {/* About Hero */}
                <section className="relative py-24 overflow-hidden border-b border-border/50">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary uppercase tracking-wider mb-6">
                                    <Camera className="w-3 h-3" /> Digital Craftsman
                                </div>
                                <h1 className="text-5xl font-bold text-foreground leading-tight tracking-tight mb-8">
                                    The Story Behind The <span className="text-primary">Craft</span>
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                                    Hi, I'm Edgar Espinoza. I bridge the gap between complex engineering and elegant design, helping ambitious brands stand out in a digital-first world.
                                </p>
                            </div>
                            <div className="relative">
                                <div className="aspect-3/4 rounded-2xl overflow-hidden border border-border shadow-2xl relative z-10">
                                    <img
                                        src="/profile.avif"
                                        alt="Edgar Espinoza - Digital Craftsman"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-[80px] -z-10" />
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-[80px] -z-10" />
                                <div className="absolute -bottom-8 -right-4 bg-card border border-border p-6 rounded-xl shadow-xl space-y-2 max-w-[200px] z-20">
                                    <p className="text-2xl font-bold text-primary">8+ Years</p>
                                    <p className="text-sm font-semibold text-foreground">Solving technical challenges with creative solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* My Journey */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-foreground">My Journey</h2>
                            <div className="w-12 h-1 bg-primary rounded-full" />
                        </div>
                        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground space-y-6">
                            <p>
                                My path into the digital world started with a fascination for how things work. What began as tinkering with code quickly evolved into a career dedicated to building high-performance web experiences.
                            </p>
                            <p>
                                Over the past 8 years, I've had the privilege of working with a diverse range of clients—from ambitious startups to established enterprises. Each project has reinforced my belief that the best digital solutions are born from a perfect balance of technical precision and human-centered design.
                            </p>
                            <p>
                                I don't just consider myself a developer or a designer; I'm a craftsman. I take pride in the code I write, the interfaces I design, and the measurable results I help my clients achieve. My goal is always to create digital assets that aren't just beautiful, but are strategic tools for growth.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Values section */}
                <section className="bg-card border-y border-border py-24">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-4xl font-bold text-foreground">What I Stand For</h2>
                            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                                These core principles guide every project I undertake and every line of code I write.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {values.map((value, index) => (
                                <div key={index} className="p-8 bg-background border border-border rounded-2xl hover:border-primary/50 transition-colors group">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                        <value.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="bg-linear-to-r from-primary to-primary/80 rounded-3xl p-12 md:p-16 text-center shadow-2xl shadow-primary/20">
                        <h2 className="text-4xl sm:text-5xl font-bold text-primary-foreground mb-6 text-balance">
                            Let's Build Something Exceptional
                        </h2>
                        <p className="text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto text-balance">
                            Whether you have a specific project in mind or just want to explore the possibilities, I'm here to help.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" className="h-14 px-10 text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90 transition-all hover:scale-[1.05]">
                                Book a Strategic Call <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
