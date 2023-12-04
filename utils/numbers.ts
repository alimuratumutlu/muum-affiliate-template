import { Product } from "@/types";

export const getPrice = (product: Product) => product.priceR ?? product.priceO;
