import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
:root{
    --navHeight:10vh;
}
body{
    width:100vw;
    height:100vh;
    overflow:hidden;
    font-family: 'Open Sans', sans-serif;
//font-family: 'Quicksand', sans-serif;
}
* a{
    text-decoration:none;
    color:inherit;
    cursor:pointer;
}
* button{
    border:0;
    cursor:pointer;
    &:hover,&:focus{
        outline:0;
    }
}
`;

export default GlobalStyle;
