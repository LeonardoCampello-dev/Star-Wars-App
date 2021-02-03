import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  :root {
    --yellow-color: #FFE300;
    --white-color: #FEFEFE;

    --frozen-color: #ADD8E6;
    --arid-color: #C4C42B;
    --temperate-color: #228B22;
    --murky-color: #A8A3A3;
    --temperate-tropical-color: #E2725B;
    
    font-size: 60%
  }

  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    text-decoration: none;
    list-style-type: none;
  }
  
  html,
  body,
  #root {
    min-height: 100vh;

    background-color: #090211;
    color: var(--white-color);
  }

  body,
  button {
    font: 500 1.6rem 'JetBrains Mono', monospace;
  }

  .title {
    font-family: 'Roboto', sans-serif;
  }
`;
