import { Link } from 'react-router-dom';
import { CategoryItem } from './styles';

interface CategoryProps {
  categoryName: string;
}

export const Category: React.FC<CategoryProps> = ({ categoryName }) => {
  return (
    <CategoryItem>
      <Link
        className="link-category"
        to={{ pathname: `/joke`, state: { selectedCategory: categoryName } }}
      >
        {categoryName}
      </Link>
    </CategoryItem>
  );
};
