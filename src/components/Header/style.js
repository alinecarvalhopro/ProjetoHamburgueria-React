import styled from "styled-components";

export const StyledHeader = styled.header`

    width: 100%;
    height: 139px;

    background-color: var(--greyScale-4);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    z-index: 1;

    figure {
        width: 165px;

        margin-left: 1rem;

        display: flex;
        align-items: center;
    }

h1 {
    margin-bottom: 1rem;
    
    font-size: 22px;
    font-weight: 700;
    color: var(--greyScale-1);
}

span {
    font-size: 16px;
    font-weight: 600;
    color: var(--secundaryColor);
}

p {
    margin-top: 5px;

    font-size: 12px;
}

.veg {
    width: 25px;
}

@media(min-width: 769px) {
    height: 80px;

    justify-content: space-between;
    
    flex-direction: row;
    align-items: center;

    figure {
        margin-left: 115px;
    }

    h1 {
        margin-bottom: 0;
    }
}
`