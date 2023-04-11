import { StyledDiv } from "./style";

export function Search({ showSelectedProducts, inputValue, setInputValue }) {
  return (
    <StyledDiv>
      <input
        placeholder="Digitar Pesquisa"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      ></input>
      <button onClick={() => showSelectedProducts(inputValue)}>
        Pesquisar
      </button>
    </StyledDiv>
  );
}