import { createReducer } from "@reduxjs/toolkit";
import { addFavorite, getFavorites, register, removeFavorite, signin } from "../actions/favActions";
const initialState = {
    favorites: [],
    user: {}
}

const favReducer = createReducer(initialState,
    (builder) =>
        builder
            .addCase(addFavorite.fulfilled, (state, action) => {
                return {
                    ...state,
                    favorites: action.payload
                }
            })
            .addCase(removeFavorite.fulfilled, (state, action) => {
                return {
                    ...state,
                    favorites: action.payload
                }
            })
            .addCase(getFavorites.fulfilled, (state, action) => {
                return {
                    ...state,
                    favorites: action.payload
                }
            })
            // .addCase(register.fulfilled, (state, action) => {
            //     return {
            //         ...state,
            //         user: action.payload
            //     }
            // })
            .addCase(signin.fulfilled, (state, action) => {
                return {
                    ...state,
                    user: action.payload,
                    favorites: action.payload.favorites
                }
            })
)

export default favReducer