import styled from "styled-components";

export const StyledDiv = styled.div`

    width: calc(100% - 2rem);
    height: 60px;

    border: 2px solid var(--greyScale-3);
    border-radius: 8px;

    background-color: #FFFFFF;

    display: flex;
    justify-content: space-between;
    align-items: center;

input {
    width: calc(100% - 107px - 2rem);
    border: none;

    padding-left: 1rem;

    font-weight: 400;
    font-size: 16px;
}

button {
    min-width: 107px;
    height: 40px;

    margin: 1rem;

    border: none;
    border-radius: 8px;

    background-color: var(--primaryColor-1);

    color: #FFFFFF;

    transition: 1s;
}

button:hover {
    background-color: var(--primaryColor-2);
}

@media(min-width: 769px) {
    width: 382px;

    margin-right: 115px;
} 

`