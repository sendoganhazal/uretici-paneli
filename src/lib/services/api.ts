/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IManufacturer } from "../types";

export const fetchManufacturers = async (): Promise<IManufacturer[]> => {
  const res = await fetch('https://dummyjson.com/products');
  const data = await res.json();
  const validBrands = data.products
    .map((p: { brand: string }) => p.brand)
    .filter((brand: string) => brand && brand.trim().length > 0); // null, undefined, "" veya " " kontrolü
  const uniqueBrands = Array.from(new Set(validBrands));
  
  return uniqueBrands.map((brandName) => {
    const product = data.products.find((p: { brand: string }) => p.brand === brandName);

    return {
      ...product,
      city: "İstanbul",
      shippingInformation: product.shippingInformation || "2-4 İş Günü",
      minimumOrderQuantity: product.minimumOrderQuantity || 1
    };
  });
};