import { StyledDiv } from "../CartContainer/style";
import { ListCardProducts } from "../ListCardProducts";
import { TitleCart } from "../TitleCart";
import { TotalPrice } from "../TotalPrice";

export function CartContainer({
  productsCart,
  removeProduct,
  removeAllProducts,
  addquantity,
  removeQuantity
}) {
  return (
    <StyledDiv>
      <TitleCart />
      {productsCart.length > 0 ? (
        <>
          <ListCardProducts
            productsCart={productsCart}
            removeProduct={removeProduct}
            addquantity={addquantity}
            removeQuantity={removeQuantity}
          />
          <TotalPrice
            productsCart={productsCart}
            removeAllProducts={removeAllProducts}
          />
        </>
      ) : (
        <>
          <h3 className={"h3_totalPrice"}>Sua sacola está vazia</h3>
          <p className={"p_totalPrice"}>Adicione itens</p>
        </>
      )}
    </StyledDiv>
  );
}
