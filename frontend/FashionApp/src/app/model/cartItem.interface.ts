export interface ICartItem {
    id: number; // Unique identifier for the cart item
    name: string; // Name of the product
    price: number; // Price of the product
    quantity: number; // Quantity of the product added to the cart
    productId?: number; // Optional: ID to map the product in the backend
    userId?: number; // Optional: ID to associate the cart item with a user
  }
  