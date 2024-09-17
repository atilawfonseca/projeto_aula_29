import styled from 'styled-components'
import { Props } from './titulo'

export const StyleTitulo = styled.h2<Props>`
  color: ${(props) => props.theme.principal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  text-align: center;
`
