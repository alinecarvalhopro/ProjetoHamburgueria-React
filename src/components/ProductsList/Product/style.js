import styled from "styled-components";

export const StyledLi = styled.li`

    min-width: 300px;
    min-height: 346px;

    margin-right: 1rem;

    border: 2px solid var(--greyScale-3);
    border-radius: 5px;

div {
    width: 300px;

    background-color: var(--greyScale-4);

    display: flex;
    justify-content: center;
}

.imgProduct {
    height: 150px;

    background-color: var(--greyScale-4);
}

h3 {

    margin: 2rem 0 1rem 1rem;

    font-weight: 700;
    font-size: 18px;
    color: var(--greyScale-1);
}

span {
    margin: 1rem;

    font-weight: 400;
    font-size: 12px;
    color: var(--greyScale-2);
}

p {
    margin: 1rem;

    font-weight: 600;
    font-size: 14px;
    color: var(--primaryColor-1);
}

button {
    width: 107px;
    height: 40px;

    margin: 0 0 0 1rem;

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
    max-width: 300px;
    max-height: 346px;

    margin-bottom: 1rem;
}
`