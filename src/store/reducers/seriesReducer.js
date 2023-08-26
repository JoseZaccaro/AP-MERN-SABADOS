import { createReducer } from "@reduxjs/toolkit";
import seriesAction from "../actions/seriesAction";
const { ultimaSerieVista } = seriesAction
const initialState = {
    ultimasSeries: []
}

export const seriesReducer = createReducer(initialState,
    (builder) =>
        builder.addCase(ultimaSerieVista, (state, action) => {
            console.log(action)
            const ultimos = [...state.ultimasSeries]
            ultimos.unshift(action.payload)
            return {
                ultimasSeries: ultimos
            }
        })

)