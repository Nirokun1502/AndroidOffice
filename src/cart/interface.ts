export interface CartItem {
  id: string;
  title: string;
  brand: string;
  price: number;
  image: string;
  qty: number;
}

export interface CartData {
  data: CartItem[] | undefined;
  success: boolean;
}

export interface AddToCartResponse {
  success: boolean;
  data?: CartItem[];
}

export interface RemoveItemResponse {
  data?: CartItem[];
  success: boolean;
  subTotal?: number;
}
