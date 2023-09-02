import { createReducer } from "@reduxjs/toolkit";
import favActions from "../actions/favActions";
const { obtenerFavoritos, agregarFavoritos, quitarFavoritos } = favActions
const initialState = {
    favoritos: []
}

export const favReducer = createReducer(initialState,
    (builder) =>
        builder
            .addCase(obtenerFavoritos, (state, action) => {
                console.log(action)

                return {
                    favoritos: action.payload
                }
            })
            .addCase(agregarFavoritos, (state, action) => {
                console.log(action)

                const favoritos = [...state.favoritos, action.payload]

                return {
                    favoritos: favoritos
                }
            })
            .addCase(quitarFavoritos, (state, action) => {
                console.log(action)
                const faveado = action.payload
                const favoritos = state.favoritos.filter(fav => fav._id !== faveado)

                return {

                    favoritos: favoritos
                }
            })

)