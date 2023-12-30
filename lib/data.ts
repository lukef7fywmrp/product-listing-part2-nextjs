import { unstable_noStore as noStore } from "next/cache";
import { Product } from "./definitions";

export async function fetchProducts() {
  // Disable Next.js built-in caching, noStore is the equivalent of doing
  // `cache: "no-store"` in the `fetch` API. Do this if you want to always fetch the latest data.
  // noStore();

  try {
    // throw  new Error("Failed to fetch products"); // uncomment this line to see the error state, which will fallback to error.tsx page

    // artificially delay the response to see the loading state
    // await new Promise((resolve) => setTimeout(resolve, 10000));

    // Fetch products from the Fake Store API
    const response = await fetch("https://fakestoreapi.com/products", {
      // cache: "no-store", // Disable built-in caching in the `fetch` API
      next: {
        revalidate: 60 * 60 * 24,
        // revalidate every 24 hours, change this to a time that makes sense for your data, or `false` to disable revalidation
        // Means that, it will get fresh data from the server every 24 hours, and in the meantime, it will serve the cached data.
      },
    });
    const products: Product[] = await response.json();

    return products;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch products");
  }
}

export async function fetchProduct(id: string) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product: Product = await response.json();

    return product;
  } catch (error) {
    console.error("API Error:", error);
    throw new Error("Failed to fetch product");
  }
}
