// Sample data types for future use
export type Product = {
  id: string
  name: string
  price: number
  image: string
  offer?: string
}

// Keep basic categories for potential future features
export const CATEGORIES = ["Fashion", "Electronics", "Grocery", "Furniture", "Other"] as const
