import ProductList from "@/components/ProductList";
import ProductSkeleton from "@/components/ProductSkeleton";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Suspense } from "react";

function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto min-h-screen py-24">
      <div className="flex items-center justify-between p-6">
        <h2 className="text-4xl font-semibold text-[#5E687C]">Batteries</h2>
        <Button variant={"ghost"} className="text-[#9098A5]">
          View all batteries
        </Button>
      </div>
      <ScrollArea className="rounded-md bg-transparent">
        <div className="flex w-max gap-x-12 p-6">
          <Suspense
            fallback={Array.from({ length: 4 }, (_, i) => (
              <ProductSkeleton key={i} />
            ))}
          >
            <ProductList />
          </Suspense>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </main>
  );
}

export default ProductsPage;
