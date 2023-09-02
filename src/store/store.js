import { configureStore } from "@reduxjs/toolkit";
import { seriesReducer } from './reducers/seriesReducer';
import { peliculasReducer } from "./reducers/peliculasReducer";
import { favReducer } from "./reducers/favReducer";

const store = configureStore({
    reducer: {
        series: seriesReducer,
        peliculas: peliculasReducer,
        favReducer
    },
})

export default store