import { configureStore } from "@reduxjs/toolkit";
import filtroReducer from './reducers/filtroReducer';

const store = configureStore({
    reducer: {
        filtro: filtroReducer
    }
})

export default store