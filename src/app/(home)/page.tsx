import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/productList";
import { prismaClient } from "@/lib/prisma";
import SectionTitle from "./components/sectionTitle";
import Banner from "./components/banner";


export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      }
    }
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "keyboards"
      }
    }
  })

  return (
    <div>
      <Banner src="/banner-home-01.png" alt="Até 55% de desconto somente esse mês" />

      <div className="mt-7 p-4">
        <Categories />
      </div>

      <div className="mt-7">
        <SectionTitle title="Ofertas" />
        <ProductList products={deals} />
      </div>

      <div className="mt-2">
        <Banner src="/banner-home-02.png" alt="Até 55% de desconto em mouses" />
      </div>

      <div className="mt-7">
        <SectionTitle title="Teclados" />
        <ProductList products={keyboards} />
      </div>
    </div>
  )
}


