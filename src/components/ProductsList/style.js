import styled from "styled-components";

export const StyledUl = styled.ul`

position: relative;

    margin-left: 1rem;
    margin-bottom: 1rem;

    display: flex;
    flex-direction: row;

    overflow-x: auto;

@media(min-width: 769px) { 
    margin: 0;
    margin-left: 115px;
}

@media(min-width: 950px) {
    width: 350px;

    flex-wrap: wrap;

    overflow-y: auto;
}

@media(min-width: 1025px) {
    width: calc(100% - 230px - 382px);
}
`