import { createAction } from "@reduxjs/toolkit";

const ultimaPeliculaVista = createAction('ultimaPeliculaVista', (data) => {
    console.log(data);

    return {
        payload: data
    }
})


export default { ultimaPeliculaVista }
