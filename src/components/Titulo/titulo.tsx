import { StyleTitulo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <StyleTitulo fontSize={props.fontSize}>{props.children}</StyleTitulo>
)

export default Titulo
