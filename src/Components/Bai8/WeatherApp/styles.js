import styled, { keyframes } from "styled-components";

const show = keyframes`
    from{
        height:0;
        opacity: 0;
    }
    to{
        height:26.5rem;
        opacity: 1;
    }
`;
export const WeatherWrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
    background: transparent;
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    margin: 0;
    color:white;
    font-family: 'Poppins', cursive;
    overflow: hidden;
    animation: ${show} 2s ease forwards;
    h1,h2,h3{
        margin:0;
        text-align:center;
    }
    
`;

export const CityInfo = styled.div`
    h1{
        font-size:1.75rem;
        margin:0;
    }
    h2{
        font-size:1.25rem;
        margin:0;
    }
`;

export const Temperature = styled.div`
    margin-bottom: 1rem;
    img{
        width: 64px;
        height: 64px;
    }
    h1{
        font-size:4rem;
    }
    h3{
        font-size:1.5rem;
    }
`;

export const WeatherInfo = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    
    div{
        box-sizing: border-box;
        background: #f7ff00;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right top, #db36a4, #f7ff00);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right top, #db36a4, #f7ff00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        padding: 0.5rem 0.75rem;
        border-radius: 1rem;
        display: grid;
        align-content: center;
        justify-content: center;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        img{
            grid-column: 1/2;
            grid-row: 1/3;
            width: 2rem;
            height: 2rem;
            margin: 0.5rem auto;
        }
        h2{
            grid-column: 2/3;
            grid-row: 1/2;
            font-size:0.8rem;
            text-align: left;
        }
        h1{
            grid-column: 2/3;
            grid-row: 2/3;
            font-size:1.25rem;
            text-align: left;
        }
    }
`;