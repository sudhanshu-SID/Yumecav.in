export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  vibeScore: number;
  imageBefore: string;
  imageAfter: string;
  tags: string[];
  category: string; // e.g., 'Cyberpunk', 'Anime', 'Minimalist'
  type: 'Sticker' | 'Poster-Single' | 'Poster-Split'; 
}


export interface CartItem extends Product {
  quantity: number;
}

export interface ShippingDetails {
  name: string;
  email: string;
  address: string;
  pincode: string;
  phone: string;
}

export interface Hotspot {
  id: number;
  top: number;
  left: number;
  name: string;
  price: string;
  link: string;
}

export interface LookbookItem {
  id: number;
  title: string;
  image: string;
  hotspots: Hotspot[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface UGCPost {
  id: number;
  user: string;
  product: string;
  time: string;
  img: string;
}

export interface ShowcaseImage {
  id: number;
  url: string;
  user: string;
  alt: string;
}
