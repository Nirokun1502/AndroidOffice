export interface IBannerItem {
  id: number;
  title: string;
  image: string;
  route: string;
  deep_link: string;
}

export interface IServiceItem {
  id: number;
  title: string;
  image: string;
  route?: string;
  deep_link?: string;
}

export interface IHomePageResponse {
  data: {
    bannerSection: IBannerItem[];
    servicesSection: IServiceItem[];
    horizontalSection: IProductSection;
  };
}

export interface IProductSection {
  id: number;
  title: string;
  description: string;
  item: IDataProductItem[];
}

export interface IDataProductItem {
  id: number;
  title: string;
  price: number;
  salePrice: number;
  available: boolean;
  image: string;
  description: string;
  category: string;
  subCategory: string;
  brand: string;
  rating: number;
  reviews: number;
}
