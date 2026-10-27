export interface ServiceItem {
  slug: string;
  title: string;
  shortDesc: string;
  image: string;
  heroTagline: string;
  benefits: string[];
  whatWeHandle: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  pricingRange: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  type: string;
  location: string;
  challenge: string;
  solution: string;
  servicesPerformed: string[];
  result: string;
  completionTime: string;
  image: string;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  category: 'Electrical Safety' | 'Home Electrical' | 'Commercial' | 'Maintenance' | 'Energy' | 'Emergency';
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  image: string;
  author: string;
  keyTakeaways: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export const SERVICES_DATA: Record<string, ServiceItem> = {
  residential: {
    slug: 'residential',
    title: 'Residential Electrical Services',
    shortDesc: 'Certified electrical upgrades, safety diagnostics, and modern installations for homes.',
    image: '/src/assets/images/service_residential_electrician_1793102579258.jpg',
    heroTagline: 'Safe, code-compliant, and energy-efficient electrical solutions for your family.',
    benefits: [
      'Comprehensive 100% NEC electrical code compliance',
      'Child-safe tamper-resistant outlets and arc-fault breaker protection',
      'Whole-house surge suppression shielding expensive appliances',
      'Clean work guarantee: shoe covers and spotless cleanup',
    ],
    whatWeHandle: [
      'Breaker panel replacements & 200A service upgrades',
      'Dedicated appliance circuits (HVAC, EV chargers, ovens)',
      'Smart home automation and lighting control switches',
      'Whole-home rewiring and knob-and-tube removal',
      'Ground fault circuit interrupter (GFCI) bathroom/kitchen installations',
    ],
    process: [
      { step: '01', title: 'In-Home Safety Audit', desc: 'Detailed voltage drop and panel load inspection.' },
      { step: '02', title: 'Firm Upfront Pricing', desc: 'Written transparent estimate with zero hidden extras.' },
      { step: '03', title: 'Precision Installation', desc: 'Work executed by certified journeymen electricians.' },
      { step: '04', title: 'Testing & Code Sign-off', desc: 'Rigorous circuit testing and warranty certificate provided.' },
    ],
    faqs: [
      {
        q: 'How do I know if my electrical panel needs an upgrade?',
        a: 'Frequent breaker trips, flickering lights when running major appliances, or a 100-amp panel in a home using modern heating/cooling are common signs.'
      },
      {
        q: 'Do your residential electricians pull all required city permits?',
        a: 'Yes, Cospert manages permit filing and municipal electrical inspection coordination from start to finish.'
      }
    ],
    pricingRange: '$180 - $2,400 depending on project scale',
    metaTitle: 'Residential Electrical Services | Cospert NYC',
    metaDescription: 'Expert residential electrical services by Cospert. Breaker panel upgrades, whole-home rewiring, EV charger installation, and emergency repairs in NY.',
    keywords: ['residential electrician', 'home electrical repair', 'panel upgrade nyc', 'ev charger installation', 'licensed electrician'],
  },
  commercial: {
    slug: 'commercial',
    title: 'Commercial Electrical Solutions',
    shortDesc: 'High-capacity power distribution, emergency lighting, and preventative maintenance for businesses.',
    image: '/src/assets/images/service_commercial_electrician_1793102578704.jpg',
    heroTagline: 'Reliable industrial power systems minimizing downtime for corporate and retail facilities.',
    benefits: [
      'Zero unplanned downtime protocol with scheduled off-peak maintenance',
      'Heavy commercial 480V 3-phase power balancing and transformer service',
      'OSHA-compliant safety practices and commercial liability coverage',
      'Energy-audit certified lighting retrofit programs reducing utility costs',
    ],
    whatWeHandle: [
      'Main distribution panel upgrades & switchgear service',
      'Commercial tenant fit-outs and build-out power wiring',
      'Emergency egress and battery-backup exit lighting systems',
      'Server room dedicated circuits and uninterruptible power supplies (UPS)',
      'Commercial EV charging station infrastructure',
    ],
    process: [
      { step: '01', title: 'Facility Electrical Survey', desc: 'Peak load analysis and switchboard condition assessment.' },
      { step: '02', title: 'Engineering & Permitting', desc: 'Detailed single-line schematics and municipal filings.' },
      { step: '03', title: 'Off-Peak Execution', desc: 'Night and weekend scheduling to avoid business interruption.' },
      { step: '04', title: 'Commissioning & Documentation', desc: 'Full thermal imaging report and maintenance schedules.' },
    ],
    faqs: [
      {
        q: 'Can electrical maintenance be scheduled outside our operating business hours?',
        a: 'Yes, our commercial crews routinely work early mornings, nights, and weekends to eliminate disruptions to your staff and customers.'
      },
      {
        q: 'Do you offer recurring commercial maintenance contracts?',
        a: 'We provide quarterly and annual preventative inspection agreements that include thermal imaging and priority emergency response.'
      }
    ],
    pricingRange: 'Custom commercial bids tailored to facility capacity',
    metaTitle: 'Commercial Electrical Solutions | Cospert NYC',
    metaDescription: 'High-capacity commercial electrical contractor services. Switchgear maintenance, tenant fit-outs, emergency lighting, and off-peak scheduling by Cospert.',
    keywords: ['commercial electrical contractor', '3-phase power', 'commercial build out', 'switchgear maintenance nyc', 'emergency lighting'],
  },
  'electrical-repair': {
    slug: 'electrical-repair',
    title: 'Rapid Electrical Repair',
    shortDesc: 'Troubleshooting sparking outlets, tripped breakers, dead circuits, and power outages.',
    image: '/src/assets/images/emergency_service_electrician_1793102578263.jpg',
    heroTagline: 'Accurate diagnostics fixing root electrical issues rather than quick surface patches.',
    benefits: [
      'Advanced digital diagnostic analyzers pin-pointing hidden wire shorts',
      'Fully stocked mobile service vans with over 800 standard components',
      'Flat-rate diagnostic pricing with no open-ended hourly surprises',
      'Immediate hazard stabilization protecting against electrical fire risk',
    ],
    whatWeHandle: [
      'Flickering and buzzing light fixtures or dimmers',
      'Outlets that have lost power or feel warm to the touch',
      'Circuit breakers that continually trip or will not reset',
      'Burnt electrical smells or scorched switch plates',
      'Neutral wire floating and voltage imbalance issues',
    ],
    process: [
      { step: '01', title: 'Diagnostic Isolation', desc: 'Testing circuit continuity, line voltage, and resistance.' },
      { step: '02', title: 'Transparent Explanation', desc: 'Clear review of why the component failed and repair options.' },
      { step: '03', title: 'Code-Grade Repair', desc: 'Installing UL-listed parts with secure mechanical connections.' },
      { step: '04', title: 'Full Circuit Verification', desc: 'Load testing with amperage verification before departure.' },
    ],
    faqs: [
      {
        q: 'Why does my circuit breaker keep tripping repeatedly?',
        a: 'Breakers trip due to circuit overload, a short circuit (hot wire touching neutral), or a ground fault. Repeated tripping indicates an urgent condition that should be inspected immediately.'
      },
      {
        q: 'Is it dangerous if an outlet makes a buzzing sound?',
        a: 'Yes. Buzzing or crackling usually indicates loose wiring or arcing inside the junction box, which is a major fire hazard.'
      }
    ],
    pricingRange: '$120 - $450 common repair range',
    metaTitle: 'Rapid Electrical Repair & Diagnostics | Cospert',
    metaDescription: 'Fast, reliable electrical diagnostics and wire repairs. Fixing tripped breakers, buzzing outlets, shorts, and sudden power failures across New York.',
    keywords: ['electrical troubleshooting', 'emergency wire repair', 'circuit breaker tripping', 'outlet repair nyc', '24/7 electrician'],
  },
  wiring: {
    slug: 'wiring',
    title: 'Wiring & Rewiring Services',
    shortDesc: 'Modern copper wiring, panel-to-outlet rewiring, and aluminum wire remediation.',
    image: '/src/assets/images/service_residential_electrician_1793102579258.jpg',
    heroTagline: 'Safe, grounded, and durable electrical wiring built to support modern electrical loads.',
    benefits: [
      'Safely replaces dangerous cloth-insulated and vintage wiring',
      'Minimal drywall intrusion techniques keeping repair costs low',
      'True copper conductors providing optimal current carry capacity',
      'Complete home electrical permit and insurance sign-off',
    ],
    whatWeHandle: [
      'Whole-house copper rewiring projects',
      'Dedicated circuits for high-draw appliances (dryers, hot tubs)',
      'Knob-and-tube wire remediation and insulation clearing',
      'Sub-panel installations for additions and detached garages',
      'Low-voltage structured cabling (Cat6, audio/visual, coax)',
    ],
    process: [
      { step: '01', title: 'Wiring Path Inspection', desc: 'Mapping existing conduit, joist access, and panel loads.' },
      { step: '02', title: 'Non-Destructive Routing', desc: 'Using specialized flex bits to minimize sheetrock repair.' },
      { step: '03', title: 'Grounded Connections', desc: 'Solid copper terminations inside code-compliant metal boxes.' },
      { step: '04', title: 'Megohmmeter Insulation Test', desc: 'Certifying zero wire leakage across all newly pulled runs.' },
    ],
    faqs: [
      {
        q: 'Do I need to leave my home while rewiring takes place?',
        a: 'In most residential rewiring jobs, our team works circuit-by-circuit so you have essential power and lighting throughout the process.'
      }
    ],
    pricingRange: '$450 - $4,800 depending on home layout',
    metaTitle: 'Home Wiring & Rewiring Services | Cospert NYC',
    metaDescription: 'Code-compliant home copper rewiring and aluminum wire remediation. Safe, durable electrical installations backed by Cospert\'s 1-year warranty.',
    keywords: ['home rewiring services', 'replace knob and tube', 'copper wiring installation', 'aluminum wire fix nyc', 'licensed wire specialist'],
  },
  lighting: {
    slug: 'lighting',
    title: 'Architectural & Modern Lighting',
    shortDesc: 'Recessed LED fixtures, chandeliers, landscape illumination, and smart dimming systems.',
    image: '/src/assets/images/service_lighting_installation_1793102578736.jpg',
    heroTagline: 'Elevating interiors and exteriors with energy-efficient, designer illumination.',
    benefits: [
      'Energy-star rated LED technology saving up to 80% on lighting electricity',
      'Seamless smart lighting automation (Lutron, Caseta, voice control)',
      'Glare-free optical diffusion with customizable color temperatures (2700K - 5000K)',
      'Outdoor weatherproof IP65 architectural landscape and security lighting',
    ],
    whatWeHandle: [
      'Ultra-thin wafer recessed LED retrofit & new construction lighting',
      'High-ceiling chandeliers and heavy pendant fixture mounting',
      'Under-cabinet kitchen task lighting and indirect cove LED strips',
      'Motion-activated security floodlights and dark-sky compliant exterior lights',
      'Multi-zone digital dimming and scene control switches',
    ],
    process: [
      { step: '01', title: 'Photometric Layout Plan', desc: 'Determining beam spread, spacing, and lumen requirements.' },
      { step: '02', title: 'Precision Cutouts', desc: 'Laser-aligned fixture placement with clean circular cuts.' },
      { step: '03', title: 'Driver & Control Wiring', desc: 'Flicker-free electronic low-voltage (ELV) driver integration.' },
      { step: '04', title: 'Color & Dimming Tuning', desc: 'Fine-tuning lighting scenes and smart control setup.' },
    ],
    faqs: [
      {
        q: 'Can you install recessed lighting in rooms with no attic above?',
        a: 'Yes, we specialize in slim canless LED wafer fixtures that require only 2 inches of ceiling clearance without needing attic access.'
      }
    ],
    pricingRange: '$90 - $350 per fixture installed',
    metaTitle: 'Architectural & LED Lighting Installation | Cospert',
    metaDescription: 'Custom recessed LED lighting, chandeliers, landscape fixtures, and smart dimming controls designed and installed by Cospert master electricians.',
    keywords: ['recessed lighting installation', 'modern led lighting', 'architectural lighting electrician', 'chandelier mounting nyc', 'smart dimmers'],
  },
  inspection: {
    slug: 'inspection',
    title: 'Electrical Safety Inspection',
    shortDesc: 'Certified home buyer inspections, insurance audits, and infrared thermal imaging.',
    image: '/src/assets/images/service_electrical_inspection_1793102580613.jpg',
    heroTagline: 'Uncovering hidden electrical fire hazards before they cause expensive damage.',
    benefits: [
      'FLIR thermal infrared camera analysis detecting overheated connections',
      'Formal multi-page digital inspection report delivered within 24 hours',
      'Verifies grounding rods, water pipe bonding, and surge protection',
      'Accepted by all major residential home insurance underwriters',
    ],
    whatWeHandle: [
      'Real estate pre-purchase and pre-sale electrical inspections',
      'Post-storm and lightning strike damage evaluations',
      'Insurance renewal electrical safety certifications',
      'Arc-fault, ground-fault, and breaker trip testing',
      'Service entrance cable and weatherhead condition reviews',
    ],
    process: [
      { step: '01', title: 'Main Service & Meter Check', desc: 'Evaluating utility drop, grounding electrodes, and meter base.' },
      { step: '02', title: 'Panel Thermal Scan', desc: 'Capturing infrared heat signatures on every single breaker.' },
      { step: '03', title: 'Branch Circuit Sampling', desc: 'Testing polarity, grounding, and GFCI response at all outlets.' },
      { step: '04', title: 'Digital Report Delivery', desc: 'Comprehensive report with photos, safety grades, and fixes.' },
    ],
    faqs: [
      {
        q: 'How long does a thorough electrical inspection take?',
        a: 'A standard single-family home inspection takes between 90 minutes to 2 hours depending on panel accessibility.'
      }
    ],
    pricingRange: '$140 - $350 flat rate',
    metaTitle: 'Electrical Safety Inspection & Thermal Scans | Cospert',
    metaDescription: 'Comprehensive home buyer and commercial electrical inspections. FLIR infrared thermal imaging, code compliance audits, and detailed safety reports.',
    keywords: ['electrical safety inspection', 'thermal imaging inspection', 'home buyer electrical audit', 'nyc electrical certificate', 'code compliance'],
  },
};

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'Luxury Brownstone 200A Service Upgrade',
    type: 'Residential Overhaul',
    location: 'Brooklyn Heights, NY',
    challenge: 'A historic 1890s 4-story brownstone had dangerous original wiring and a 60-amp fuse box unable to run modern central air conditioning and appliances.',
    solution: 'Engineered a clean 200-amp service trench from the utility point, installed a dual 40-circuit arc-fault subpanel, and pulled modern copper runs with zero historic molding damage.',
    servicesPerformed: ['200A Service Upgrade', 'Subpanel Installation', 'Whole-Home Copper Rewiring', 'Permit Management'],
    result: 'Safe, code-compliant capacity running dual HVAC systems and an EV charger while preserving the property’s architectural heritage.',
    completionTime: '4 Business Days',
    image: '/src/assets/images/service_residential_electrician_1793102579258.jpg',
  },
  {
    id: 'project-2',
    title: 'Commercial Restaurant 3-Phase Distribution',
    type: 'Commercial Hospitality',
    location: 'Flatiron District, Manhattan, NY',
    challenge: 'A new high-end restaurant required a 400-amp 3-phase power distribution system for commercial induction ranges, walk-in coolers, and emergency egress lighting.',
    solution: 'Designed and installed a commercial switchgear board with balanced harmonic loading, isolated ground circuits for POS registers, and dedicated fire suppression triggers.',
    servicesPerformed: ['400A 3-Phase Switchboard', 'Commercial Kitchen Drops', 'Emergency Egress Battery Systems', 'NEC Code Sign-off'],
    result: 'Passed NYC Department of Buildings electrical inspection on first submission and opened ahead of scheduled launch date.',
    completionTime: '6 Business Days',
    image: '/src/assets/images/service_commercial_electrician_1793102578704.jpg',
  },
  {
    id: 'project-3',
    title: 'Architectural Penthouse Lighting Retrofit',
    type: 'Modern Luxury Lighting',
    location: 'Tribeca, New York, NY',
    challenge: 'Client required gallery-grade 95+ CRI architectural illumination with zero ceiling glare, integrated into a wireless Lutron Caseta smart automation system.',
    solution: 'Installed 48 warm-dimming recessed wafer fixtures, custom under-counter ambient linear strips, and calibrated scene control presets for entertainment and reading.',
    servicesPerformed: ['Architectural LED Lighting', 'Smart Scene Automation', 'Concealed Transformer Hubs', 'Low-Voltage Control'],
    result: 'Reduced lighting electrical draw by 72% while delivering museum-quality light quality with effortless smartphone control.',
    completionTime: '3 Business Days',
    image: '/src/assets/images/service_lighting_installation_1793102578736.jpg',
  },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'blog-1',
    slug: '7-signs-your-home-needs-electrical-repair',
    title: '7 Signs Your Home Needs Electrical Repair',
    category: 'Home Electrical',
    excerpt: 'Flickering lights and warm outlets are more than minor annoyances—they are urgent warning signs of potential electrical fire hazards.',
    date: 'October 24, 2026',
    readTime: '5 min read',
    image: '/src/assets/images/service_residential_electrician_1793102579258.jpg',
    author: 'Mark Daniels, Master Electrician',
    keyTakeaways: [
      'Frequent circuit breaker trips mean a circuit is overloaded or arcing',
      'Warm or discolored outlet faceplates indicate dangerous resistance',
      'Burning odors or fishy smells near panels require immediate shutdown',
      'Ungrounded two-prong outlets lack surge protection for modern electronics',
    ],
    content: [
      'Many homeowners take electricity for granted until something stops working. However, electrical systems rarely fail without warning. Recognizing early warning signals can save thousands in emergency damages and keep your family safe.',
      '1. Breakers That Trip Constantly: Circuit breakers are designed to cut power before wires overheat. If a specific appliance always trips a breaker, the circuit is either overloaded or suffering from a ground fault.',
      '2. Buzzing, Humming, or Crackling Sounds: Healthy electrical currents flow in absolute silence. Any audible vibration or sparking sound indicates loose wire terminations that can ignite nearby timber.',
      '3. Flickering or Dimming Lights: When turning on a vacuum or microwave causes ceiling lights to dim, your main panel is struggling to manage the voltage demand.',
      '4. Discolored or Warm Switch Plates: If an outlet feels warm to the touch or displays brown scorching, shut off the breaker immediately and contact a certified electrician.',
    ],
    metaTitle: '7 Signs Your Home Needs Electrical Repair | Cospert',
    metaDescription: 'Learn the critical warning signs of electrical failure in your home, from frequent breaker trips to buzzing outlets and warm switch plates.',
    keywords: ['electrical repair signs', 'tripping breaker', 'buzzing outlet', 'home electrical safety', 'electrician advice'],
  },
  {
    id: 'blog-2',
    slug: 'essential-electrical-safety-tips-for-every-home',
    title: 'Essential Electrical Safety Tips for Every Home',
    category: 'Electrical Safety',
    excerpt: 'Simple proactive habits and inspection routines that protect your family and valuable household electronics.',
    date: 'October 18, 2026',
    readTime: '4 min read',
    image: '/src/assets/images/service_electrical_inspection_1793102580613.jpg',
    author: 'Sarah Chen, Safety Compliance Lead',
    keyTakeaways: [
      'Test GFCI outlets monthly using the onboard test and reset button',
      'Avoid running extension cords permanently under carpets or doors',
      'Ensure 3 feet of clear workspace around your main breaker panel',
      'Install surge protection at the panel to shield computer and appliance microchips',
    ],
    content: [
      'Electrical safety in residential homes is largely about preventative vigilance. Modern homes contain dozens of smart devices and heating loads that strain older electrical infrastructures.',
      'First, test all Ground Fault Circuit Interrupters (GFCIs) in bathrooms, kitchens, and outdoor zones every month. Pressing the "Test" button should immediately cut power with an audible click.',
      'Second, never rely on cheap multi-plug power strips as permanent wiring solutions. Daisy-chaining strips is one of the leading causes of residential electrical fires in multi-family buildings.',
      'Finally, maintain a clear 36-inch perimeter around your main breaker panel. In an emergency, first responders must be able to reach your main shutoff instantly.',
    ],
    metaTitle: 'Essential Electrical Safety Tips for Every Home | Cospert',
    metaDescription: 'Proactive electrical safety habits, monthly GFCI testing rules, and panel workspace guidelines from Cospert licensed master electricians.',
    keywords: ['electrical safety tips', 'test gfci outlet', 'breaker panel safety', 'home fire prevention', 'cospert electrical'],
  },
  {
    id: 'blog-3',
    slug: 'when-should-you-rewire-your-house',
    title: 'When Should You Rewire Your House?',
    category: 'Maintenance',
    excerpt: 'Understand the expected lifespan of residential wiring and when an electrical upgrade is mandatory for insurance and safety.',
    date: 'October 12, 2026',
    readTime: '6 min read',
    image: '/src/assets/images/service_residential_electrician_1793102579258.jpg',
    author: 'Mark Daniels, Master Electrician',
    keyTakeaways: [
      'Homes built prior to 1970 often contain obsolete cloth or aluminum wiring',
      'Ungrounded systems cannot safely handle modern electric vehicles or heat pumps',
      'Rewiring increases home valuation and satisfies strict insurance prerequisites',
    ],
    content: [
      'Electrical wiring inside walls is typically out of sight, but insulation degrades over decades of thermal expansion. Homes older than 45 years often require a structured rewiring evaluation.',
      'If your home still features knob-and-tube wiring or cloth-sheathed conductors, the insulation becomes brittle and crumbles when touched. This creates bare wire exposure inside combustible wall cavities.',
      'A full home rewire replaces old cable with modern Romex NM-B copper conductors, introduces dedicated neutral lines, and provides clean equipment grounds to every outlet in the building.',
    ],
    metaTitle: 'When Should You Rewire Your House? Lifespan & Signs | Cospert',
    metaDescription: 'Discover the lifespan of home wiring, the dangers of cloth or knob-and-tube cables, and when a full house rewire is necessary for safety.',
    keywords: ['when to rewire house', 'knob and tube wiring', 'copper rewiring lifespan', 'electrical upgrade nyc'],
  },
  {
    id: 'blog-4',
    slug: 'common-circuit-breaker-problems',
    title: 'Common Circuit Breaker Problems',
    category: 'Emergency',
    excerpt: 'What to do when a breaker won’t reset, makes a humming sound, or shuts down your entire home office.',
    date: 'October 05, 2026',
    readTime: '4 min read',
    image: '/src/assets/images/emergency_service_electrician_1793102578263.jpg',
    author: 'Elena Gomez, Emergency Dispatch Tech',
    keyTakeaways: [
      'Always switch a tripped breaker firmly to "OFF" before pushing to "ON"',
      'A breaker that trips immediately upon resetting indicates a direct dead short',
      'Breakers suffer mechanical wear and typically require replacement after 25 years',
    ],
    content: [
      'Circuit breakers are mechanical safety switches designed to absorb intense thermal and magnetic stress. When they wear down, internal springs lose calibration, causing nuisance trips.',
      'If your breaker trips, unplug recent appliances before resetting it. To reset, push the handle firmly all the way into the "OFF" position until you hear a sharp mechanical snap, then push it back to "ON".',
      'If the breaker snaps back into the middle position instantly, do not force it. A direct short circuit exists along the line that requires professional diagnostic equipment to trace.',
    ],
    metaTitle: 'Common Circuit Breaker Problems & Troubleshooting | Cospert',
    metaDescription: 'Why circuit breakers trip repeatedly, how to reset them safely, and when immediate professional electrical diagnostic is needed.',
    keywords: ['circuit breaker problems', 'breaker wont reset', 'breaker tripping causes', 'electrical troubleshooting'],
  },
  {
    id: 'blog-5',
    slug: 'how-to-prevent-electrical-hazards',
    title: 'How to Prevent Electrical Hazards',
    category: 'Electrical Safety',
    excerpt: 'Commercial and residential protocols to guard against arc flashes, water ingress, and loose terminations.',
    date: 'September 28, 2026',
    readTime: '5 min read',
    image: '/src/assets/images/service_electrical_inspection_1793102580613.jpg',
    author: 'Sarah Chen, Safety Compliance Lead',
    keyTakeaways: [
      'Arc-Fault Circuit Interrupters (AFCIs) prevent 50% of home electrical fires',
      'Water ingress through meter weatherheads must be sealed with duct seal',
      'Outdoor receptacles must feature in-use weatherproof "bubble" covers',
    ],
    content: [
      'Preventing electrical hazards starts with modern safety equipment. Arc-fault circuit interrupters monitor electrical waveforms thousands of times per second to detect sparking before flame develops.',
      'For outdoor outlets, standard flat covers are insufficient during rain. The National Electrical Code requires "extra-duty while-in-use" covers that protect the plug even when a cord is plugged in.',
    ],
    metaTitle: 'How to Prevent Electrical Hazards at Home & Work | Cospert',
    metaDescription: 'Proven electrical hazard prevention protocols: Arc-Fault Interrupters (AFCIs), weatherproof outlet covers, and grounding inspections.',
    keywords: ['prevent electrical hazards', 'afci breaker safety', 'weatherproof outlet cover', 'electrical safety audit'],
  },
  {
    id: 'blog-6',
    slug: 'choosing-the-right-electrician-for-your-property',
    title: 'Choosing the Right Electrician for Your Property',
    category: 'Commercial',
    excerpt: 'Key credentials, liability insurance thresholds, and verification questions to ask before hiring an electrical contractor.',
    date: 'September 20, 2026',
    readTime: '4 min read',
    image: '/src/assets/images/service_commercial_electrician_1793102578704.jpg',
    author: 'Mark Daniels, Master Electrician',
    keyTakeaways: [
      'Verify active master electrician state license and $2M+ general liability',
      'Demand written itemized bids with equipment brand specifications',
      'Ensure the contractor provides transparent labor warranties on all work',
    ],
    content: [
      'Hiring an unlicensed handyman for electrical work can void your homeowner’s insurance and introduce severe life-safety risks. Always request the contractor’s license number and proof of commercial liability insurance.',
      'At Cospert, every technician carries active licensing credentials, OSHA-30 certification, and our company backs all craftsmanship with a firm 100% satisfaction warranty.',
    ],
    metaTitle: 'Choosing the Right Electrician: Licensing Guide | Cospert',
    metaDescription: 'How to hire a certified electrician. Master licenses, liability insurance criteria, and key questions to ask before electrical work begins.',
    keywords: ['choose right electrician', 'licensed electrician checklist', 'master electrician credentials', 'electrical contractor nyc'],
  },
];

