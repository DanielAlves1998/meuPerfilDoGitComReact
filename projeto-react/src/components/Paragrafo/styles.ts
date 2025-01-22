import styled from 'styled-components'

import { Props } from '.'

export const P = styled.p<Props>`
    font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px' )};
    color: ${(Props) => Props.tipo === 'Principal' 
        ? Props.theme.corPrincipal : 
        Props.theme.corSecundaria };
    line-height: 22px; // da um espaçamento entre as linhas

`