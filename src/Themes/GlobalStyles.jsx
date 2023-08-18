import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
      adding: 0;
      margin: 0;
      font-family: 'Roboto';
      box-sizing: border-box;
      transition: 0.5s;
    }
    .navbar {
        background: ${(props) => props.theme.backgroundNav};
    } 
    .card-movie {
        background: ${(props) => props.theme.backgroundNav};
    }
    .card-movie:hover {
        background: ${(props) => props.theme.backgroundNav};
        box-shadow: 0px 0px 15px 6px rgba(255,255,255,1);
    }
    .card-container {
        background: ${(props) => props.theme.backgroundNav};
    }
    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme.text};        
    }
    h1  {
        color: ${(props) => props.theme.titles};        
    }
    .container-search .title h2  {
        color: ${(props) => props.theme.titles};        
    }
    .footer {
        background: ${(props) => props.theme.backgroundNav};
    }
    
`;
