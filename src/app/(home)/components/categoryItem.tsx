import { categoryIcon } from "@/app/constants/categoryIcons";
import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";

interface CategoryItemsProps {
  category: Category;
}

const CategoryItem = ({category} : CategoryItemsProps) => {

  return (
    <Badge variant="outline" className="py-3 flex justify-center items-center gap-2 rounded-lg">
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className="text-xs font-bold">{category.name}</span>
    </Badge>
  )
}

export default CategoryItem;