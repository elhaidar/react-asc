import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import authSlice from '../slices/authSlice';
import propertiesSlice from '../slices/propertiesSlice';

export function makeStore(){
    return configureStore({
        reducer: {
            auth: authSlice,
            properties: propertiesSlice
        },
    });
}

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;