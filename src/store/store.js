import { configureStore } from "@reduxjs/toolkit";
import filtroReducer from './reducers/filtroReducer';
import favReducer from './reducers/favReducer';

const store = configureStore({
    reducer: {
        filtro: filtroReducer,
        favs: favReducer
    }
})

export default store