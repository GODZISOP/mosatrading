import honeyImg from '../images/royal-sidr-honey.jpg';

export const categories = [
  {
    id: 'smart-electronics',
    name: 'Smart Tech & Gadgets',
    description: 'High-fidelity spatial audio, AMOLED smart wearables, and next-gen commercial consumer electronics.',
    buttonText: 'Shop Electronics',
    link: '#',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'home-living',
    name: 'Home & Modern Living',
    description: 'Architectural eye-care illumination, ceramic ultrasonic climate systems, and curated modern furnishings.',
    buttonText: 'Shop Home & Living',
    link: '#',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'personal-care',
    name: 'Personal Care & Wellness',
    description: 'Deep-tissue percussion wellness therapy, luxury botanical elixirs, and bespoke artisanal perfumery.',
    buttonText: 'Shop Wellness',
    link: '#',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  },
  {
    id: 'gourmet-pantry',
    name: 'Gourmet & Pantry Staples',
    description: 'Single-estate cold extracted olive reserves, Grade A+ mountain Sidr raw honey, and pure harvest staples.',
    buttonText: 'Shop Gourmet',
    link: '#',
    image: 'https://images.unsplash.com/photo-1506617564039-2f3b650b7010?auto=format&fit=crop&w=800&q=80',
    itemCount: 2
  }
];

