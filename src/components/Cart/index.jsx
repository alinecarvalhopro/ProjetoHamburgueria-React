import { CartContainer } from "./CartContainer";

export function Cart({
  productsCart,
  removeProduct,
  removeAllProducts,
  addquantity,
  removeQuantity,
}) {
  return (
    <CartContainer
      productsCart={productsCart}
      removeProduct={removeProduct}
      addquantity={addquantity}
      removeQuantity={removeQuantity}
      removeAllProducts={removeAllProducts}
    />
  );
}
