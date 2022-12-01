import React from "react";
import { Product } from "../../components/ProductSlide";
import { styles } from "./styles";

const treatStyles = (props: Props) => {
  if (props?.search) {
    let newStyles = { ...styles.search };
    if (props?.index % 2 === 0) {
      newStyles.productCardContainer = {
        ...newStyles.productCardContainer,
        marginTop: 10,
        marginRight: 10,
      };
    } else {
      newStyles.productCardContainer = {
        ...newStyles.productCardContainer,
        marginTop: 40,
        marginLeft: 10,
      };
    }
    return newStyles;
  }
  return styles.default;
};

interface Props {
  product: Product;
  search?: boolean;
  index?: number;
  style?: any;
}

export function ProductCardHOC(WrappedComponent: React.FC<Props>) {
  return (props: Props) => (
    <WrappedComponent
      product={props?.product}
      style={treatStyles(props)}
      {...props}
    />
  );
}
