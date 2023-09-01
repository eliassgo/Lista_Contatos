import BotaoAdicionar from '../../components/BotaoAdicionar'
import CampoPesquisar from '../../components/CampoPesquisar'
import { Props } from '../../components/Contato'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Editar = () => (
  <>
    <CampoPesquisar />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)

export default Editar
