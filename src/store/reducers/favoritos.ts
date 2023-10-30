import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itensFavorito: Produto[]
}

const initialState: FavoritosState = {
  itensFavorito: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produtoFavorito = action.payload

      if (
        state.itensFavorito.find((produto) => produto.id === produtoFavorito.id)
      ) {
        alert('O produto já está na lista')
      } else {
        state.itensFavorito.push(produtoFavorito)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
