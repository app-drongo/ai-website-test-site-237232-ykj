'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, Rocket } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';
import { useState, useEffect } from 'react';

const DEFAULT_HERO = {
  badge: 'New Release',
  title: 'Build. Deploy. Scale.',
  subtitle: 'The modern platform for developers who ship fast',
  description:
    'Deploy your applications instantly with zero configuration. Built for teams that value speed, reliability, and developer experience.',
  primaryCta: 'Get Started Free',
  primaryCtaHref: '/signup',
  secondaryCta: 'View Demo',
  secondaryCtaHref: '/demo',
  features: [
    { title: 'Instant Deploy', description: 'Push to deploy in seconds' },
    { title: 'Enterprise Security', description: 'SOC 2 compliant infrastructure' },
    { title: 'Global Edge', description: 'Deploy to 300+ locations worldwide' },
  ],
  stats: [
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '< 100ms', label: 'Cold Start' },
    { value: '50M+', label: 'Requests/day' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryClick = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="hero" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <div className="order-1 lg:order-1">
            {/* Badge */}
            <div
              className={`mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                <Zap className="h-4 w-4 mr-2 text-primary" />
                <span data-editable="badge">{config.badge}</span>
              </Badge>
            </div>

            {/* Main Heading */}
            <div
              className={`mb-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span data-editable="title">{config.title}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div
              className={`mb-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            {/* Description */}
            <div
              className={`mb-10 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span data-editable="description">{config.description}</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handlePrimaryClick}
                  data-editable-href="primaryCtaHref"
                  data-href={config.primaryCtaHref}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold group"
                >
                  <span data-editable="primaryCta">{config.primaryCta}</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleSecondaryClick}
                  data-editable-href="secondaryCtaHref"
                  data-href={config.secondaryCtaHref}
                  className="px-8 py-3 text-lg font-semibold"
                >
                  <span data-editable="secondaryCta">{config.secondaryCta}</span>
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div
              className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <div className="grid grid-cols-3 gap-6">
                {config.stats.map((stat, idx) => (
                  <div key={idx} className="text-left">
                    <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">
                      <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-2 lg:order-2">
            <div
              className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            >
              <div className="relative">
                {/* Hero Image */}
                <img
                  src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=1000&fit=crop&q=80"
                  alt="Modern development workspace with multiple monitors showing code and data visualizations"
                  className="aspect-square lg:aspect-[4/5] w-full object-cover rounded-2xl border border-border/50"
                />

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features - Full Width Below */}
        <div
          className={`mt-20 lg:mt-24 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {config.features.map((feature, idx) => (
              <div key={idx} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    {idx === 0 && <Zap className="h-6 w-6" />}
                    {idx === 1 && <Shield className="h-6 w-6" />}
                    {idx === 2 && <Rocket className="h-6 w-6" />}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </h3>
                <p className="text-muted-foreground">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
