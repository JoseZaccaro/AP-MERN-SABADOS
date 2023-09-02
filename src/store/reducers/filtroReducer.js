import { createReducer } from "@reduxjs/toolkit";
import filtroAction from "../actions/filtroAction";

const initialState = {
    series: [],
    allSeries: [],
    movies: [],
    allMovies: []
}
const filtroReducer = createReducer(initialState,
    (builder) => builder
        .addCase(filtroAction.filtrar, (state, action) => {

            return {
                ...state,
                series: action.payload
            }
        })
        .addCase(filtroAction.obtenerSeries, (state, action) => {

            return {
                ...state,
                series: action.payload,
                allSeries: action.payload
            }
        })
        .addCase(filtroAction.filtrarMovies, (state, action) => {

            return {
                ...state,
                movies: action.payload
            }
        })
        .addCase(filtroAction.obtenerMovies, (state, action) => {

            return {
                ...state,
                movies: action.payload,
                allMovies: action.payload
            }
        })
)

export default filtroReducer