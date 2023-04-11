import { Product } from "./Product";
import { StyledUl } from "./style";

export function ProductsList({productsList, handleClick}) {
    return (
        <StyledUl>
            <Product productsList={productsList} handleClick={handleClick}/>
        </StyledUl>
    )
}