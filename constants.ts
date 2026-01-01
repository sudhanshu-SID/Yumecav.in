import { Product, LookbookItem, FAQItem, UGCPost } from './types';

export const NOISE_SVG_DATA_URI = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E`;

/**
 * PRODUCT DATA MANAGEMENT GUIDE
 * ----------------------------
 * To add a new product:
 * 1. Go to the appropriate array (STICKERS or POSTERS).
 * 2. Copy the template below.
 * 3. Update the fields.
 * 4. ImageBefore: Plain version.
 * 5. ImageAfter: Elevated/Modified version.
 * 
 * TEMPLATE:
 * { 
 *   id: 999, 
 *   name: "Product Name", 
 *   description: "Detailed description here.", 
 *   price: "20.00", 
 *   vibeScore: 9.5, 
 *   imageBefore: "URL_TO_PLAIN_IMAGE", 
 *   imageAfter: "URL_TO_COOL_IMAGE", 
 *   tags: ["Tag1", "Tag2"],
 *   category: 'Cyberpunk', // Or 'Anime', 'Minimalist', etc.
 *   type: 'Sticker' // Or 'Poster-Single', 'Poster-Split'
 * }
 */

export const STICKERS: Product[] = [
  { 
    id: 1, 
    name: "Cyber-Deck Overlay", 
    description: "Matte-finish full chassis skin for MacBook Pro. Features Japanese cyberpunk typography.", 
    price: "45.00", 
    vibeScore: 9.8, 
    imageBefore: "simple laptop.png", 
    imageAfter: "stickkers.png", 
    tags: ["Waterproof", "3M Vinyl"],
    category: 'Cyberpunk',
    type: 'Sticker'
  },
  { 
    id: 2, 
    name: "Akira Bike Frame Kit", 
    description: "Reflective decals for urban cycling. High visibility at night, stealth matte black during day.", 
    price: "32.00", 
    vibeScore: 9.5, 
    imageBefore: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2070&auto=format&fit=crop", 
    imageAfter: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1974&auto=format&fit=crop", 
    tags: ["Reflective", "Weather Sealed"],
    category: 'Anime',
    type: 'Sticker'
  },
  { 
    id: 3, 
    name: "Holo-Glitch Sticker Pack", 
    description: "A pack of 10 holographic glitch-art stickers. Perfect for water bottles, hard cases, and helmets.", 
    price: "18.00", 
    vibeScore: 9.9, 
    imageBefore: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop", 
    imageAfter: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=2070&auto=format&fit=crop", 
    tags: ["UV Resistant", "Holographic"],
    category: 'Cyberpunk',
    type: 'Sticker'
  },
  { 
    id: 4, 
    name: "Retro-Future Console Skin", 
    description: "Turn your PS5 or Xbox into a 1980s piece of brutalist hardware. Textured concrete feel.", 
    price: "39.00", 
    vibeScore: 8.9, 
    imageBefore: "https://images.unsplash.com/photo-1593305841991-05c29736ce37?q=80&w=1974&auto=format&fit=crop", 
    imageAfter: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop", 
    tags: ["Textured", "Precision Cut"],
    category: 'Retro',
    type: 'Sticker'
  },
  {
    id: 5,
    name: "Mecha-Unit 01 Decal",
    description: "High-gloss oversized decal for PC towers. Inspired by Evangelion aesthetics.",
    price: "24.00",
    vibeScore: 9.2,
    imageBefore: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=2070&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1612287232817-60286063faf4?q=80&w=2070&auto=format&fit=crop",
    tags: ["Gloss", "Oversized"],
    category: 'Anime',
    type: 'Sticker'
  },
  {
    id: 6,
    name: "Anti-Surveillance Camera Cover",
    description: "Pack of 5 webcam covers with minimalist warning icons.",
    price: "12.00",
    vibeScore: 8.5,
    imageBefore: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=2070&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1563206767-5b1d97299337?q=80&w=2070&auto=format&fit=crop",
    tags: ["Functional", "Privacy"],
    category: 'Minimalist',
    type: 'Sticker'
  }
];

export const POSTERS: Product[] = [
  { 
    id: 101, 
    name: "Tokyo Nightfall Print", 
    description: "A2 Matte poster featuring a long-exposure shot of Shibuya crossing. Deep blacks and neon hits.", 
    price: "25.00", 
    vibeScore: 9.4, 
    imageBefore: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop", 
    imageAfter: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop", 
    tags: ["Matte Finish", "A2 Size"],
    category: 'Cyberpunk',
    type: 'Poster-Single'
  },
  { 
    id: 102, 
    name: "Abstract Glitch Canvas", 
    description: "Gallery wrap canvas print. Digital noise art inspired by CRT monitor decay.", 
    price: "60.00", 
    vibeScore: 9.7, 
    imageBefore: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=2070&auto=format&fit=crop", 
    imageAfter: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop", 
    tags: ["Gallery Wrap", "Archival Ink"],
    category: 'Abstract',
    type: 'Poster-Single'
  },
  { 
    id: 103, 
    name: "Bauhaus Tech Poster", 
    description: "Minimalist geometric shapes meeting circuit board schematics. Clean, sharp, and intellectual.", 
    price: "25.00", 
    vibeScore: 9.1, 
    imageBefore: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop", 
    imageAfter: "https://images.unsplash.com/photo-1558470598-a5dda9640f6b?q=80&w=2071&auto=format&fit=crop", 
    tags: ["Minimalist", "Monochrome"],
    category: 'Minimalist',
    type: 'Poster-Single'
  },
  {
    id: 104,
    name: "Cyber-Samurai Triptych",
    description: "3-Panel split canvas set. A continuous panorama of a futuristic Neo-Tokyo warrior.",
    price: "120.00",
    vibeScore: 9.9,
    imageBefore: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=2070&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1614728853913-1e2203d9d303?q=80&w=2070&auto=format&fit=crop",
    tags: ["Split Canvas", "Triptych"],
    category: 'Anime',
    type: 'Poster-Split'
  },
  {
    id: 105,
    name: "Botany V2.0 Split",
    description: "2-Panel set contrasting organic floral patterns with digital wireframes.",
    price: "85.00",
    vibeScore: 9.3,
    imageBefore: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2027&auto=format&fit=crop",
    imageAfter: "https://images.unsplash.com/photo-1614730341194-75c60740658f?q=80&w=1974&auto=format&fit=crop",
    tags: ["Split Canvas", "Nature-Tech"],
    category: 'Abstract',
    type: 'Poster-Split'
  }
];

export const LOOKBOOKS: LookbookItem[] = [
  {
    id: 1,
    title: "The Cyber-Producer",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    hotspots: [
      { id: 1, top: 45, left: 30, name: "Cyber-Deck Skin", price: "$45", link: "Cyber-Deck Overlay" },
      { id: 2, top: 60, left: 75, name: "Neon Desk Mat", price: "$55", link: "The Producer's Desk Mat" },
      { id: 3, top: 25, left: 85, name: "Glitch Poster", price: "$25", link: "Tokyo Nightfall Print" }
    ]
  },
  {
    id: 2,
    title: "Night City Rider",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=2070&auto=format&fit=crop",
    hotspots: [
      { id: 1, top: 55, left: 45, name: "Akira Frame Kit", price: "$32", link: "Akira Bike Frame Kit" },
      { id: 2, top: 30, left: 60, name: "Reflective Helmet Decal", price: "$15", link: "Helmet Decal Pack" }
    ]
  },
  {
    id: 3,
    title: "Retro Gaming Station",
    image: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=2000&auto=format&fit=crop",
    hotspots: [
      { id: 1, top: 65, left: 50, name: "Retro Console Skin", price: "$39", link: "Retro-Future Console Skin" },
      { id: 2, top: 20, left: 40, name: "Synthwave Wall Art", price: "$30", link: "Synthwave Poster" }
    ]
  }
];

export const FAQS: FAQItem[] = [
  { 
    question: "SYSTEM_CHECK: DURABILITY?", 
    answer: "Affirmative. Materials are 3M Controltac™. Weather-sealed. UV-resistant. Rated for 5+ years of outdoor exposure. Will survive the apocalypse." 
  },
  { 
    question: "QUERY: RESIDUE_ON_REMOVAL?", 
    answer: "Negative. Our adhesive technology allows for clean removal. No sticky residue left on your device. Swap skins as often as you swap identities." 
  },
  { 
    question: "LOGISTICS: SHIPPING_VECTOR?", 
    answer: "Global dispatch initiated within 48 hours. Tracking ID provided via encrypted channel (Email/WhatsApp). Free shipping on orders over $50." 
  }
];

export const UGC_POSTS: UGCPost[] = [
  { id: 1, user: "@cyber_dave", product: "Cyber-Deck Overlay", time: "2h ago", img: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2000&auto=format&fit=crop" },
  { id: 2, user: "@neon_rider", product: "Holo-Glitch Pack", time: "5h ago", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop" },
  { id: 3, user: "@design_minds", product: "Tokyo Nightfall Print", time: "1d ago", img: "https://images.unsplash.com/photo-1550029402-226115b7c579?q=80&w=1965&auto=format&fit=crop" },
  { id: 4, user: "@future_arch", product: "Bauhaus Tech Poster", time: "2d ago", img: "https://images.unsplash.com/photo-1563770095-25f6f328a20d?q=80&w=2000&auto=format&fit=crop" },
  { id: 5, user: "@synth_wave", product: "Retro Console Skin", time: "3d ago", img: "https://images.unsplash.com/photo-1605901309584-818e25960b8f?q=80&w=2000&auto=format&fit=crop" }
];