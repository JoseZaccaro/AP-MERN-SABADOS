import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const addFavorite = createAsyncThunk('add', async ({ fav, userId }) => {
    const res = await fetch('http://localhost:3000/api/user/addFav/' + userId,
        {
            method: 'PUT',
            body: JSON.stringify({
                favorite: fav
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
const removeFavorite = createAsyncThunk('remove', async ({ fav, userId }) => {
    const res = await fetch('http://localhost:3000/api/user/removeFav/' + userId,
        {
            method: 'PUT',
            body: JSON.stringify({
                favorite: fav
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
const getFavorites = createAsyncThunk('get', async ({ userId }) => {
    const res = await fetch('http://localhost:3000/api/user/favs/' + userId)
    const data = await res.json()
    console.log(data)
    return data.favorites
})

const register = createAsyncThunk('register', async (data) => {
    const res = await axios.post('http://localhost:3000/api/auth/register', data)
    // const data = await res.json()
    console.log(res.data);
    return "up"
})
const signin = createAsyncThunk('signin', async (data) => {
    const res = await axios.post('http://localhost:3000/api/auth/signin', data)
    // const data = await res.json()
    console.log(res.data);
    // console.log(data)
    return res.data.response
})


export { addFavorite, removeFavorite, getFavorites, register, signin }