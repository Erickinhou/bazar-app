import React from "react";
import { styles } from "./styles";

const treatStyles = (props: any) => {
  if (props.search) {
    return styles.search;
  }
  return styles.default;
};

export function ProductCardHOC(WrappedComponent: any) {
  return class extends React.Component {
    render() {
      return WrappedComponent({
        product: this.props?.product,
        style: treatStyles(this.props),
      });
    }
  };
}
