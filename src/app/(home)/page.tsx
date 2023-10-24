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
  
  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: "mouses"
      }
    }
  })

  return (
    <div className="flex flex-col gap-10">
      <Banner src="/banner-home-01.png" alt="Até 55% de desconto somente esse mês" />

      <div>
        <Categories />
      </div>

      <div>
        <SectionTitle title="Ofertas" />
        <ProductList products={deals} />
      </div>

      <div>
        <Banner src="/banner-home-02.png" alt="Até 55% de desconto em mouses" />
      </div>

      <div>
        <SectionTitle title="Teclados" />
        <ProductList products={keyboards} />
      </div>

      <div>
        <Banner src="/banner-home-03.png" alt="Até 20% de desconto em fones" />
      </div>

      <div>
        <SectionTitle title="Mouses" />
        <ProductList products={mouses} />
      </div>
    </div>
  )
}


