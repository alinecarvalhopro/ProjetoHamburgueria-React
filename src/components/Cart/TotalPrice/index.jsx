import { StyledButton } from "./ButtonCart/style";
import { StyledDiv } from "./style";

export function TotalPrice({ productsCart, removeAllProducts }) {
  const total = productsCart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price * currentValue.quantity,
    0
  );
  const quantity = productsCart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );

  return (
    <StyledDiv>
      <div>
        <h4>
          Total <span>{quantity}</span>
        </h4>
        <p>
          {total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <StyledButton onClick={() => removeAllProducts()}>
        Enviar pedido
      </StyledButton>
    </StyledDiv>
  );
}
