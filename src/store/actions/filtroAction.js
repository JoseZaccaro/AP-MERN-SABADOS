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



export default { filtrar, obtenerSeries }