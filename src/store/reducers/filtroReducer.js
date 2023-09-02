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
            console.log(action.payload)
            // console.log])
            const { search, checks } = action.payload

            const filtered = state.allSeries.filter(serie => serie.name.toLowerCase().trim().includes(search) &&
                (checks.length !== 0 ? checks.includes(serie.genre) : true)
            )
            console.log(filtered);
            return {
                ...state,
                series: filtered
            }
        })
        .addCase(filtroAction.obtenerSeries.fulfilled, (state, action) => {
            console.log(action)
            return {
                ...state,
                series: action.payload,
                allSeries: action.payload
            }
        })
        .addCase(filtroAction.filtrarMovies, (state, action) => {
            const { search, checks } = action.payload

            const filtered = state.allMovies.filter(movie => movie.name.toLowerCase().trim().includes(search) &&
                (checks.length !== 0 ? checks.includes(movie.genre) : true)
            )

            return {
                ...state,
                movies: filtered
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