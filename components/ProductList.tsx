import { fetchProducts } from "@/lib/data";
import ProductCard from "./ProductCard";

async function ProductList() {
  const products = await fetchProducts();

  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}

export default ProductList;
