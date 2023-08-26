import { createReducer } from "@reduxjs/toolkit";
import filtroAction from "../actions/filtroAction";

const initialState = {
    series: [],
    allSeries: []
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
)

export default filtroReducer