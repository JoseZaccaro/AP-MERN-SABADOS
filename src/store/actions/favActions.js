import { createAction } from "@reduxjs/toolkit";

const obtenerFavoritos = createAction('obtenerFavoritos', (data) => {

    return {
        payload: data
    }
})

const quitarFavoritos = createAction('quitarFavoritos', (_id) => {

    return {
        payload: _id
    }
})

const agregarFavoritos = createAction('agregarFavoritos', (stream) => {
    let streamObj = { ...stream }
    streamObj.faved_date = new Date().toLocaleDateString()

    return {
        payload: streamObj
    }
})


export default { agregarFavoritos, quitarFavoritos, obtenerFavoritos }
