export interface IUser {
  id: string;
  email: string;
  name: string;
  cart: ICartItem[];
  orders: IOrder[];
}

export interface ICartItem {
  productID: string;
  quantity: number;
}

export interface IOrderList {
  userID: string;
  orders: IOrder[];
  createdAt: string;
  total: string;
  state: string;
}

export interface IOrder {
  brand: string;
  date: string;
  productID: string;
  image: string;
  price: number;
  quantity: number;
  title: string;
}
