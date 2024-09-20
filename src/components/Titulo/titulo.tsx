import { StyleTitulo } from './styles'

export type Props = {
  children: string
  fontSize?: number
  fontWeight?: string
  marginBottom?: number
  textAline?: string
}

const Titulo = (props: Props) => (
  <StyleTitulo
    fontSize={props.fontSize}
    fontWeight={props.fontWeight}
    marginBottom={props.marginBottom}
    textAline={props.textAline}
  >
    {props.children}
  </StyleTitulo>
)

export default Titulo
