export interface ICartItem {
  productID: string;
  quantity: number;
}

export interface ICart {
  cartID: string;
  userID: string;
  products: ICartItem[];
}
