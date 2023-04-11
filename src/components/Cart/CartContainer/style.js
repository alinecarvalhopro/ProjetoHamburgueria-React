import styled from "styled-components";

export const StyledDiv = styled.div`

    width: calc(100% - 2rem);

    margin: 1rem;

    .h3_totalPrice {
        width: 100%;
        height: 79px;

        background-color: var(--greyScale-4);

        font-weight: 700;
        font-size: 18px;
        line-height: 35px;
        color: var(--greyScale-1);

        display: flex;
        justify-content: center;
        align-items: flex-end;
    }

    .p_totalPrice {
        width: 100%;
        height: 79px;  

        background-color: var(--greyScale-4);

        font-weight: 400;
        font-size: 14px;
        color: var(--greyScale-2);

        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    @media(min-width: 769px) {
        width: calc(100% - 230px);

        margin: 1rem 115px;
     }


    @media(min-width: 950px) {
        width: 382px;

        margin: 0;

        position: fixed;
        top: 100px;
        right: 115px;

    }

    @media(min-width: 1025px) {
        width: 382px;

        margin: 0;
    }

`  