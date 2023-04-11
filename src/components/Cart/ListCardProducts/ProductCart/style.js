import styled from "styled-components";

export const StyledLi = styled.li`

    width: calc(100% - 2rem);

    padding: 1rem;

    background-color: var(--greyScale-4);

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

.boxImgNameCategory {
    display: flex;
}

img {
    width: 70px;
    height: 70px;

    border-radius: 5px;

    background-color: var(--greyScale-3);
}

span {
    margin-left: 1rem;
}

h3 {
width: 100px;

    font-weight: 700;   
    font-size: 14px;
}

p {
    margin-top: 1rem;

    font-weight: 400;
    font-size: 12px;
    color: var(--greyScale-2);
}

.boxButtons {
    display: flex;
    flex-direction: column;
    align-items: center;
}

button {
    width: 90px;

    border: none;
    border-radius: 8px;

    padding: 0;

    background-color: var(--greyScale-4);

    font-weight: 500;
    font-size: 12px;
    color: var(--greyScale-2);
}
`