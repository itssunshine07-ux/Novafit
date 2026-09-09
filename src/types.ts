export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  preferredProgram: string;
  preferredDate: string;
  preferredTimeSlot: string;
  message: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  features: string[];
  intensity: 'Medium' | 'High' | 'Custom / All Levels' | 'Low-Impact / Restorative';
  duration: string;
  capacity: string;
  targetAudience: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceAnnualMonthly: number;
  popular?: boolean;
  features: string[];
  ctaText: string;
  suitableFor: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  metric: string;
  timeframe: string;
  program: string;
  rating: number;
  category: 'Strength' | 'Recomposition' | 'Mobility & Wellness';
}

export interface StatItem {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
