import styled from "styled-components";

export const SearhContainer = styled.div`
    background: transparent;
    border-radius: 1rem;
    width:100%;
    height: auto;
    display:flex;
    flex-direction: row;
    justify-content: center;
    box-sizing: border-box;
    

    input{
        border-radius: 1rem 0 0 1rem;
        padding: 0 1rem;
        font-size: 1.5rem;
    }
    button{
        width: 25%;
        border-radius: 0 1rem 1rem 0;
        font-size: 1.5rem;
        height: auto;
        background: #f7ff00;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right top, #db36a4, #f7ff00);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right top, #db36a4, #f7ff00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        color: white;

        img{
            width: 1rem;
            height: 1rem;
        }
    }
`;