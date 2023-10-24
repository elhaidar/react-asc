/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    properties: [],
} as any

const propertiesSlice = createSlice({
    name: 'properties',
    initialState,
    reducers:{
        setProperties: (state, action) => {
            state.properties = action.payload
        },
        removeFromProperties: (state, action) => {
            return {
              ...state,
              properties: state.properties.filter((item: any) => item.id !== action.payload.id),
            };
          },
    },
});

export const { setProperties, removeFromProperties } = propertiesSlice.actions

export default propertiesSlice.reducer;

