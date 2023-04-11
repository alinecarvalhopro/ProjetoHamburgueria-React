import styled from "styled-components";

export const StyledButton = styled.button`
    width: calc(100% - 2rem);
    height: 60px;

    margin: 1rem;

    border: none;
    border-radius: 8px;

    font-weight: 600;
    font-size: 16px;
    color: var(--greyScale-2);

    transition: 1s;

:hover {
    background-color: var(--greyScale-2);

    color: var(--greyScale-3);
}
`