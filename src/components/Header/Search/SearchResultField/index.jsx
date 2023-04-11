import { StyledSection } from "./style";

export function SearchResultField({ searchValue, clearSearch }) {
  return (
    <>
      {searchValue.length > 0 ? (
        <StyledSection>
          <h2>
            Resultados para: <span>{searchValue}</span>
          </h2>
          <button onClick={() => clearSearch()}>Limpar busca</button>
        </StyledSection>
      ) : (
        <></>
      )}
    </>
  );
}

