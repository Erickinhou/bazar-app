import { TouchableOpacity } from 'react-native';
import { SearchProductCard } from './SearchProductCard';
import { Product } from '../ProductSlide';
import { ProductCard } from '../ProductSlide/ProductCard';

interface Props {
    product: Product,
    position: number
}

const SearchProducts: React.FC<Props> = ({ product, position }) => {

    const handleButtonClick = () => {
        console.log(product.title)
    }

    return (
        <TouchableOpacity onPress={() => handleButtonClick()}>
            {/* <SearchProductCard product={product} position={position}/> */}
            <ProductCard product={product} />
        </TouchableOpacity>
    );
}

export default SearchProducts;