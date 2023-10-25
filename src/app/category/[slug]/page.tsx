import { categoryIcon } from "@/app/constants/categoryIcons";
import ProductItem from "@/components/ui/ProductItem";
import { Badge } from "@/components/ui/badge";
import { computeProductTotalPrice } from "@/helpers/product";
import { prismaClient } from "@/lib/prisma";

const CategoryProducts = async ({params}: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug
    },
    include: {
      products: true,
    }
  })

  if(!category) {
    return null;
  }

  return (
    <div className="p-4 flex flex-col gap-8">
      <Badge className="w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]" variant="outline">
        {categoryIcon[params.slug as keyof typeof categoryIcon]}
        {category.name}
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {category.products.map((product) => (
          <ProductItem key={product.id} product={computeProductTotalPrice(product)} />
        ))}
      </div>
    </div>
  )
}

export default CategoryProducts;