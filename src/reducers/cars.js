import endpoint from "../http-common.json"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getAsyncData = createAsyncThunk(
    "dataStore/getAsyncData",
    async () => {
        const listCars = await fetch(endpoint.URL)
        return await listCars.json()
    }
)

export const dataStore = createSlice({
    name: "dataStore",
    initialState: {
        cars: [],
        filter: {},
    },
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAsyncData.fulfilled, (state, action) => {
            state.cars = action.payload
        })
    }
})

export const { setFilter } = dataStore.actions
export default dataStore.reducer
  