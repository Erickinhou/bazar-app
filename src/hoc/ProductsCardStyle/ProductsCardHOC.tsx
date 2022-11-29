import React from "react";
import { styles } from "./styles";

const treatStyles = (props: any) => {
  if (props?.search) {
    let newStyles = { ...styles.search };
    if (props?.index % 2 === 0) {
      newStyles.productCardContainer = {
        ...newStyles.productCardContainer,
        marginTop: 10
      };
    } else {
      newStyles.productCardContainer = {
        ...newStyles.productCardContainer,
        marginTop: 40
      };
    }
    return newStyles;
  }
  return styles.default;
};

export function ProductCardHOC(WrappedComponent: React.FC) {
  return (props: any) => (
    <WrappedComponent
      product={props?.product}
      style={treatStyles(props)}
      {...props}
    />
  );
}
