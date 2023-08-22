import { BotaoSalver, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes } from './styles'

const Formulario = () => (
  <MainContainer>
    <Titulo>Nova Tarefa</Titulo>
    <Form>
      <Campo type="text" placeholder="Título" />
      <Campo as="textarea" placeholder="Descrição da tarefa" />
      <Opcoes>
        <p>Prioridade</p>
        <input type="radio" name="prioridade" id="urgente" />
        <label htmlFor="urgente">Urgente</label>
        <input type="radio" id="importante" name="prioridade" />
        <label htmlFor="importante">Importante</label>
        <input type="radio" id="normal" name="prioridade" />{' '}
        <label htmlFor="normal">Normal</label>
      </Opcoes>
      <BotaoSalver type="submit">Cadastrar</BotaoSalver>
    </Form>
  </MainContainer>
)

export default Formulario
