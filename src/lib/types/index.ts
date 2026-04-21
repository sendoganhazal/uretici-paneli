export interface IManufacturer {
  id: number;
  brand: string;
  category: string;
  city: string;
  rating: number;
  description: string;
  minimumOrderQuantity: number;
  shippingInformation: string;
  images: string[];
  thumbnail: string;
  tags: string[];
}