import { createReducer } from "@reduxjs/toolkit";
import seriesAction from "../actions/seriesAction";
const { ultimaSerieVista, obtenerSeries, filtrar } = seriesAction
const initialState = {
    ultimasSeries: [],
    series: [],
    seriesAux: []
}

export const seriesReducer = createReducer(initialState,
    (builder) =>
        builder.addCase(ultimaSerieVista, (state, action) => {
            // console.log(action)
            const ultimos = [...state.ultimasSeries].filter(serie => serie.nombre !== action.payload.nombre)
            ultimos.unshift(action.payload)
            return {
                ...state,
                ultimasSeries: ultimos
            }
        })
            .addCase(filtrar, (state, action) => {
                // console.log(action)
                
                const valor = action.payload.toLowerCase().trim()
                const filtro = (serie) => serie.nombre.toLowerCase().trim().startsWith(valor)
                const { seriesAux } = state
                const seriesFiltradas = seriesAux.filter(filtro)

                return {
                    ...state,
                    series: seriesFiltradas
                }
            })
            .addCase(obtenerSeries.fulfilled, (state, action) => {
                // console.log(action.payload)

                return {
                    ...state,
                    series: action.payload.series,
                    seriesAux: action.payload.series,
                }
            })
)