import * as S from './style'

const CampoPesquisar = () => {
  return (
    <S.CampoContainer>
      <div>
        <h2>Pesquisar contato</h2>
        <S.Campo type="text" placeholder="buscar" />
      </div>
    </S.CampoContainer>
  )
}

export default CampoPesquisar
