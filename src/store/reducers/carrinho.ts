import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type ProdutoState = {
  itens: Produto[]
}

const initialState: ProdutoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionarProduto: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload

      if (state.itens.find((produtoCesta) => produtoCesta.id === produto.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionarProduto } = carrinhoSlice.actions
export default carrinhoSlice.reducer
