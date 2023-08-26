import { configureStore } from "@reduxjs/toolkit";
import { seriesReducer } from './reducers/seriesReducer';

const store = configureStore({
    reducer: {
        series: seriesReducer
    },
})

export default store