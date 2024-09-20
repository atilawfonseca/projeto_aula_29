import Titulo from '../Titulo/titulo'
import { Vaga, VagaLink } from './styled'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vag = (props: Props) => (
  <Vaga>
    <Titulo fontWeight={'bold'} marginBottom={16}>
      {props.titulo}
    </Titulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink> Ver detalhes e candidatar-se </VagaLink>
  </Vaga>
)

export default Vag
