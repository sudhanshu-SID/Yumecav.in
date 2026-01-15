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
  },
  { id: 4, name: "Retro-Future Skin", description: "Brutalist hardware texture.", price: "39.00", vibeScore: 8.9, imageBefore: "https://images.unsplash.com/photo-1593305841991-05c29736ce37?q=80&w=1974&auto=format&fit=crop", imageAfter: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2070&auto=format&fit=crop", tags: ["Textured"], category: 'Retro', type: 'Sticker' },

  { id: 5, name: "Mecha Unit 01", description: "PC Tower decal set.", price: "24.00", vibeScore: 9.2, imageBefore: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=2070&auto=format&fit=crop", imageAfter: "https://images.unsplash.com/photo-1612287232817-60286063faf4?q=80&w=2070&auto=format&fit=crop", tags: ["Gloss"], category: 'Anime', type: 'Sticker' },

  { id: 6, name: "Cam-Cover Pack", description: "Privacy-first minimalist icons.", price: "12.00", vibeScore: 8.5, imageBefore: "https://images.unsplash.com/photo-1504384308090-c54be3855833?q=80&w=2070&auto=format&fit=crop", imageAfter: "https://images.unsplash.com/photo-1563206767-5b1d97299337?q=80&w=2070&auto=format&fit=crop", tags: ["Privacy"], category: 'Minimalist', type: 'Sticker' },

  { id: 7, name: "Neon Katakana", description: "Fluorescent pink text.", price: "14.00", vibeScore: 9.0, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop", tags: ["Neon"], category: 'Cyberpunk', type: 'Sticker' },

  { id: 8, name: "Bio-Hazard Seal", description: "Industrial warning tape style.", price: "16.00", vibeScore: 8.7, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=2070&auto=format&fit=crop", tags: ["Industrial"], category: 'Minimalist', type: 'Sticker' },

  { id: 9, name: "Kanji Drift", description: "Aerodynamic vinyl for cars.", price: "45.00", vibeScore: 9.6, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1603584173870-7f42955a969e?q=80&w=2069&auto=format&fit=crop", tags: ["Vehicle"], category: 'Anime', type: 'Sticker' },

  { id: 10, name: "Ghost in Shell", description: "Semi-transparent data icons.", price: "22.00", vibeScore: 9.3, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", tags: ["Clear"], category: 'Cyberpunk', type: 'Sticker' },

  { id: 11, name: "Zen Minimalist", description: "Clean geometric shapes.", price: "10.00", vibeScore: 8.2, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=2024&auto=format&fit=crop", tags: ["Matte"], category: 'Minimalist', type: 'Sticker' },

  { id: 12, name: "Void-Eye Sticker", description: "Eerie surveillance art.", price: "15.00", vibeScore: 9.1, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop", tags: ["Dark"], category: 'Abstract', type: 'Sticker' },

  { id: 13, name: "Cyborg Hand", description: "Anatomical tech illustration.", price: "19.00", vibeScore: 9.4, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop", tags: ["Detailed"], category: 'Cyberpunk', type: 'Sticker' },

  { id: 14, name: "Circuit Path", description: "Gold foil wiring paths.", price: "28.00", vibeScore: 9.7, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop", tags: ["Gold Foil"], category: 'Tech', type: 'Sticker' },

  { id: 15, name: "Pixel Heart", description: "8-bit retro gaming icon.", price: "8.00", vibeScore: 8.4, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop", tags: ["Pixel"], category: 'Retro', type: 'Sticker' },

  { id: 16, name: "Oni Mask Red", description: "Traditional demonic protection.", price: "20.00", vibeScore: 9.5, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1590483734724-383b9f4a5ce2?q=80&w=2070&auto=format&fit=crop", tags: ["Traditional"], category: 'Anime', type: 'Sticker' },

  { id: 17, name: "Glitch Skull", description: "Digital decay skull art.", price: "18.00", vibeScore: 9.2, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop", tags: ["Holographic"], category: 'Abstract', type: 'Sticker' },

  { id: 18, name: "Zero One Code", description: "Binary rain texture kit.", price: "35.00", vibeScore: 8.8, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1510511459019-5dee99c43dbf?q=80&w=2070&auto=format&fit=crop", tags: ["Full Skin"], category: 'Tech', type: 'Sticker' },

  { id: 19, name: "Space-X Patch", description: "Minimalist orbital logistics.", price: "12.00", vibeScore: 8.9, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop", tags: ["Matte"], category: 'Minimalist', type: 'Sticker' },

  { id: 20, name: "Synth-Grid", description: "80s neon perspective grid.", price: "14.00", vibeScore: 9.0, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop", tags: ["Neon"], category: 'Retro', type: 'Sticker' },

  { id: 21, name: "Data Corruption", description: "Jagged artifacts decal.", price: "16.00", vibeScore: 8.6, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", tags: ["Textured"], category: 'Abstract', type: 'Sticker' },

  { id: 22, name: "Mecha Wing", description: "Flight-ready wing tip decals.", price: "25.00", vibeScore: 9.3, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1563770095-25f6f328a20d?q=80&w=2000&auto=format&fit=crop", tags: ["Large"], category: 'Anime', type: 'Sticker' },

  { id: 23, name: "Tokyo Map Line", description: "Subway line circuit art.", price: "19.00", vibeScore: 9.4, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1974&auto=format&fit=crop", tags: ["Detailed"], category: 'Cyberpunk', type: 'Sticker' },

  { id: 24, name: "Acid Rain Drop", description: "Bright yellow splash icons.", price: "10.00", vibeScore: 8.5, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop", tags: ["Vibrant"], category: 'Abstract', type: 'Sticker' },

  { id: 25, name: "Neural Link", description: "Bio-metric node connections.", price: "15.00", vibeScore: 9.1, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=2070&auto=format&fit=crop", tags: ["Minimalist"], category: 'Tech', type: 'Sticker' },

  { id: 26, name: "Sunset Horizon", description: "Retro gradient band.", price: "12.00", vibeScore: 8.8, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1614728853913-1e2203d9d303?q=80&w=2070&auto=format&fit=crop", tags: ["Gradient"], category: 'Retro', type: 'Sticker' },

  { id: 27, name: "Dragon Scale", description: "Textured iridescent finish.", price: "30.00", vibeScore: 9.8, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1550029402-226115b7c579?q=80&w=1965&auto=format&fit=crop", tags: ["Textured"], category: 'Anime', type: 'Sticker' },

  { id: 28, name: "Secure Terminal", description: "Encrypted icon set.", price: "14.00", vibeScore: 8.7, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop", tags: ["Matte"], category: 'Minimalist', type: 'Sticker' },

  { id: 29, name: "Phantom Protocol", description: "Stealth dark grey logos.", price: "16.00", vibeScore: 9.2, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=2070&auto=format&fit=crop", tags: ["Stealth"], category: 'Cyberpunk', type: 'Sticker' },

  { id: 30, name: "YUMECAV Core", description: "Official branding holographic.", price: "15.00", vibeScore: 10.0, imageBefore: "", imageAfter: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=2070&auto=format&fit=crop", tags: ["Official"], category: 'Cyberpunk', type: 'Sticker' }

];

export const POSTERS: Product[] = [
  { 
    id: 101, 
    name: "Lewis Hemilton", 
    description: "A2 Matte poster featuring a long-exposure shot of Shibuya crossing. Deep blacks and neon hits.", 
    price: "25.00", 
    vibeScore: 9.4, 
    imageBefore: "cars-1.jpeg", 
    imageAfter: "cars-1.jpeg", 
    tags: ["Matte Finish", "A2 Size"],
    category: 'Cyberpunk',
    type: 'Poster-Single'
  },
  { 
    id: 102, 
    name: "Wick", 
    description: "Gallery wrap canvas print. Digital noise art inspired by CRT monitor decay.", 
    price: "60.00", 
    vibeScore: 9.7, 
    imageBefore: "movies-2.jpeg", 
    imageAfter: "movies-2.jpeg", 
    tags: ["Gallery Wrap", "Archival Ink"],
    category: 'Abstract',
    type: 'Poster-Single'
  },
  { 
    id: 103, 
    name: "Charles", 
    description: "Minimalist geometric shapes meeting circuit board schematics. Clean, sharp, and intellectual.", 
    price: "25.00", 
    vibeScore: 9.1, 
    imageBefore: "movies-1.jpeg", 
    imageAfter: "movies-1.jpeg", 
    tags: ["Minimalist", "Monochrome"],
    category: 'Minimalist',
    type: 'Poster-Single'
  },
  {
    id: 104,
    name: "Men are brave",
    description: "3-Panel split canvas set. A continuous panorama of a futuristic Neo-Tokyo warrior.",
    price: "120.00",
    vibeScore: 9.9,
    imageBefore: "movies-3.jpeg",
    imageAfter: "movies-3.jpeg",
    tags: ["Split Canvas", "Triptych"],
    category: 'Anime',
    type: 'Poster-Split'
  },

  { 
    id: 101, 
    name: "Lewis Hemilton", 
    description: "A2 Matte poster featuring a long-exposure shot of Shibuya crossing. Deep blacks and neon hits.", 
    price: "25.00", 
    vibeScore: 9.4, 
    imageBefore: "cars-1.jpeg", 
    imageAfter: "cars-1.jpeg", 
    tags: ["Matte Finish", "A2 Size"],
    category: 'Cyberpunk',
    type: 'Poster-Single'
  },
  { 
    id: 102, 
    name: "Wick", 
    description: "Gallery wrap canvas print. Digital noise art inspired by CRT monitor decay.", 
    price: "60.00", 
    vibeScore: 9.7, 
    imageBefore: "movies-2.jpeg", 
    imageAfter: "movies-2.jpeg", 
    tags: ["Gallery Wrap", "Archival Ink"],
    category: 'Abstract',
    type: 'Poster-Single'
  },
  { 
    id: 103, 
    name: "Charles", 
    description: "Minimalist geometric shapes meeting circuit board schematics. Clean, sharp, and intellectual.", 
    price: "25.00", 
    vibeScore: 9.1, 
    imageBefore: "movies-1.jpeg", 
    imageAfter: "movies-1.jpeg", 
    tags: ["Minimalist", "Monochrome"],
    category: 'Minimalist',
    type: 'Poster-Single'
  },
  {
    id: 104,
    name: "Men are brave",
    description: "3-Panel split canvas set. A continuous panorama of a futuristic Neo-Tokyo warrior.",
    price: "120.00",
    vibeScore: 9.9,
    imageBefore: "movies-3.jpeg",
    imageAfter: "movies-3.jpeg",
    tags: ["Split Canvas", "Triptych"],
    category: 'Anime',
    type: 'Poster-Split'
  },
  { 
    id: 101, 
    name: "Lewis Hemilton", 
    description: "A2 Matte poster featuring a long-exposure shot of Shibuya crossing. Deep blacks and neon hits.", 
    price: "25.00", 
    vibeScore: 9.4, 
    imageBefore: "cars-1.jpeg", 
    imageAfter: "cars-1.jpeg", 
    tags: ["Matte Finish", "A2 Size"],
    category: 'Cyberpunk',
    type: 'Poster-Single'
  },
  { 
    id: 102, 
    name: "Wick", 
    description: "Gallery wrap canvas print. Digital noise art inspired by CRT monitor decay.", 
    price: "60.00", 
    vibeScore: 9.7, 
    imageBefore: "movies-2.jpeg", 
    imageAfter: "movies-2.jpeg", 
    tags: ["Gallery Wrap", "Archival Ink"],
    category: 'Abstract',
    type: 'Poster-Single'
  },
  { 
    id: 103, 
    name: "Charles", 
    description: "Minimalist geometric shapes meeting circuit board schematics. Clean, sharp, and intellectual.", 
    price: "25.00", 
    vibeScore: 9.1, 
    imageBefore: "movies-1.jpeg", 
    imageAfter: "movies-1.jpeg", 
    tags: ["Minimalist", "Monochrome"],
    category: 'Minimalist',
    type: 'Poster-Single'
  },
  {
    id: 104,
    name: "Men are brave",
    description: "3-Panel split canvas set. A continuous panorama of a futuristic Neo-Tokyo warrior.",
    price: "120.00",
    vibeScore: 9.9,
    imageBefore: "movies-3.jpeg",
    imageAfter: "movies-3.jpeg",
    tags: ["Split Canvas", "Triptych"],
    category: 'Anime',
    type: 'Poster-Split'
  },
  { 
    id: 101, 
    name: "Lewis Hemilton", 
    description: "A2 Matte poster featuring a long-exposure shot of Shibuya crossing. Deep blacks and neon hits.", 
    price: "25.00", 
    vibeScore: 9.4, 
    imageBefore: "cars-1.jpeg", 
    imageAfter: "cars-1.jpeg", 
    tags: ["Matte Finish", "A2 Size"],
    category: 'Cyberpunk',
    type: 'Poster-Single'
  },
  { 
    id: 102, 
    name: "Wick", 
    description: "Gallery wrap canvas print. Digital noise art inspired by CRT monitor decay.", 
    price: "60.00", 
    vibeScore: 9.7, 
    imageBefore: "movies-2.jpeg", 
    imageAfter: "movies-2.jpeg", 
    tags: ["Gallery Wrap", "Archival Ink"],
    category: 'Abstract',
    type: 'Poster-Single'
  },
  { 
    id: 103, 
    name: "Charles", 
    description: "Minimalist geometric shapes meeting circuit board schematics. Clean, sharp, and intellectual.", 
    price: "25.00", 
    vibeScore: 9.1, 
    imageBefore: "movies-1.jpeg", 
    imageAfter: "movies-1.jpeg", 
    tags: ["Minimalist", "Monochrome"],
    category: 'Minimalist',
    type: 'Poster-Single'
  },
  {
    id: 104,
    name: "Men are brave",
    description: "3-Panel split canvas set. A continuous panorama of a futuristic Neo-Tokyo warrior.",
    price: "120.00",
    vibeScore: 9.9,
    imageBefore: "movies-3.jpeg",
    imageAfter: "movies-3.jpeg",
    tags: ["Split Canvas", "Triptych"],
    category: 'Anime',
    type: 'Poster-Split'
  },
  { 
    id: 101, 
    name: "Lewis Hemilton", 
    description: "A2 Matte poster featuring a long-exposure shot of Shibuya crossing. Deep blacks and neon hits.", 
    price: "25.00", 
    vibeScore: 9.4, 
    imageBefore: "cars-1.jpeg", 
    imageAfter: "cars-1.jpeg", 
    tags: ["Matte Finish", "A2 Size"],
    category: 'Cyberpunk',
    type: 'Poster-Single'
  },
  { 
    id: 102, 
    name: "Wick", 
    description: "Gallery wrap canvas print. Digital noise art inspired by CRT monitor decay.", 
    price: "60.00", 
    vibeScore: 9.7, 
    imageBefore: "movies-2.jpeg", 
    imageAfter: "movies-2.jpeg", 
    tags: ["Gallery Wrap", "Archival Ink"],
    category: 'Abstract',
    type: 'Poster-Single'
  },
  
  { 
    id: 103, 
    name: "Charles", 
    description: "Minimalist geometric shapes meeting circuit board schematics. Clean, sharp, and intellectual.", 
    price: "25.00", 
    vibeScore: 9.1, 
    imageBefore: "movies-1.jpeg", 
    imageAfter: "movies-1.jpeg", 
    tags: ["Minimalist", "Monochrome"],
    category: 'Minimalist',
    type: 'Poster-Single'
  },

  {
    id: 104,
    name: "Men are brave",
    description: "3-Panel split canvas set. A continuous panorama of a futuristic Neo-Tokyo warrior.",
    price: "120.00",
    vibeScore: 9.9,
    imageBefore: "movies-3.jpeg",
    imageAfter: "movies-3.jpeg",
    tags: ["Split Canvas", "Triptych"],
    category: 'Anime',
    type: 'Poster-Split'
  },

  { 
    id: 101, 
    name: "Lewis Hemilton", 
    description: "A2 Matte poster featuring a long-exposure shot of Shibuya crossing. Deep blacks and neon hits.", 
    price: "25.00", 
    vibeScore: 9.4, 
    imageBefore: "cars-1.jpeg", 
    imageAfter: "cars-1.jpeg", 
    tags: ["Matte Finish", "A2 Size"],
    category: 'Cyberpunk',
    type: 'Poster-Single'
  },

  { 
    id: 102, 
    name: "Wick", 
    description: "Gallery wrap canvas print. Digital noise art inspired by CRT monitor decay.", 
    price: "60.00", 
    vibeScore: 9.7, 
    imageBefore: "movies-2.jpeg", 
    imageAfter: "movies-2.jpeg", 
    tags: ["Gallery Wrap", "Archival Ink"],
    category: 'Abstract',
    type: 'Poster-Single'
  },

  { 
    id: 103, 
    name: "Charles", 
    description: "Minimalist geometric shapes meeting circuit board schematics. Clean, sharp, and intellectual.", 
    price: "25.00", 
    vibeScore: 9.1, 
    imageBefore: "movies-1.jpeg", 
    imageAfter: "movies-1.jpeg", 
    tags: ["Minimalist", "Monochrome"],
    category: 'Minimalist',
    type: 'Poster-Single'
  },

  {
    id: 104,
    name: "Men are brave",
    description: "3-Panel split canvas set. A continuous panorama of a futuristic Neo-Tokyo warrior.",
    price: "120.00",
    vibeScore: 9.9,
    imageBefore: "movies-3.jpeg",
    imageAfter: "movies-3.jpeg",
    tags: ["Split Canvas", "Triptych"],
    category: 'Anime',
    type: 'Poster-Split'
  },

  { 
    id: 101, 
    name: "Lewis Hemilton", 
    description: "A2 Matte poster featuring a long-exposure shot of Shibuya crossing. Deep blacks and neon hits.", 
    price: "25.00", 
    vibeScore: 9.4, 
    imageBefore: "cars-1.jpeg", 
    imageAfter: "cars-1.jpeg", 
    tags: ["Matte Finish", "A2 Size"],
    category: 'Cyberpunk',
    type: 'Poster-Single'
  },

  { 
    id: 102, 
    name: "Wick", 
    description: "Gallery wrap canvas print. Digital noise art inspired by CRT monitor decay.", 
    price: "60.00", 
    vibeScore: 9.7, 
    imageBefore: "movies-2.jpeg", 
    imageAfter: "movies-2.jpeg", 
    tags: ["Gallery Wrap", "Archival Ink"],
    category: 'Abstract',
    type: 'Poster-Single'
  },

  { 
    id: 103, 
    name: "Charles", 
    description: "Minimalist geometric shapes meeting circuit board schematics. Clean, sharp, and intellectual.", 
    price: "25.00", 
    vibeScore: 9.1, 
    imageBefore: "movies-1.jpeg", 
    imageAfter: "movies-1.jpeg", 
    tags: ["Minimalist", "Monochrome"],
    category: 'Minimalist',
    type: 'Poster-Single'
  },

  {
    id: 104,
    name: "Men are brave",
    description: "3-Panel split canvas set. A continuous panorama of a futuristic Neo-Tokyo warrior.",
    price: "120.00",
    vibeScore: 9.9,
    imageBefore: "movies-3.jpeg",
    imageAfter: "movies-3.jpeg",
    tags: ["Split Canvas", "Triptych"],
    category: 'Anime',
    type: 'Poster-Split'
  },

  {
    id: 105,
    name: "John wick",
    description: "2-Panel set contrasting organic floral patterns with digital wireframes.",
    price: "85.00",
    vibeScore: 9.3,
    imageBefore: "movies-4.jpeg",
    imageAfter: "movies-4.jpeg",
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