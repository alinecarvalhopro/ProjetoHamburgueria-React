import { ProductCart } from "./ProductCart";
import { StyledUl } from "./style";

export function ListCardProducts({
  productsCart,
  removeProduct,
  addquantity,
  removeQuantity,
}) {
  return (
    <StyledUl>
      <ProductCart
        productsCart={productsCart}
        removeProduct={removeProduct}
        addquantity={addquantity}
        removeQuantity={removeQuantity}
      />
    </StyledUl>
  );
}
