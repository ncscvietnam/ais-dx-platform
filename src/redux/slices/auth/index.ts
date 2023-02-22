import napAPI from '../../../../src/api/nationalAntiPhishingApi'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthType } from '../../../types'

export interface authState {
    loggedIn?: boolean
    loading?: boolean
    token?: string | null
    anonymous: boolean
}

const initialState: authState = {
    loggedIn: false,
    loading: false,
    token: null,
    anonymous: false,
}

export const getTokenToSystem = createAsyncThunk<AuthType, string>(
    `accessToken`,
    async (accessToken) => {
        const response: any = await napAPI.post('/google/authentication', {
            accessToken,
        })
        return response
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLoggedIn: (state, action: PayloadAction<boolean>) => {
            state.loggedIn = action.payload
        },
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload
        },
        setAnonymous: (state, action: PayloadAction<boolean>) => {
            state.anonymous = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTokenToSystem.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getTokenToSystem.fulfilled, (state) => {
            state.loading = false
            // ToastMessage.success('Gửi token thành công')
        })
        builder.addCase(getTokenToSystem.rejected, (state) => {
            state.loading = false
            // ToastMessage.error('Có lỗi xảy ra')
        })
    },
})

export const { setLoggedIn, setToken, setAnonymous } = authSlice.actions

export default authSlice.reducer
