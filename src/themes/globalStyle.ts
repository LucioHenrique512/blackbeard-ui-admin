import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
}
body{
    background: ${({theme})=>theme.background};
}
`;
