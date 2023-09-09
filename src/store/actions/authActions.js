import { createAction } from "@reduxjs/toolkit";

const signUp = createAction('signUp', (data) => {

    return {
        payload: data
    }
})

export default { signUp }