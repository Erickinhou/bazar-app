import { View } from 'react-native';
import { SearchProductCard } from './SearchProductCard';
import { Product } from '../ProductSlide';
import { styles } from './styles';

interface Props {
    product: Product,
    position: number
}

const SearchProducts: React.FC<Props> = ({ product, position }) => {
    return (
        <View style={[
            styles.productCardContainer,
            position % 2 === 0 ? styles.productCardLeft : styles.productCardRight,
        ]}>
            <SearchProductCard product={product} />
        </View>
    );
}

export default SearchProducts;