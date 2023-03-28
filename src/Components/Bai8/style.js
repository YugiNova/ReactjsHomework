import styled, { keyframes } from "styled-components";

export const Title = styled.h1`
    background: #00F260;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right bottom, #0575E6, #00F260);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right bottom, #0575E6, #00F260); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-background-clip: text;
    color: transparent;
    font-size: 3rem;
`

export const Background = styled.div`
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    height: 100vh;
    position:relative;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    
`;

export const Wrapper = styled.div`
    box-sizing: border-box;
     background: #00F260;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right bottom, #0575E6, #00F260);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right bottom, #0575E6, #00F260); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 1rem;
    width: 20rem;
    overflow: hidden;
    padding: 2rem 1rem;
    box-shadow: 10px 10px 77px 14px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 77px 14px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 77px 14px rgba(0,0,0,0.75);
`
