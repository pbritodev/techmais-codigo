import styled from "styled-components";

const AppStyle = styled.div`
.App {
    text-align: center;
  }
  
  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }
  
  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo infinite 20s linear;
    }
  }
  
  .App-header {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
  }
  
  .Login {
    text-align: center;
    justify-content:center;  
  }
  
  .Login-logo{
    justify-content: center;
    text-align: center;
      
  }
  
  .Login-area{
    display: inline-block;
    border: 3px solid #02288b;
    border-radius: 50px;
    padding: 10px;
    font-size: large;
    background-color: rgba(0, 0, 0, 0.1);
    width: 25em;
  }

  .footer{
    padding: 20px;
    background-color: #02288b;
    color: white;
    margin-top: 4em;
    text-align: center;
    position: static;
    left: 0;
    bottom: 0;
    width: 100%;
    }

  input{
    display: block;
    width: 20em;
    border: 2px solid black;
    border-radius: 7px;
    padding: 5px;
    margin: 0 auto;
  }
  
  h1{
    padding: 0 1em 0 1em;
  }

  h2{
    padding: 0 0,5em 0 0,5em;
  }

  .Suporte {
    text-align: center;
    justify-content:center;  
  }
  
  .Suporte-logo{
    justify-content: center;
    text-align: center;
      
  }

  .sugestao{
    height: 3em;
  }

  .Login-link{
    display: block;
  }

  .Sobre-area{
    display: inline-block;
    border: 3px solid #02288b;
    border-radius: 50px;
    padding: 10px;
    font-size: large;
    background-color: rgba(0, 0, 0, 0.1);
    width: 40em;
  }

  .paragrafo{
    margin: 20px;
    text-align:justify;
  }

  .equipe{
    display: block;
    margin: 0 auto;
    line-height: 5px;
  }

  .nomes{
    text-decoration: none;
    color: black;
    display: block;
    font-size: larger;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
  }

  .div-membro{
    padding-top: 30px;
  }


.imagem-sobre{
  border: 3px solid #02288b;
  border-radius: 1.5em;
}

.linkedin{
  text-decoration: none;
  color: blue;
}
`

export { AppStyle };