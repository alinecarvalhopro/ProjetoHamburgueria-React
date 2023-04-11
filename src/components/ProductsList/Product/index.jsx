import { StyledLi } from "./style";

export function Product({ productsList, handleClick }) {
  return (
    <>
      {productsList.map((product) => (
        <StyledLi key={product.id}>
            <div>
            <img className={"imgProduct"} src={product.img} alt={product.name} />
            </div>
          <h3>{product.name}</h3>
          <span>{product.category}</span>
          <p>{product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}</p>
          <button onClick={() => handleClick(product.id)}>Adicionar</button>
        </StyledLi>
      ))}
    </>
  );
}
