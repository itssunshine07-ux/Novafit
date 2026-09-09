import { ServiceItem, PricingPlan, TestimonialItem, StatItem, FaqItem } from '../types';

export const STUDIO_DETAILS = {
  name: 'NOVAFIT',
  fullName: 'NOVAFIT Modern Fitness & Wellness Studio',
  tagline: 'Transform Your Body, Elevate Your Mind',
  address: '450 Athletic Way, Suite 100, Downtown Design District',
  city: 'Metropolis, NY 10012',
  phone: '+1 (555) 842-6682',
  email: 'concierge@novafitstudio.com',
  hours: {
    weekdays: '5:30 AM – 10:00 PM',
    saturday: '7:00 AM – 8:00 PM',
    sunday: '8:00 AM – 6:00 PM',
  },
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'strength-training',
    title: 'Strength Training',
    subtitle: 'Biomechanics & Progressive Overload',
    description: 'Build functional muscle, elevate bone density, and master human movement patterns using precision Eleiko barbells, calibrated plates, and custom-engineered strength stations.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1200&auto=format&fit=crop',
    badge: 'Core Foundation',
    intensity: 'High',
    duration: '60 min',
    capacity: 'Open Floor / Coach Supported',
    targetAudience: 'Athletes seeking power, sculpted physique, and longevity',
    features: [
      'Olympic weightlifting platforms & calibrated steel plates',
      'Individualized progressive overload tracking via app',
      'Biomechanics and joint-friendly movement coaching',
      'Power racks, belt squat machines & specialized barbells'
    ]
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    subtitle: 'Bespoke 1-on-1 Performance Architecture',
    description: 'Work with elite CSCS-certified coaches who formulate an entirely customized training protocol, metabolic schedule, and movement roadmap tailored strictly to your physiological blueprint.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop',
    badge: '1-on-1 Dedicated',
    intensity: 'Custom / All Levels',
    duration: '55 min',
    capacity: 'Private 1-on-1',
    targetAudience: 'High-performers who demand maximum accountability & speed',
    features: [
      'Comprehensive 3D InBody & functional mobility assessment',
      'Customized periodized training blocks updated bi-weekly',
      'Real-time heart rate and velocity-based training metrics',
      'Direct ongoing access to your dedicated coach'
    ]
  },
  {
    id: 'group-classes',
    title: 'Group Classes',
    subtitle: 'High-Energy Conditioning & MetCon',
    description: 'Feel the electrifying collective momentum of small-group functional athletic conditioning. Capped at 14 members per session so you receive intimate coaching form corrections.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop',
    badge: 'Intimate Squads',
    intensity: 'High',
    duration: '50 min',
    capacity: 'Max 14 Members',
    targetAudience: 'Anyone inspired by community drive, music, and sweat',
    features: [
      'Heart-rate zoned cardiovascular and anaerobic circuits',
      'Turf sprint lanes, Rogue Echo bikes, Concept2 rowers & SkiErgs',
      'Audio-engineered acoustic studio with motivating curated playlists',
      'Scalable modifications for every fitness background'
    ]
  },
  {
    id: 'yoga-mobility',
    title: 'Yoga & Mobility',
    subtitle: 'Active Recovery, Breathwork & Fascial Release',
    description: 'Restore muscle elasticity, decompress the nervous system, and unlock unrestricted mobility. Blending dynamic athletic Vinyasa, Yin fascial work, and guided diaphragmatic breathwork.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop',
    badge: 'Restoration',
    intensity: 'Low-Impact / Restorative',
    duration: '55 min',
    capacity: 'Max 16 Members',
    targetAudience: 'Tense bodies, stressed minds, and active recovery days',
    features: [
      'Warm bamboo studio with circadian ambient lighting',
      'Myofascial trigger point release using targeted balls and rollers',
      'Guided autonomic nervous system down-regulation breathwork',
      'Joint stability drills to bulletproof shoulders and hips'
    ]
  },
  {
    id: 'nutrition-wellness',
    title: 'Nutrition & Wellness',
    subtitle: 'Clinical Scans, Longevity & Metabolic Fueling',
    description: 'Sustainable nutritional transformation without dogmatic fad diets. Our registered dietitians evaluate your metabolic rate, lifestyle cadence, and bio-markers to architect lasting vitality.',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1200&auto=format&fit=crop',
    badge: 'Vitality & Science',
    intensity: 'Custom / All Levels',
    duration: 'Ongoing Guidance',
    capacity: '1-on-1 Consultation',
    targetAudience: 'Anyone seeking energy, body recomposition, and digestive health',
    features: [
      'InBody 770 multi-frequency body composition scans',
      'Macro & micronutrient blueprints tailored to training days',
      'Sleep hygiene, circadian rhythms, and hydration protocols',
      'Restaurant dining and travel nutrition playbooks'
    ]
  }
];

