import { ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import amazon from "@/app/logos/amazon.svg";
import noon from "@/app/logos/noon.svg";
import whatsapp from "@/app/logos/whatsapp.svg";
import microless from "@/app/logos/microless.svg";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const logos = [
  {
    id: "1",
    image: noon,
    alt: "noon",
  },
  {
    id: "2",
    image: amazon,
    alt: "amazon",
  },
  {
    id: "3",
    image: microless,
    alt: "microless",
  },
  {
    id: "4",
    image: whatsapp,
    alt: "whatsapp",
  },
] as const;

function PriceInfo({ price }: { price: number }) {
  return (
    <div className="space-y-4 border-b py-4">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-[#9098A5] text-xs">Price Inclusive of VAT</p>
          <p className="font-bold text-2xl">{price} AED</p>
        </div>

        <Button variant={"secondary"} size={"icon"} className="h-14 w-14">
          <ShoppingBag className="text-[#9098A5]" />
        </Button>
      </div>

      <div className="space-y-2">
        <p className="text-[#9098A5] text-xs">Also available on</p>
        <div className="gap-3 flex items-center">
          {logos.map((logo) => (
            <TooltipProvider key={logo.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={"secondary"}
                    size={"icon"}
                    className="h-10 w-20"
                  >
                    <Image src={logo.image} alt={logo.alt} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="capitalize">
                  {logo.alt}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PriceInfo;
