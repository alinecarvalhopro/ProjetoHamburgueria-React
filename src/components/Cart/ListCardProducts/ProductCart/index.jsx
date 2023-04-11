import { QuantityOfProducts } from "./QuantityOfProducts";
import { StyledLi } from "./style";

export function ProductCart({
  productsCart,
  removeProduct,
  addquantity,
  removeQuantity,
}) {
  return (
    <>
      {productsCart.length > 0 &&
        productsCart.map((product) => {
          return (
            <StyledLi key={product.id}>
              <div className={"boxImgNameCategory"}>
                <img src={product.img} alt={product.name} />
                <span>
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </span>
              </div>
              <div className={"boxButtons"}>
                <button onClick={() => removeProduct(product.id)}>
                  Remover
                </button>
                <QuantityOfProducts
                  addquantity={addquantity}
                  removeQuantity={removeQuantity}
                  product={product}
                />
              </div>
            </StyledLi>
          );
        })}
    </>
  );
}