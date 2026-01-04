'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Play, Zap, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  badge: 'New Release',
  title: 'Technology Made Simple',
  subtitle:
    'Clean, intuitive solutions that bridge the gap between complex technology and everyday users. Experience effortless innovation.',
  description:
    'We believe technology should work for everyone, not just experts. Our streamlined approach transforms complicated processes into simple, user-friendly experiences.',
  primaryCta: 'Get Started',
  primaryCtaHref: '/start',
  secondaryCta: 'Watch Demo',
  imageUrl: 'https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt: 'Clean technology workspace with modern devices',
  features: [
    { title: 'Simple by Design', description: 'Intuitive interfaces that anyone can use' },
    { title: 'Secure & Reliable', description: 'Enterprise-grade security made accessible' },
    { title: 'User-Focused', description: 'Built for real people, not just tech experts' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePrimaryCta = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="hero" className="bg-background text-foreground py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
              >
                <span data-editable="badge">{config.badge}</span>
              </Badge>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span data-editable="title">{config.title}</span>
                </h1>

                <p className="text-xl text-muted-foreground leading-relaxed">
                  <span data-editable="subtitle">{config.subtitle}</span>
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  <span data-editable="description">{config.description}</span>
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handlePrimaryCta}
                data-editable-href="primaryCtaHref"
                data-href={config.primaryCtaHref}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 group"
              >
                <span data-editable="primaryCta">{config.primaryCta}</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleSecondaryClick}
                className="border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200 group"
              >
                <Play
                  className={`mr-2 h-4 w-4 transition-transform ${isPlaying ? 'scale-110' : ''}`}
                />
                <span data-editable="secondaryCta">{config.secondaryCta}</span>
              </Button>
            </div>

            {/* Feature Pills */}
            <div className="grid gap-4 sm:grid-cols-3">
              {config.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="text-primary mt-1">
                    {idx === 0 && <Zap className="h-5 w-5" />}
                    {idx === 1 && <Shield className="h-5 w-5" />}
                    {idx === 2 && <Users className="h-5 w-5" />}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-sm">
                      <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      <span data-editable={`features[${idx}].description`}>
                        {feature.description}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl bg-muted">
              <Image
                src={config.imageUrl}
                alt={config.imageAlt}
                data-editable-src="imageUrl"
                width={800}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                priority
              />

              {/* Overlay gradient for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />

              {/* Floating elements for visual interest */}
              <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
