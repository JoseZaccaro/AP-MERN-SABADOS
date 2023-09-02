import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

const filtrar = createAction('filtrar', (infoInputs) => {

    return {
        payload: infoInputs
    }
})

const obtenerSeries = createAsyncThunk('obtenerSeries', async () => {
    // Pending 
    // Fulfilled 
    // Rejected 

    const res = await fetch('http://localhost:3000/api/series')
    const { data } = await res.json()
    console.log(data);

    return data
})


const filtrarMovies = createAction('filtrarMovies', (moviesFiltradas) => {

    return {
        payload: moviesFiltradas
    }
})

const obtenerMovies = createAction('obtenerMovies', (movies) => {

    return {
        payload: movies
    }
})



export default { filtrar, filtrarMovies, obtenerMovies, obtenerSeries }