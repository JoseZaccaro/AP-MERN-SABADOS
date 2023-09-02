import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { API } from './../../utils/axios';

const ultimaSerieVista = createAction('ultimaSerieVista', (data) => {
    // console.log(data);

    return {
        payload: data
    }
})

const filtrar = createAction('filtrar', (search) => {
    // console.log(search);

    return {
        payload: search
    }
})

const obtenerSeries = createAsyncThunk('obtenerSeries', async (data) => {
    // console.log(data);
    const res = await API.get('/series')
    return {
        series: res.data.series
    }
})


export default { ultimaSerieVista, obtenerSeries, filtrar }
