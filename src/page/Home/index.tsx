import BotaoAdicionar from '../../components/BotaoAdicionar'
import CampoPesquisar from '../../components/CampoPesquisar'
import ListaDeContatos from '../../containers/ListaDeContatos'

const Home = () => (
  <>
    <CampoPesquisar />
    <ListaDeContatos />
    <BotaoAdicionar />
  </>
)

export default Home
