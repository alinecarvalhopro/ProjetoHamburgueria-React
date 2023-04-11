import styled from "styled-components";

export const StyledSection = styled.section`

    width: calc(100% - 1rem);
    max-height: 50px;

    margin-left: 1rem;
    margin-bottom: 2rem;

    padding: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        color: var(--greyScale-1);
    }

    span {
        color: var(--greyScale-2);
    }

    button {
        min-width: 107px;
        height: 40px;

        margin-right: 1rem;

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
    width: calc(100% - 230px);

    margin-left: 115px;

    h1 {
        font-size: 26px;
        line-height: 34px;
    }
    
}

@media(min-width: 950px) {
    width: 300px;

    button {
        margin-right: 0;
    }
}

@media(min-width: 1025px) {
    width: calc(600px + 1rem);
}
`