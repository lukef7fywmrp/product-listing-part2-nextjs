"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/lib/definitions";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PriceInfo from "./PriceInfo";
import ProductInfo from "./ProductInfo";
import { Button } from "./ui/button";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Link from "next/link";

function ProductCard({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);

  const images: ReactImageGalleryItem[] = Array.from({ length: 4 }, (_, i) => ({
    original: product.image,
    originalAlt: product.title,
    thumbnail: product.image,
    thumbnailAlt: product.title,
    renderThumbInner(item) {
      return (
        <div
          className={cn(
            "bg-[#F8F9FA] mt-12 border rounded-[12px] w-20 h-20 flex items-center justify-center transition-all duration-200",
            activeImage === i ? "border-[#E59D97]" : "border-transparent"
          )}
        >
          <Image
            src={item.thumbnail || item.original}
            alt={item.thumbnailAlt || item.originalAlt || "thumbnail"}
            className="w-16 h-16 object-contain"
            width={64}
            height={64}
          />
        </div>
      );
    },
  }));

  return (
    <Card className="bg-white shadow-[0px_4px_6px_-2px_#1018280D,_0px_12px_16px_-4px_#1018281A] rounded-3xl border-none h-fit">
      <CardContent className="p-10 flex gap-x-7">
        <div className="flex-1 relative">
          <ImageGallery
            startIndex={activeImage}
            onSlide={(index) => setActiveImage(index)}
            items={images}
            renderItem={(item) => (
              <div className="bg-[#F8F9FA] px-8 py-8 rounded-[20px]">
                <Zoom>
                  <Image
                    priority
                    src={item.original}
                    alt={item.originalAlt || "image"}
                    className="w-full max-w-sm h-72 object-contain"
                    width={400}
                    height={400}
                  />
                </Zoom>
              </div>
            )}
            showNav={false}
            showPlayButton={false}
            showFullscreenButton={false}
          />
          <p className="text-[#B4B9C3] absolute bottom-28 text-sm mt-1">
            Roll over image to zoom in
          </p>
        </div>

        <div className="flex flex-col flex-1">
          <ProductInfo
            title={product.title}
            description={product.description}
            category={product.category}
          />
          <PriceInfo price={product.price} />

          <Button
            asChild
            className="bg-[#C62A1C] hover:bg-[#C62A1C]/90 transition rounded-[12px] py-5 mt-auto"
          >
            <Link href={`/products/${product.id}`}>Buy now</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
