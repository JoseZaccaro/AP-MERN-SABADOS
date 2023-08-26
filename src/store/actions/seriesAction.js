import { createAction } from "@reduxjs/toolkit";

const ultimaSerieVista = createAction('ultimaSerieVista', (data) => {
    console.log(data);

    return {
        payload: data
    }
})


export default { ultimaSerieVista }
