import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from '@reduxjs/toolkit'
import email from './slices/email'
import phishing from './slices/phishing'
import auth from './slices/auth/index'
import reportReducer from './slices/report'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
}
const rootReducer = combineReducers({
    email,
    phishing,
    auth,
    reportReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export type RootState = ReturnType<typeof rootReducer>

export default persistedReducer
