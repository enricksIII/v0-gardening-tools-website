export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
}

export const categories = [
  { name: "Hand Tools", slug: "hand-tools", count: 12 },
  { name: "Power Tools", slug: "power-tools", count: 8 },
  { name: "Watering", slug: "watering", count: 10 },
  { name: "Planting", slug: "planting", count: 8 },
  { name: "Pruning", slug: "pruning", count: 6 },
  { name: "Lawn Care", slug: "lawn-care", count: 6 },
];

export const products: Product[] = [
  // Hand Tools (12)
  { id: 1, name: "Professional Garden Trowel", price: 24.99, category: "hand-tools", description: "Ergonomic stainless steel trowel with comfort grip handle.", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop", rating: 4.8, reviews: 156, inStock: true, badge: "Best Seller" },
  { id: 2, name: "Hand Weeder Tool", price: 18.99, category: "hand-tools", description: "Sharp forked tip for easy weed removal.", image: "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=400&h=400&fit=crop", rating: 4.5, reviews: 89, inStock: true },
  { id: 3, name: "Garden Fork Set", price: 34.99, category: "hand-tools", description: "3-piece fork set for various soil types.", image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400&h=400&fit=crop", rating: 4.7, reviews: 124, inStock: true },
  { id: 4, name: "Cultivator Hand Rake", price: 22.99, category: "hand-tools", description: "Perfect for loosening and aerating soil.", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop", rating: 4.6, reviews: 78, inStock: true },
  { id: 5, name: "Transplanting Spade", price: 28.99, category: "hand-tools", description: "Narrow blade ideal for transplanting seedlings.", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=400&fit=crop", rating: 4.4, reviews: 65, inStock: true },
  { id: 6, name: "Bulb Planter Tool", price: 16.99, category: "hand-tools", description: "Quick and easy bulb planting depth gauge.", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop", rating: 4.3, reviews: 92, inStock: true },
  { id: 7, name: "Garden Hoe Mini", price: 19.99, category: "hand-tools", description: "Compact hoe for tight spaces and containers.", image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&h=400&fit=crop", rating: 4.5, reviews: 67, inStock: true },
  { id: 8, name: "Dibber Planting Tool", price: 12.99, category: "hand-tools", description: "Traditional wooden dibber for seed planting.", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop", rating: 4.2, reviews: 45, inStock: true },
  { id: 9, name: "Soil Scoop Set", price: 26.99, category: "hand-tools", description: "3 sizes for potting and transplanting.", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop", rating: 4.6, reviews: 83, inStock: true },
  { id: 10, name: "Root Knife", price: 32.99, category: "hand-tools", description: "Japanese-style hori hori garden knife.", image: "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=400&h=400&fit=crop", rating: 4.9, reviews: 201, inStock: true, badge: "Premium" },
  { id: 11, name: "Hand Rake Combo", price: 21.99, category: "hand-tools", description: "Rake and trowel combo for everyday tasks.", image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400&h=400&fit=crop", rating: 4.4, reviews: 56, inStock: true },
  { id: 12, name: "Garden Tool Belt", price: 38.99, category: "hand-tools", description: "Canvas belt with pockets for tools.", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop", rating: 4.7, reviews: 112, inStock: true },

  // Power Tools (8)
  { id: 13, name: "Cordless Hedge Trimmer", price: 149.99, category: "power-tools", description: "20V lithium battery, 22-inch blade.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", rating: 4.7, reviews: 234, inStock: true, badge: "Popular" },
  { id: 14, name: "Electric Lawn Edger", price: 89.99, category: "power-tools", description: "Precise edge cutting for clean borders.", image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&h=400&fit=crop", rating: 4.5, reviews: 167, inStock: true },
  { id: 15, name: "Battery Leaf Blower", price: 129.99, category: "power-tools", description: "Powerful 40V motor, lightweight design.", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop", rating: 4.6, reviews: 189, inStock: true },
  { id: 16, name: "Electric Tiller", price: 199.99, category: "power-tools", description: "14-inch width, adjustable depth.", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=400&fit=crop", rating: 4.8, reviews: 145, inStock: true, badge: "Best Value" },
  { id: 17, name: "Cordless Pruning Saw", price: 79.99, category: "power-tools", description: "6-inch blade for branches up to 4 inches.", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop", rating: 4.4, reviews: 98, inStock: true },
  { id: 18, name: "Electric Chainsaw", price: 169.99, category: "power-tools", description: "16-inch bar, auto oiling system.", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop", rating: 4.6, reviews: 178, inStock: false },
  { id: 19, name: "Garden Shredder", price: 249.99, category: "power-tools", description: "Mulches branches up to 1.5 inches.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", rating: 4.5, reviews: 87, inStock: true },
  { id: 20, name: "Cordless Grass Trimmer", price: 69.99, category: "power-tools", description: "Adjustable head, 12-inch cutting width.", image: "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=400&h=400&fit=crop", rating: 4.3, reviews: 156, inStock: true },

  // Watering (10)
  { id: 21, name: "Premium Garden Hose 50ft", price: 44.99, category: "watering", description: "Kink-resistant, drinking water safe.", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop", rating: 4.7, reviews: 312, inStock: true, badge: "Top Rated" },
  { id: 22, name: "Adjustable Spray Nozzle", price: 18.99, category: "watering", description: "10 spray patterns, thumb control.", image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400&h=400&fit=crop", rating: 4.5, reviews: 234, inStock: true },
  { id: 23, name: "Oscillating Sprinkler", price: 29.99, category: "watering", description: "Covers up to 3,600 sq ft.", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop", rating: 4.4, reviews: 167, inStock: true },
  { id: 24, name: "Drip Irrigation Kit", price: 54.99, category: "watering", description: "Complete 100ft system with timer.", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=400&fit=crop", rating: 4.8, reviews: 198, inStock: true, badge: "Eco Choice" },
  { id: 25, name: "Watering Can 2 Gallon", price: 24.99, category: "watering", description: "Galvanized steel, detachable rose.", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop", rating: 4.6, reviews: 145, inStock: true },
  { id: 26, name: "Hose Reel Cart", price: 79.99, category: "watering", description: "Holds up to 200ft of hose.", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop", rating: 4.5, reviews: 89, inStock: true },
  { id: 27, name: "Soaker Hose 75ft", price: 32.99, category: "watering", description: "Porous design for deep root watering.", image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&h=400&fit=crop", rating: 4.3, reviews: 112, inStock: true },
  { id: 28, name: "Digital Water Timer", price: 38.99, category: "watering", description: "Programmable, dual outlet.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", rating: 4.7, reviews: 176, inStock: true },
  { id: 29, name: "Rain Barrel 50 Gallon", price: 89.99, category: "watering", description: "UV-resistant, includes spigot.", image: "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=400&h=400&fit=crop", rating: 4.6, reviews: 134, inStock: true },
  { id: 30, name: "Plant Mister Bottle", price: 14.99, category: "watering", description: "Fine mist spray, 32oz capacity.", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop", rating: 4.4, reviews: 98, inStock: true },

  // Planting (8)
  { id: 31, name: "Seed Starting Tray", price: 16.99, category: "planting", description: "72 cells with humidity dome.", image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400&h=400&fit=crop", rating: 4.5, reviews: 234, inStock: true },
  { id: 32, name: "Potting Soil Mix 40qt", price: 22.99, category: "planting", description: "Premium blend for containers.", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop", rating: 4.7, reviews: 312, inStock: true, badge: "Best Seller" },
  { id: 33, name: "Grow Light Panel", price: 69.99, category: "planting", description: "Full spectrum LED, adjustable height.", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=400&fit=crop", rating: 4.6, reviews: 187, inStock: true },
  { id: 34, name: "Plant Labels 100 Pack", price: 9.99, category: "planting", description: "Weatherproof plastic markers.", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop", rating: 4.4, reviews: 156, inStock: true },
  { id: 35, name: "Seedling Heat Mat", price: 34.99, category: "planting", description: "10x20 inch, waterproof design.", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop", rating: 4.8, reviews: 145, inStock: true },
  { id: 36, name: "Compost Bin 80 Gallon", price: 119.99, category: "planting", description: "Dual chamber tumbler design.", image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&h=400&fit=crop", rating: 4.7, reviews: 98, inStock: true },
  { id: 37, name: "Raised Bed Kit 4x8", price: 149.99, category: "planting", description: "Cedar wood, easy assembly.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", rating: 4.9, reviews: 267, inStock: true, badge: "Premium" },
  { id: 38, name: "Plant Support Stakes 50", price: 19.99, category: "planting", description: "36-inch bamboo stakes.", image: "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=400&h=400&fit=crop", rating: 4.3, reviews: 112, inStock: true },

  // Pruning (6)
  { id: 39, name: "Bypass Pruning Shears", price: 29.99, category: "pruning", description: "SK5 steel blade, ergonomic grip.", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop", rating: 4.8, reviews: 345, inStock: true, badge: "Best Seller" },
  { id: 40, name: "Hedge Shears", price: 42.99, category: "pruning", description: "8-inch wavy blade, shock absorbers.", image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400&h=400&fit=crop", rating: 4.6, reviews: 178, inStock: true },
  { id: 41, name: "Lopper 24-inch", price: 54.99, category: "pruning", description: "Cuts branches up to 2 inches.", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop", rating: 4.7, reviews: 156, inStock: true },
  { id: 42, name: "Pruning Saw 14-inch", price: 28.99, category: "pruning", description: "Triple-cut teeth, folding design.", image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=400&h=400&fit=crop", rating: 4.5, reviews: 134, inStock: true },
  { id: 43, name: "Pole Pruner Extendable", price: 79.99, category: "pruning", description: "Reaches up to 14 feet.", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=400&fit=crop", rating: 4.6, reviews: 112, inStock: true },
  { id: 44, name: "Topiary Shears", price: 36.99, category: "pruning", description: "Single-hand operation, precision cut.", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&h=400&fit=crop", rating: 4.4, reviews: 87, inStock: true },

  // Lawn Care (6)
  { id: 45, name: "Push Reel Mower", price: 159.99, category: "lawn-care", description: "Eco-friendly, 18-inch cutting width.", image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&h=400&fit=crop", rating: 4.5, reviews: 198, inStock: true },
  { id: 46, name: "Lawn Aerator Shoes", price: 24.99, category: "lawn-care", description: "Heavy-duty spikes, adjustable straps.", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop", rating: 4.2, reviews: 145, inStock: true },
  { id: 47, name: "Broadcast Spreader", price: 89.99, category: "lawn-care", description: "12,000 sq ft capacity, pneumatic tires.", image: "https://images.unsplash.com/photo-1617576683096-00fc8eecb3af?w=400&h=400&fit=crop", rating: 4.7, reviews: 167, inStock: true },
  { id: 48, name: "Lawn Roller 18-inch", price: 74.99, category: "lawn-care", description: "Fillable drum, tow or push.", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop", rating: 4.4, reviews: 89, inStock: true },
  { id: 49, name: "Dethatching Rake", price: 34.99, category: "lawn-care", description: "Curved tines, 15-inch width.", image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=400&h=400&fit=crop", rating: 4.5, reviews: 112, inStock: true },
  { id: 50, name: "Grass Seed Spreader", price: 29.99, category: "lawn-care", description: "Hand-held, adjustable flow.", image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop", rating: 4.3, reviews: 98, inStock: true },
];

export function getProductById(id: number): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) || 
    p.description.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
}
