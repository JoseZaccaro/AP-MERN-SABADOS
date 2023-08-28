import { createReducer } from "@reduxjs/toolkit";
import peliculasAction from "../actions/peliculasAction";
const { ultimaPeliculaVista } = peliculasAction
const initialState = {
    ultimasPeliculas: []
}

export const peliculasReducer = createReducer(initialState,
    (builder) =>
        builder.addCase(ultimaPeliculaVista, (state, action) => {
            console.log(action)
            const ultimos = [...state.ultimasPeliculas].filter(pelicula => pelicula.nombre !== action.payload.nombre)
            ultimos.unshift(action.payload)
            return {
                ultimasPeliculas: ultimos
            }
        })

)