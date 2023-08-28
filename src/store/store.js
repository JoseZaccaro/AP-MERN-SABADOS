import { configureStore } from "@reduxjs/toolkit";
import { seriesReducer } from './reducers/seriesReducer';
import { peliculasReducer } from "./reducers/peliculasReducer";

const store = configureStore({
    reducer: {
        series: seriesReducer,
        peliculas: peliculasReducer
    },
})

export default store