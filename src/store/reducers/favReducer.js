import { createReducer } from "@reduxjs/toolkit";
import { addFavorite, getFavorites, removeFavorite } from "../actions/favActions";
const initialState = { favorites: [] }

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
)

export default favReducer