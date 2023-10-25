import { prismaClient } from "@/lib/prisma";
import ProductImages from "./components/productImages";
import ProductInfo from "./components/productInfo";
import { computeProductTotalPrice } from "@/helpers/product";
import ProductList from "@/components/ui/productList";
import SectionTitle from "@/components/ui/sectionTitle";

interface ProductDetailsPageProps {
  params: {
    slug: string;
  }
}

const ProductDetailsPage = async ({params: { slug } }: ProductDetailsPageProps) => {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: slug
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: slug
              }
            }
          }
        }
      }
    }
  })

  if(!product) return null;

  return (
    <div className="flex gap-4 flex-col">
      <ProductImages imageUrls={product.imageUrls} name={product.name} />
      <ProductInfo product={computeProductTotalPrice(product)} />
      <div className="mt-8 flex flex-col gap-4">
        <SectionTitle title="Produtos recomendados"/>
        <ProductList products={product.category.products} />
      </div>
    </div>
  )
}

export default ProductDetailsPage;