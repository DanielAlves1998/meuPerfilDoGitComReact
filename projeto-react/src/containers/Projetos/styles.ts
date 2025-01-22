import styled from "styled-components";

export const Lista = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr; // FR significa fração, cada FR(fração) é uma coluna
    column-gap: 36px;
    row-gap: 40px; // row significa linha, aqui dá um espaçamento nas colunas
`