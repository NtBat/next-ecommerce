import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./categoryItem";

const Categories = async () => {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className="grid grid-cols-2 gap-4">
      {categories.map(category => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Categories;