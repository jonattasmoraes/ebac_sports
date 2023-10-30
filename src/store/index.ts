import { configureStore } from '@reduxjs/toolkit'

import favoritosReducer from './reducers/favoritos'
import carrinhoReducer from './reducers/carrinho'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritar: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
