import styled from "styled-components";

export const StyledDiv = styled.div`

    width: 100%;

    border-top: 2px solid var(--greyScale-3);
    border-radius: 0px 0px 5px 5px;

    background-color: var(--greyScale-4);

    display: flex;
    flex-direction: column;

    div{

        padding: 1rem;

        display: flex;
        justify-content: space-between;

    }

    h4, span {
        font-weight: 600;
        font-size: 14px;
        color: var(--greyScale-1);
    }

    p {
        font-weight: 600;
        font-size: 14px;
        color: var(--greyScale-2);
    }

`