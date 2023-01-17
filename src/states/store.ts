import { configureStore } from '@reduxjs/toolkit'
import sample from './sample/sample.reducer'

export const store = configureStore({
    reducer: {
        sample
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch