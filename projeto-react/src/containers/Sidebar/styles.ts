import { LinkBotao } from './../../components/Projeto/styles';
import styled from "styled-components";
import { P } from "../../components/Paragrafo/styles";

export const Descricao = styled(P)`
    margin-top: 24px;
    margin-bottom: 40px;
`

export const Botaotema = styled.button`
    border-radius: 12px;
    padding: 8px;
    color: ${Props => Props.theme.corDeFundo};
    font-size: 10px;
    font-weight: bold;
    background-color: ${Props => Props.theme.corPrincipal};
    cursor: pointer;
`


//aqui é para que a barra lateral acompanhe o rolamento da página
export const SidebarContainer = styled.div`
    position: sticky;
    top: 80px;
    left: 0;

    @media (max-width: 768px) {
        margin-bottom: 40px;
        text-align: center;
    }
`