import styled, { createGlobalStyle } from "styled-components";

import { Theme } from "./themes/dark";

const EstiloGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", serif;
    
    color: #000;
    list-style: none; //tira o efeito da lista 
}

body {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: ${(Props) => (Props.theme as Theme).corDeFundo};

    @media (max-wideth: 768px) {
        padding-top: 16px;
    }
}



`

export default EstiloGlobal

export const Container = styled.div`
max-width: 1024px;
width: 100%;
margin: 0 auto;
display: grid;
grid-template-columns: 128px auto;
column-gap: 56px; // da um espaçamento entre a imagem e a paragrafo

// adaptação para telefone
    @media (max-width: 768px) {
        max-width: 80%;
        display: block;
    }



`