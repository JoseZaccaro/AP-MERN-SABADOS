import { configureStore } from "@reduxjs/toolkit";
import { seriesReducer } from './reducers/seriesReducer';
import { peliculasReducer } from "./reducers/peliculasReducer";
import { favReducer } from "./reducers/favReducer";
import authReducer from './reducers/authReducer';

const store = configureStore({
    reducer: {
        series: seriesReducer,
        peliculas: peliculasReducer,
        favReducer,
        authReducer
    },
})

export default store