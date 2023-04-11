import { Search } from "./Search";
import { StyledHeader } from "./style";
import veg from "../../assets/veg.png";

export function Header({ showSelectedProducts, inputValue, setInputValue }) {
  return (
    <StyledHeader>
      <figure>
        <h1>
          Burguer <span>Kenzie</span>
        </h1>
        <img className={"veg"} src={veg} alt={"Produto Vegano"} />
      </figure>
      <Search
        showSelectedProducts={showSelectedProducts}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </StyledHeader>
  );
}
