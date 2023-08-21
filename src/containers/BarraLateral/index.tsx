import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtros'

import * as S from './styles'
import * as enums from '../../utils/enums/Tarefas'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <S.Campo
          type="text"
          placeholder="Buscar"
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Status.PENDENTE}
            criterio="status"
            legenda="pendentes"
          />
          <FiltroCard
            valor={enums.Status.CONCLUIDA}
            criterio="status"
            legenda="concluídas"
          />
          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            criterio="prioridade"
            legenda="urgentes"
          />
          <FiltroCard
            valor={enums.Status.PENDENTE}
            criterio="prioridade"
            legenda="importantes"
          />
          <FiltroCard
            valor={enums.Prioridade.URGENTE}
            criterio="prioridade"
            legenda="normal"
          />
          <FiltroCard
            valor={enums.Prioridade.IMPORTANTE}
            criterio="todas"
            legenda="todas"
          />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