export const products = [
  {
    id: 1,
    name: 'ApexPro ANC Spatial Wireless Studio Headphones',
    category: 'smart-electronics',
    categoryName: 'Smart Tech & Gadgets',
    sku: 'MTL-APX-301',
    price: '$ 64',
    priceNumeric: 64,
    packSize: 'Hi-Res Spatial Audio Over-Ear Headset with Hard Travel Case',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 2500,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 114,
    priceNote: 'Wholesale Electronics Tier Available',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Immerse in studio acoustics with 45dB hybrid active noise cancellation, custom 40mm beryllium drivers, and 50-hour battery life.',
    longDescription: 'Curated and distributed globally by Mosafir Trading LLC. Built with dual transparency mode, spatial audio head tracking, Bluetooth 5.4 multi-point streaming, and memory-foam ear cushions wrapped in breathable protein leather for unmatched acoustic comfort.',
    features: [
      'Hybrid ANC with 6 dedicated feedforward/feedback mics cancels up to 45dB noise',
      'Beryllium-coated 40mm acoustic drivers deliver crystalline highs and sub-bass depth',
      '50 hours playback on single charge (10-minute USB-C quick charge provides 6 hours)',
      'Bluetooth 5.4 Multipoint seamlessly pairs with laptop, tablet, and smartphone',
      'Built-in AI beamforming ENC microphone ensures studio-grade voice calls'
    ],
    tiers: [
      { range: '1 - 14 Units', price: '$ 64', discount: 'Base Wholesale' },
      { range: '15 - 59 Units', price: '$ 53', discount: '17% Distributor' },
      { range: '60+ Units', price: '$ 43', discount: '33% Bulk Pallet' }
    ],
    specs: [
      { label: 'Bluetooth Protocol', value: 'Bluetooth 5.4 with LDAC & AAC' },
      { label: 'Battery Capacity', value: '900 mAh (Up to 50h Playback)' },
      { label: 'Noise Reduction', value: 'Up to 45dB Hybrid Active ANC' },
      { label: 'Warranty', value: '1 Year Full Replacement Guarantee' }
    ]
  },
  {
    id: 2,
    name: 'ChronoSync Pro Ultra AMOLED Smartwatch',
    category: 'smart-electronics',
    categoryName: 'Smart Tech & Gadgets',
    sku: 'MTL-SWT-302',
    price: '$ 52',
    priceNumeric: 52,
    packSize: 'Titanium Bezel Smartwatch with Dual Magnetic Straps',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 3200,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 92,
    priceNote: 'Direct Factory & Bulk Wholesale Available',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Precision aerospace titanium alloy smartwatch with 1.43-inch Always-On AMOLED display, dual-band GPS, and comprehensive biometric tracking.',
    longDescription: 'Sourced and distributed by Mosafir Trading LLC for retail and corporate partners. Featuring SpO2, continuous 24/7 heart-rate telemetry, sleep stage tracking, 14-day ultra-efficient battery endurance, and 5ATM water resistance suitable for swimming and intense workouts.',
    features: [
      '1.43" HD AMOLED display with 1000 nits peak outdoor brightness',
      'Aerospace-grade titanium alloy casing with scratch-resistant sapphire glass',
      'Dual-frequency GPS with 120+ pre-calibrated sports and athletic modes',
      'Comprehensive biometrics: SpO2, heart rate variability, stress, and sleep monitoring',
      '14-day standard battery life with rapid magnetic fast charging dock'
    ],
    tiers: [
      { range: '1 - 19 Units', price: '$ 52', discount: 'Retail Base' },
      { range: '20 - 79 Units', price: '$ 43', discount: '17% Wholesale' },
      { range: '80+ Units', price: '$ 35', discount: '33% Master Carton' }
    ],
    specs: [
      { label: 'Display', value: '1.43-inch AMOLED (466x466 px)' },
      { label: 'Water Resistance', value: '5 ATM (50m Water Resistant)' },
      { label: 'Battery Life', value: 'Up to 14 Days Normal Usage' },
      { label: 'Connectivity', value: 'Bluetooth 5.3 Low Energy + BLE' }
    ]
  },
  {
    id: 3,
    name: 'Lumina Touch LED Ambient Desk Lamp & Fast Qi Charger',
    category: 'home-living',
    categoryName: 'Home & Modern Living',
    sku: 'MTL-LUM-102',
    price: '$ 36',
    priceNumeric: 36,
    packSize: 'Architectural Aluminum Task Light with 15W Qi Charging Base',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 2900,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 56,
    priceNote: 'Volume Tier Pricing',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Sleek anodized aluminum desk lamp with full-spectrum eye-care illumination, 5 color temperature presets, and integrated fast wireless charging.',
    longDescription: 'Supplied directly by Mosafir Trading LLC for modern corporate suites and home workstations. Designed with smooth touch-slide dimming, memory function, zero blue-light hazard certification, and dual-axis folding hinges for flexible angle adjustments.',
    features: [
      'Full-spectrum LED panel delivers CRI > 95 natural sunlight simulation',
      'Built-in 15W Qi fast wireless charging pad + additional 5V/2A USB-A output port',
      '5 color temperature modes (2700K Warm - 6500K Daylight) with stepless dimming',
      'Aircraft-grade sandblasted aluminum alloy chassis with weighted anti-slip silicone base',
      'Automatic 45-minute auto-off sleep timer and smart brightness memory'
    ],
    tiers: [
      { range: '1 - 24 Units', price: '$ 36', discount: 'Standard Price' },
      { range: '25 - 99 Units', price: '$ 29', discount: '19% Bulk Discount' },
      { range: '100+ Units', price: '$ 23', discount: '36% Master Carton' }
    ],
    specs: [
      { label: 'Chassis Material', value: 'Anodized Aircraft Aluminum' },
      { label: 'Wireless Charging', value: '15W Qi Fast Standard' },
      { label: 'Color Temperature', value: '2700K - 6500K Adjustable' },
      { label: 'LED Lifespan', value: '50,000+ Hours Rated' }
    ]
  },
  {
    id: 4,
    name: 'AeroMist Ceramic Ultrasonic Essential Oil Aroma Diffuser',
    category: 'home-living',
    categoryName: 'Home & Modern Living',
    sku: 'MTL-ARM-103',
    price: '$ 29',
    priceNumeric: 29,
    packSize: 'Hand-Crafted Matte Ceramic Diffuser with Ambient Warm Halo',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 3800,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 84,
    priceNote: 'Commercial Hospitality & Retail Wholesale',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Handcrafted artisan ceramic ultrasonic diffuser designed for luxury residences, boutique hotels, and serene executive suites.',
    longDescription: 'Distributed by Mosafir Trading LLC, this whisper-silent ultrasonic diffuser delivers 2.4MHz micro-vaporization that gently disperses natural essential oils without burning or altering botanical compounds. Features dual mist cycles, warm ambient lighting, and auto shut-off.',
    features: [
      'Handcrafted natural porcelain ceramic shell with soft matte tactile finish',
      '2.4MHz high-frequency ultrasonic plate creates ultra-fine cool micro-mist',
      'Independent ambient warm candlelight LED glow creates relaxing atmosphere',
      'Continuous 6-hour mode or 12-hour intermittent misting cycles',
      'BPA-free internal water reservoir with smart waterless auto shut-off protection'
    ],
    tiers: [
      { range: '1 - 29 Units', price: '$ 29', discount: 'Single Unit Price' },
      { range: '30 - 99 Units', price: '$ 23', discount: '21% Bulk Salon' },
      { range: '100+ Units', price: '$ 18', discount: '38% Wholesale Carton' }
    ],
    specs: [
      { label: 'Capacity', value: '180 ml Reservoir' },
      { label: 'Shell Material', value: 'Matte Glazed Porcelain Ceramic' },
      { label: 'Noise Level', value: '< 20 dB Whisper Silent' },
      { label: 'Coverage', value: 'Up to 350 sq. ft.' }
    ]
  },
  {
    id: 5,
    name: 'RevitaPro Deep Tissue Percussion Therapy Massage Gun',
    category: 'personal-care',
    categoryName: 'Personal Care & Wellness',
    sku: 'MTL-REV-203',
    price: '$ 45',
    priceNumeric: 45,
    packSize: 'Therapeutic Percussion Device with 6 Interchangeable Heads',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 2700,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 98,
    priceNote: 'Physiotherapy & Fitness Wholesale Pack',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'High-torque brushless percussion massager delivering 12mm deep-muscle penetration with 30 adjustable speed stages and quiet glide engineering.',
    longDescription: 'Procured for wellness clinics, athletic centers, and retailers by Mosafir Trading LLC. Engineered with a brushless high-stall motor capable of delivering up to 3200 RPM, paired with a 2600mAh lithium battery providing up to 6 hours of continuous therapeutic relief per charge.',
    features: [
      'High-torque brushless motor delivers up to 45 lbs of stall force with quiet glide tech',
      '12mm deep muscle amplitude reaches deep tissue to relieve soreness and stiffness',
      '30 adjustable speed settings ranging from 1200 to 3200 RPM',
      'Includes 6 specialized quick-swap massage heads for all muscle groups',
      'Ergonomic silicone grip handle with high-definition digital touch control panel'
    ],
    tiers: [
      { range: '1 - 19 Units', price: '$ 45', discount: 'Base Wholesale' },
      { range: '20 - 79 Units', price: '$ 37', discount: '18% Volume' },
      { range: '80+ Units', price: '$ 29', discount: '35% Bulk Pallet' }
    ],
    specs: [
      { label: 'Motor Type', value: 'Brushless High-Torque (45W)' },
      { label: 'Battery Capacity', value: '2600 mAh Rechargeable Lithium' },
      { label: 'Amplitude', value: '12mm Deep Percussion' },
      { label: 'Operating Noise', value: '38 - 45 dB Quiet Glide' }
    ]
  },
  {
    id: 6,
    name: 'Velvet Amber & Royal Oud Artisan Eau de Parfum',
    category: 'personal-care',
    categoryName: 'Personal Care & Wellness',
    sku: 'MTL-PRF-201',
    price: '$ 42',
    priceNumeric: 42,
    packSize: '100ml Heavy Crystal Flacon with Magnetic Metallic Atomizer',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 3800,
    minOrder: '1 Unit',
    rating: 5.0,
    reviewCount: 95,
    priceNote: 'Boutique & Perfumery Wholesale Available',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'Exquisite oriental fragrance opening with Sicilian bergamot and saffron, blending into aged Cambodian agarwood and smoky ambergris.',
    longDescription: 'Handcrafted and batch-matured under the highest artisanal fragrance standards for Mosafir Trading LLC. A long-lasting 25% Extrait concentration designed for high-end boutique perfumeries and discerning retailers worldwide, presented in a luxury matte black gift box.',
    features: [
      '25% Extrait de Parfum concentration delivering 14+ hours of lasting sillage',
      'Masterfully blended with natural aged Cambodian oud, amber resin, and wild roses',
      'Custom magnetic atomizer cap with ultra-fine micro-mist nozzle dispersion',
      'Free from synthetic parabens, phthalates, and animal testing',
      'Luxury gift-ready packaging with individual authenticity batch certificate'
    ],
    tiers: [
      { range: '1 - 29 Units', price: '$ 42', discount: 'Base Price' },
      { range: '30 - 119 Units', price: '$ 34', discount: '19% Salon Tier' },
      { range: '120+ Units', price: '$ 27', discount: '36% Wholesale MOQ' }
    ],
    specs: [
      { label: 'Volume', value: '100ml / 3.4 fl. oz.' },
      { label: 'Fragrance Family', value: 'Warm Oriental Woody & Amber' },
      { label: 'Concentration', value: 'Extrait de Parfum (25%)' },
      { label: 'Shelf Life', value: '36 Months' }
    ]
  },
  {
    id: 7,
    name: 'Royal Sidr Mountain Raw Honey Reserve (Grade A+)',
    category: 'gourmet-pantry',
    categoryName: 'Gourmet & Pantry Staples',
    sku: 'MTL-HNY-401',
    price: '$ 26',
    priceNumeric: 26,
    packSize: '500g Hexagonal Glass Hex-Jar with Hand-Carved Honey Dipper',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 5800,
    minOrder: '1 Master Unit',
    rating: 5.0,
    reviewCount: 138,
    priceNote: 'Export Grade Certified 100% Raw & Halal',
    image: honeyImg,
    link: '#',
    description: 'Unpasteurized, pure monofloral Sidr honey harvested from pristine wild mountain valleys with rich antibacterial properties.',
    longDescription: 'Directly imported from verified highland beekeepers by Mosafir Trading LLC. Lab-certified purity, high enzymatic activity, and a distinct butterscotch-amber flavor profile favored by gourmet grocers and luxury hospitality suites.',
    features: [
      '100% pure raw unheated mountain Sidr honey with zero additive sugars',
      'Abundant in natural enzymes, antioxidants, and immune-supporting bio-nutrients',
      'Heavy hexagonal glass jar with gold-embossed tamper-evident security seal',
      'Includes complimentary handcrafted natural olivewood honey dipper',
      'Certified 100% Halal, Non-GMO, and batch tested for purity'
    ],
    tiers: [
      { range: '1 - 39 Units', price: '$ 26', discount: 'Standard Price' },
      { range: '40 - 149 Units', price: '$ 21', discount: '19% Retail Pack' },
      { range: '150+ Units', price: '$ 16.50', discount: '37% Export Tier' }
    ],
    specs: [
      { label: 'Net Weight', value: '500g / 17.6 oz' },
      { label: 'Floral Source', value: 'Wild Sidr Tree (Ziziphus spina-christi)' },
      { label: 'Processing', value: 'Cold-Extracted, Unfiltered Raw' },
      { label: 'Shelf Life', value: 'Indefinite (Best within 36 Months)' }
    ]
  },
  {
    id: 8,
    name: 'Artisan Single-Estate Extra Virgin Olive Oil (Cold-Extracted)',
    category: 'gourmet-pantry',
    categoryName: 'Gourmet & Pantry Staples',
    sku: 'MTL-EVO-402',
    price: '$ 22',
    priceNumeric: 22,
    packSize: '750ml Dark UV-Protected Marasca Glass with Precision Pourer',
    availability: 'In Stock (Ready to Ship)',
    stockUnits: 4600,
    minOrder: '1 Unit',
    rating: 4.9,
    reviewCount: 96,
    priceNote: 'Restaurant & Wholesale Bulk Rates',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=800&q=80',
    link: '#',
    description: 'First cold-pressed single estate extra virgin olive oil with low acidity (<0.2%), grassy fruity notes, and a peppery polyphenol finish.',
    longDescription: 'Brought directly to commercial dining establishments and premium grocers by Mosafir Trading LLC. Harvested by hand within 24 hours of pressing, retaining maximum polyphenol vitality and natural vitamin E, ideal for dressings, dipping, and culinary finishing.',
    features: [
      'First cold mechanical extraction under 24°C preserves delicate polyphenols',
      'Certified ultra-low acidity (<0.2%) ranking in the top international EVOO grade',
      'Dark UV-coated Marasca glass bottle with integrated anti-drip pourer spout',
      'High polyphenol count (>450 mg/kg) providing proven cellular wellness benefits',
      'Traceable single-estate harvest with complete laboratory analysis certificates'
    ],
    tiers: [
      { range: '1 - 24 Units', price: '$ 22', discount: 'Single Bottle' },
      { range: '25 - 99 Units', price: '$ 17.50', discount: '20% Wholesale Case' },
      { range: '100+ Units', price: '$ 14.00', discount: '36% Commercial Pallet' }
    ],
    specs: [
      { label: 'Net Volume', value: '750ml / 25.4 fl. oz.' },
      { label: 'Acidity', value: '< 0.2% at harvest' },
      { label: 'Extraction Method', value: 'Mechanical First Cold Press' },
      { label: 'Harvest Profile', value: 'Single-Estate Early Harvest' }
    ]
  }
];
