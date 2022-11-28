import { TouchableOpacity, View } from 'react-native';
import { Product } from '../ProductSlide';
import { ProductCardTest } from '../ProductSlide/ProductCard';

interface Props {
    product: Product,
}

const SearchProducts: React.FC<Props> = ({ product }) => {

    const handleButtonClick = () => {
        console.log(product.title)
    }

    return (
        <TouchableOpacity onPress={() => handleButtonClick()}>
            <ProductCardTest product={product} search />
        </TouchableOpacity>
    );
}

export default SearchProducts;