import { createAsyncThunk } from "@reduxjs/toolkit";

const addFavorite = createAsyncThunk('add', async (favoriteId) => {
    const res = await fetch('http://localhost:3000/api/user/addFav/64f35de166f704f17ee5e759',
        {
            method: 'PUT',
            body: JSON.stringify({
                favorite: favoriteId
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }
    )
    const data = await res.json()
    console.log(data)
    return data.user.favorites
})
const removeFavorite = createAsyncThunk('remove', async (favoriteId) => {
    const res = await fetch('http://localhost:3000/api/user/removeFav/64f35de166f704f17ee5e759',
        {
            method: 'PUT',
            body: JSON.stringify({
                favorite: favoriteId
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }
    )
    const data = await res.json()
    console.log(data)
    return data.user.favorites
})
const getFavorites = createAsyncThunk('get', async () => {
    const res = await fetch('http://localhost:3000/api/user/favs/64f35de166f704f17ee5e759')
    const data = await res.json()
    console.log(data)
    return data.favorites
})

export { addFavorite, removeFavorite, getFavorites }