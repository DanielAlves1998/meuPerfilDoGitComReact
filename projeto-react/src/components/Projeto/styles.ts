import styled from "styled-components"; // com essa importação é pormitido manipulas estilos por aqui

//aqui é para criar as bordas que irá criar um retangulo 
export const Card = styled.div` // o export é para exportar o arquivo para outro lugar, nesse caso para a página principal
    border: 1px solid ${(Props ) => Props.theme.corDaBorda};
    padding: 16px;
`

export const LinkBotao = styled.a` //o a é a crase do link
    color: ${(Props) => Props.theme.corDeFundo};
    font-size: 14px;
    background-color: ${(Props) => Props.theme.corDeFundoBotao};
    text-decoration: none;
    padding: 8px;
    display: inline-block; // dá um espaçamento
    margin-top: 24px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        column-gap: 0;
        row-gap: 16px;
    }
`