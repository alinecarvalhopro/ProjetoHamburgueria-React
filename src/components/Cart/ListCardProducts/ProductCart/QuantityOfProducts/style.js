import styled from "styled-components";

export const StyledDiv = styled.div`
width: 90px;
height: 30px;

margin-top: 10px;

display: flex;
justify-content: center;
align-items: center;

p {
    width: 30px;
    height: 30px;

    text-align: center;
}

.buttonQuantity {
    width: 30px;
    height: 30px;

    transition: 0.5s;
    
}

.buttonQuantity:hover {
    background-color: white;
    
    color: black;
}

`