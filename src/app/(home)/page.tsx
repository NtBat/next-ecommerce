import Image from "next/image";
import Categories from "./components/categories";
import ProductList from "./components/productList";
import { prismaClient } from "@/lib/prisma";


export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      }
    }
  });

  return (
    <div>
      <Image 
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="Até 55% de desconto somente nesse mês"
      />

      <div className="mt-7 p-4">
        <Categories />
      </div>

      <div className="mt-7">
        <p className="font-bold uppercase pl-4 mb-2 text-center">Ofertas</p>
        <ProductList products={deals} />
      </div>

      <div className="mt-2">
        <Image 
          src="/banner-home-02.png"
          height={0}
          width={0}
          className="h-auto w-full"
          sizes="100vw"
          alt="Até 55% de desconto em mouses"
        />
      </div>
    </div>
  )
}


