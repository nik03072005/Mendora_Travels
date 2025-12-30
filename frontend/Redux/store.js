import {configureStore} from '@reduxjs/toolkit';
import destinationReducer from './destinationSlice.js'
import currencySLice from './currencySLice.js'
export const store = configureStore(
    {
        reducer:{
            destinations:destinationReducer,
            currency:currencySLice
        }
    }
)