export const FAQS_LIST = [
  {
    q: 'Do you offer emergency electrical services?',
    a: 'Yes! Cospert operates a 24/7 dedicated rapid emergency dispatch fleet equipped with testing instruments and replacement breakers. We prioritize active hazards, smoking panels, and sudden power failures anytime, day or night.'
  },
  {
    q: 'How quickly can an electrician arrive?',
    a: 'For urgent emergency situations, our certified mobile technicians average an arrival window of 25 to 45 minutes across the metropolitan service area. Standard non-emergency visits can be scheduled for same-day or next-day arrival.'
  },
  {
    q: 'Do you provide residential and commercial services?',
    a: 'We provide comprehensive residential and commercial electrical services. Our master electricians handle everything from apartment panel upgrades and residential rewiring to commercial 3-phase switchgear, office build-outs, and restaurant power distribution.'
  },
  {
    q: 'Can I request a quote before booking?',
    a: 'Absolutely. We practice 100% transparent, upfront pricing with zero hidden fees. You can use our online quote tool or request an on-site safety assessment where our technician outlines all costs in writing before touching a tool.'
  },
  {
    q: 'Are your electricians certified?',
    a: 'Every Cospert technician is a fully licensed, bonded, and insured journeyman or master electrician. Our team undergoes regular OSHA safety audits, background screenings, and mandatory National Electrical Code (NEC) continuing education.'
  },
  {
    q: 'Do you provide electrical inspections?',
    a: 'Yes. We perform thorough pre-purchase home buyer inspections, commercial code audits, and thermal infrared imaging inspections to uncover hidden fire risks and provide official compliance certificates.'
  },
  {
    q: 'Do you handle rewiring and installations?',
    a: 'Yes. We specialize in complete whole-home copper rewiring, knob-and-tube removal, new construction electrical installations, modern EV charger installations, and custom architectural LED lighting fixtures.'
  },
  {
    q: 'What areas do you service?',
    a: 'We serve all 5 boroughs of New York City (Manhattan, Brooklyn, Queens, The Bronx, Staten Island) as well as adjacent suburban areas in Long Island and Westchester County. All locations benefit from our standard upfront pricing.'
  },
];
