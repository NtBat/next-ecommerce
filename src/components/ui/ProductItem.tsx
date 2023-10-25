import { ProductWithTotalPriceProps } from "@/helpers/product";
import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown, ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPriceProps;
}

const ProductItem = ({product}: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-4 w-full h-full">
      <div className="bg-accent rounded-lg w-full h-full flex items-center justify-center relative">
        <Image 
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="h-auto w-auto max-w-[80%] max-h[70%]"
          style={{
            objectFit: "contain"
          }}
          alt={product.name}
        />

        {product.discountPercentage > 0 && (
          <Badge className="absolute left-2 top-2 px-2 py-[2px]">
            <ArrowDownIcon size={14} />
            {product.discountPercentage} %
          </Badge>
        )}
      </div>

      <div className="flex flex-col gap-1"> 
        <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">
          {product.name}
        </p>
        <div className="flex items-center gap-2">
          {product.discountPercentage > 0 ? (
            <>
              <p className="font-semibold text-md">R$ {product.totalPrice.toFixed(2)}</p>
              <p className="opacity-75 line-through text-xs">R$ {Number(product.basePrice).toFixed(2)}</p>
            </>
          ) : (
            <p className="font-semibold text-md">R$ {product.basePrice.toFixed(2)}</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductItem;