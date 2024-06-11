// Import interfaces
import {
  IBannerItem,
  IServiceItem,
  IHomePageResponse,
  IDataProductItem,
} from './interface';

// Mock data for banner section
export const bannerSection: IBannerItem[] = [
  {
    id: 1,
    title: 'Banner 1',
    image:
      'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    route: '/banner1',
    deep_link: 'deep_link_1',
  },
  {
    id: 2,
    title: 'Banner 2',
    image:
      'https://images.unsplash.com/photo-1497048679117-1a29644559e3?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    route: '/banner2',
    deep_link: 'deep_link_2',
  },
];

// Mock data for services section
export const servicesSection: IServiceItem[] = [
  {
    id: 1,
    title: 'Tiktok',
    image:
      'https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGlrdG9rJTIwaWNvbnxlbnwwfHwwfHx8MA%3D%3D',
    route: '/service1',
    deep_link: 'deep_link_service_1',
  },
  {
    id: 2,
    title: 'Instagram',
    image:
      'https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    route: '/service2',
    deep_link: 'deep_link_service_2',
  },
  {
    id: 3,
    title: 'Spotify',
    image:
      'https://images.unsplash.com/photo-1611339555312-e607c8352fd7?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    route: '/service3',
    deep_link: 'deep_link_service_3',
  },
  {
    id: 4,
    title: 'Netflix',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    route: '/service3',
    deep_link: 'deep_link_service_3',
  },
];

const mockProducts: IDataProductItem[] = [
  {
    id: 1,
    title: 'Bút chì',
    price: 100,
    salePrice: 80,
    available: true,
    image:
      'https://plus.unsplash.com/premium_photo-1663040669845-e4ff569ee5f7?q=80&w=3776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Description for Product 1',
    category: 'Category 1',
    subCategory: 'Subcategory 1',
    brand: 'Brand 1',
    rating: 4.5,
    reviews: 10,
  },
  {
    id: 2,
    title: 'Bút màu',
    price: 120,
    salePrice: 100,
    available: true,
    image:
      'https://images.unsplash.com/photo-1534769721666-3e87fe5fe8dc?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Description for Product 2',
    category: 'Category 2',
    subCategory: 'Subcategory 2',
    brand: 'Brand 2',
    rating: 4.2,
    reviews: 15,
  },
  {
    id: 3,
    title: 'Tệp hồ sơ',
    price: 90,
    salePrice: 70,
    available: true,
    image:
      'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VwcGxpZXN8ZW58MHx8MHx8fDA%3D',
    description: 'Description for Product 3',
    category: 'Category 1',
    subCategory: 'Subcategory 1',
    brand: 'Brand 3',
    rating: 4.0,
    reviews: 8,
  },
  {
    id: 4,
    title: 'Bút xoá',
    price: 150,
    salePrice: 120,
    available: true,
    image:
      'https://images.unsplash.com/photo-1551925608-12e169132446?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Description for Product 4',
    category: 'Category 3',
    subCategory: 'Subcategory 3',
    brand: 'Brand 4',
    rating: 4.7,
    reviews: 20,
  },
  {
    id: 5,
    title: 'Thước kẻ',
    price: 80,
    salePrice: 60,
    available: false,
    image:
      'https://plus.unsplash.com/premium_photo-1663127729829-de7f295c2987?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Description for Product 5',
    category: 'Category 2',
    subCategory: 'Subcategory 2',
    brand: 'Brand 5',
    rating: 4.8,
    reviews: 25,
  },
  {
    id: 6,
    title: 'Hộp màu',
    price: 110,
    salePrice: 90,
    available: true,
    image:
      'https://images.unsplash.com/photo-1597843597259-2970dc4979a0?q=80&w=3868&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Description for Product 6',
    category: 'Category 1',
    subCategory: 'Subcategory 1',
    brand: 'Brand 6',
    rating: 4.3,
    reviews: 12,
  },
  {
    id: 7,
    title: 'Cọ vẽ',
    price: 130,
    salePrice: 100,
    available: true,
    image:
      'https://images.unsplash.com/photo-1610829029572-11bd35d9c2dc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHN1cHBsaWVzfGVufDB8fDB8fHww',
    description: 'Description for Product 7',
    category: 'Category 3',
    subCategory: 'Subcategory 3',
    brand: 'Brand 7',
    rating: 4.6,
    reviews: 18,
  },
  {
    id: 8,
    title: 'Mực vẽ',
    price: 95,
    salePrice: 75,
    available: true,
    image:
      'https://images.unsplash.com/photo-1530749563741-d96315d67757?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHN1cHBsaWVzfGVufDB8fDB8fHww',
    description: 'Description for Product 8',
    category: 'Category 2',
    subCategory: 'Subcategory 2',
    brand: 'Brand 8',
    rating: 4.1,
    reviews: 9,
  },
  {
    id: 9,
    title: 'Bút chì',
    price: 140,
    salePrice: 110,
    available: false,
    image:
      'https://plus.unsplash.com/premium_photo-1664110691177-f9c861df3703?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fHN1cHBsaWVzfGVufDB8fDB8fHww',
    description: 'Description for Product 9',
    category: 'Category 1',
    subCategory: 'Subcategory 1',
    brand: 'Brand 9',
    rating: 4.4,
    reviews: 14,
  },
  {
    id: 10,
    title: 'Đầu bút màu',
    price: 75,
    salePrice: 55,
    available: true,
    image:
      'https://images.unsplash.com/photo-1601493700876-01fa22e6ed98?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODd8fHN1cHBsaWVzfGVufDB8fDB8fHww',
    description: 'Description for Product 10',
    category: 'Category 3',
    subCategory: 'Subcategory 3',
    brand: 'Brand 10',
    rating: 4.9,
    reviews: 30,
  },
];

export const mockProductSection = {
  id: 1,
  description: 'Horizontal Products',
  item: mockProducts,
  title: 'Horizontal Products',
};

// Mock data for home page response
export const homePageResponse: IHomePageResponse = {
  data: {
    bannerSection: bannerSection,
    servicesSection: servicesSection,
    horizontalSection: mockProductSection,
  },
};

// Export mock data
export const mockData: IHomePageResponse = homePageResponse;