export const STATS_DATA: StatItem[] = [
  {
    value: 98,
    suffix: '%',
    label: 'Goal Attainment',
    description: 'Members achieving their documented target within 90 days'
  },
  {
    value: 15,
    suffix: '+',
    label: 'Master Coaches',
    description: 'CSCS & NASM credentialed specialists with 8+ yrs experience'
  },
  {
    value: 4500,
    suffix: '+',
    label: 'Lives Elevated',
    description: 'Athletes, executives, and everyday people thriving at NovaFit'
  },
  {
    value: 12000,
    suffix: ' sq ft',
    label: 'Modern Sanctuary',
    description: 'Acoustically tuned training floors & contrast recovery suites'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'core-movement',
    name: 'Core Movement',
    tagline: 'Ideal for establishing consistency and athletic conditioning',
    priceMonthly: 189,
    priceAnnualMonthly: 159,
    features: [
      '8 Studio Group Classes per month',
      'Full open studio gym access (off-peak hours)',
      'Quarterly InBody 770 body composition scan',
      'NovaFit mobile app performance tracking',
      'Locker room & rain shower amenities',
      '1 Complimentary guest pass per month'
    ],
    ctaText: 'Choose Core Plan',
    suitableFor: 'Fitness enthusiasts complementing outside sports or cardio'
  },
  {
    id: 'studio-elite',
    name: 'Studio Elite',
    tagline: 'Our most comprehensive transformation membership',
    priceMonthly: 289,
    priceAnnualMonthly: 239,
    popular: true,
    features: [
      'Unlimited Studio Group Classes (MetCon, Strength, Yoga)',
      '2 One-on-One Personal Training sessions per month',
      'Full unrestricted open studio gym access 7 days a week',
      'Monthly InBody 770 scans & dietitian macro review',
      'Access to Contrast Recovery Lounge (Sauna & Cold Plunge)',
      '3 Complimentary guest passes per month',
      'Towel service, locker storage & recovery shake bar discounts'
    ],
    ctaText: 'Start Studio Elite',
    suitableFor: 'Those committed to serious physique and mental elevation'
  },
  {
    id: 'all-access-vip',
    name: 'All-Access VIP',
    tagline: 'Uncompromising luxury, private coaching & total longevity concierge',
    priceMonthly: 489,
    priceAnnualMonthly: 419,
    features: [
      'Unlimited Studio Group Classes with priority booking',
      'Weekly 1-on-1 Personal Training sessions (4 per month)',
      'Unlimited Contrast Therapy Lounge (Cold Plunge + Infrared Sauna)',
      'Dedicated Registered Dietitian & bespoke meal protocol',
      '24/7 direct messaging access to your Head Performance Coach',
      'Permanent reserved executive locker & laundry service',
      'Unlimited guest passes for friends & partners'
    ],
    ctaText: 'Claim VIP Membership',
    suitableFor: 'Athletes & executives demanding elite executive wellness'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: '1',
    name: 'Marcus Vance',
    role: 'Tech Executive & Father of Two',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop',
    quote: 'NovaFit isn’t just another gym where you get lost in the noise. The coaches treated my spine rehabilitation and strength goals like serious science. In 4 months, my chronic lower back stiffness vanished and I hit personal record deadlifts.',
    metric: 'Down 7% body fat • Pain-free back',
    timeframe: 'Member for 14 months',
    program: 'Personal Training & Strength',
    rating: 5,
    category: 'Strength'
  },
  {
    id: '2',
    name: 'Elena Rostova',
    role: 'Architect & Marathoner',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
    quote: 'The synergy between high-energy group MetCon and the contrast recovery plunge is unbeatable. The electric lime design, the acoustic lighting, and the community warmth keep me showing up at 6:00 AM smiling.',
    metric: 'Shaved 18 min off marathon PB',
    timeframe: 'Member for 9 months',
    program: 'Group Classes & Recovery',
    rating: 5,
    category: 'Recomposition'
  },
  {
    id: '3',
    name: 'David K. Thorne',
    role: 'Creative Director',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    quote: 'Walking in feels like stepping into a high-end design museum combined with an Olympic training facility. The consultation alone gave me more physiological clarity than years of trying random fitness apps.',
    metric: '+14 lbs Lean Mass in 6 Months',
    timeframe: 'Member for 1.5 years',
    program: 'Studio Elite Tier',
    rating: 5,
    category: 'Strength'
  },
  {
    id: '4',
    name: 'Sarah Chen-Macleod',
    role: 'Physician & Mother',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
    quote: 'As a medical professional, I am skeptical of gimmicks. NovaFit’s coaches hold legitimate master’s degrees and focus on longevity, hormone balance, and mobility. The yoga and fascial release classes are pure therapy.',
    metric: 'Resting Heart Rate from 74 to 56 bpm',
    timeframe: 'Member for 11 months',
    program: 'Yoga & Mobility + Nutrition',
    rating: 5,
    category: 'Mobility & Wellness'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'What actually happens during my Free Consultation?',
    answer: 'Your 45-minute consultation is a zero-pressure discovery session. You’ll sit down with a Senior Performance Coach for a detailed health review, receive a medical-grade InBody 770 3D body composition scan, undergo a functional movement screening (FMS) to identify movement asymmetries, and walk away with an actionable 30-day training blueprint.',
    category: 'Consultation'
  },
  {
    question: 'I am a beginner or haven’t trained in years. Is NovaFit too intense?',
    answer: 'Not at all. Over 40% of our new members come to us after taking years off or starting from scratch. Because our group classes are capped at 14 members, coaches offer tailored modifications for every exercise. In personal training, your program is calibrated 100% to your current baseline.',
    category: 'Experience'
  },
  {
    question: 'How does the Contrast Recovery Lounge work?',
    answer: 'Our Contrast Recovery Suite includes Finnish cedar dry saunas (195°F) paired with medical-grade filtered cold plunge tubs chilled to 42°F, alongside zero-gravity lounge chairs and Normatec lymphatic compression boots. We teach you contrast protocols that accelerate muscle recovery and elevate dopamine.',
    category: 'Amenities'
  },
  {
    question: 'Can I freeze or pause my membership when traveling for work?',
    answer: 'Yes! All NovaFit memberships can be paused or frozen with a simple tap in our mobile app or a quick email to concierge, with zero penalties or hidden administrative fees.',
    category: 'Memberships'
  },
  {
    question: 'Is parking available at the studio?',
    answer: 'Yes, we provide 2 hours of complimentary secure underground parking right below our building at 450 Athletic Way. We also have high-speed electric vehicle charging and secure indoor bike storage.',
    category: 'Studio'
  }
];
