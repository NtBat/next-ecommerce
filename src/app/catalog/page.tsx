import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";
import CategoryItem from "./components/categoryItem";

const CatalogPage = async () => {
  const categories = await prismaClient.category.findMany({})

  return (
    <div className="p-4 gap-8 flex flex-col">
      <Badge className="w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]" variant="outline">
        <ShapesIcon size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category}/>
        ))}
      </div>
    </div>
  )
}

export default CatalogPage;