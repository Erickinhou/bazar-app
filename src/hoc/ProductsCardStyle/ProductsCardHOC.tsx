import React from "react";
import { ProductI } from "../../components/ProductSlide";
import { styles } from "./styles";

const treatStyles = (props: T) => {
  if (props?.search) {
    let newStyles = { ...styles.search };
    if (props?.index % 2 === 0) {
      newStyles.productCardContainer = {
        ...newStyles.productCardContainer,
        marginTop: 10,
      };
    } else {
      newStyles.productCardContainer = {
        ...newStyles.productCardContainer,
        marginTop: 40,
      };
    }
    return newStyles;
  }
  return styles.default;
};

interface Props {
  product: ProductI;
  search?: boolean;
  index?: number;
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
