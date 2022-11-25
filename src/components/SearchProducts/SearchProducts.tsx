import { SearchProductCard } from './SearchProductCard';
import { Product } from '../ProductSlide';

interface Props {
    product: Product,
    position: number
}

const SearchProducts: React.FC<Props> = ({ product, position }) => {
    return (
        <SearchProductCard product={product} position={position}/>
    );
}

export default SearchProducts;