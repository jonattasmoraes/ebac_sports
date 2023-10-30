import { useSelector } from 'react-redux'

import * as S from './styles'
import cesta from '../../assets/cesta.png'
import { RootReducer } from '../../store'
import { paraReal } from '../Produto'

const Header = () => {
  const itens = useSelector((state: RootReducer) => state.carrinho.itens)
  const favoritos = useSelector(
    (state: RootReducer) => state.favoritar.itensFavorito
  )

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
