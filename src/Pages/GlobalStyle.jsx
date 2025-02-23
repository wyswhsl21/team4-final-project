import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
     a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
    }
    body{
        font-family: Pretendard;
        font-style:normal;
        background-color: #ffffff;
        
    }
    ol, ul{
        list-style: none;
    }
    button {
        /* border: 0; */
        background: transparent;
        border-radius: 4px;
        cursor: pointer;
    }
    input {
        outline: none;
    }



`;

export default GlobalStyle;
