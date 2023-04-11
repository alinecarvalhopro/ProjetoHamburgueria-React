import { StyledDiv } from "./style";

export function QuantityOfProducts({
  product,
  addquantity,
  removeQuantity
}) {
  return (
    <StyledDiv>
      <button
        className={"buttonQuantity"}
        onClick={() => removeQuantity(product.id)}
      >
        -
      </button>
      <p>{product.quantity}</p>
      <button
        className={"buttonQuantity"}
        onClick={() => addquantity(product.id)}
      >
        +
      </button>
    </StyledDiv>
  );
}
