import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { fetchProduct } from "@/lib/data";
import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function ProductDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await fetchProduct(id);

  return (
    <main className="py-6 px-4 md:px-12 bg-gray-50 dark:bg-gray-800 max-w-7xl mx-auto min-h-screen">
      <div className="relative w-full">
        <Button
          asChild
          className="absolute left-4 top-4 h-10 bg-gray-200 hover:bg-gray-300 text-black font-semibold rounded-full shadow-md"
        >
          <Link href="/products">
            <ArrowLeftIcon className="w-4 h-4 mx-auto" />
            Back
          </Link>
        </Button>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center h-full pt-24">
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 space-y-6">
          <h1 className="font-bold text-4xl sm:text-5xl text-center md:text-left">
            {product.title}
          </h1>
          <div className="w-full md:w-3/4">
            <Image
              alt={product.title}
              className="w-full aspect-[1/1] object-cover rounded-lg shadow-md"
              height="500"
              src={product.image}
              width="500"
            />
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="text-2xl font-semibold">{product.price} AED</span>
            <Badge className="text-base font-semibold py-1 px-2 rounded-md bg-green-500 text-white">
              In Stock
            </Badge>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start w-full md:w-1/2 space-y-6 md:pl-12">
          <h2 className="font-bold text-2xl sm:text-3xl text-center md:text-left">
            Product Details
          </h2>
          <p className="text-center md:text-left">{product.description}</p>
          <Button className="bg-[#C62A1C] hover:bg-[#C62A1C]/90 transition rounded-[12px] w-full md:w-1/2 h-12 text-white font-semibold shadow-md">
            Checkout
          </Button>
        </div>
      </div>
    </main>
  );
}

export default ProductDetailPage;
