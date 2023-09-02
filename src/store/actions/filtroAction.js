import { createAction } from "@reduxjs/toolkit";

const filtrar = createAction('filtrar', (seriesFiltradas) => {

    return {
        payload: seriesFiltradas
    }
})

const obtenerSeries = createAction('obtenerSeries', (series) => {

    return {
        payload: series
    }
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