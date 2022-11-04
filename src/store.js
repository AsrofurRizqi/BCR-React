import { configureStore } from "@reduxjs/toolkit";
import dataStore from "./reducers/cars"

const store = configureStore({
    reducer: {
        datas: dataStore,
    }
})

export default store