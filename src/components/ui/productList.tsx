import ProductItem from "@/components/ui/ProductItem";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[]
}

const ProductList = ({products}: ProductListProps) => {
  return (
    <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <div key={product.id} className="w-[170px] h-[170px]">
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  )
}

export default ProductList;