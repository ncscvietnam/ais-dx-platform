import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import napAPI from '../../../api/nationalAntiPhishingApi'

export interface PhishingState {
    indicator: string
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    score: number | null
}

const initialState: PhishingState = {
    indicator: '',
    loading: 'idle',
    score: null,
}

export const getPhishingScore = createAsyncThunk(
    'blocked-phishing/search',
    async (indicator: string) => {
        const res = await napAPI.get('blocked/search', {
            params: {
                input: indicator,
            },
        })
        return res.data
    }
)

export const phishingSlice = createSlice({
    name: 'phishing',
    initialState,
    reducers: {
        setPhishingIndicator: (state, action: PayloadAction<string>) => {
            state.indicator = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPhishingScore.fulfilled, (state, action) => {
            state.loading = 'succeeded'
            state.indicator = action.meta.arg
            state.score = action.payload.score
        })
        builder.addCase(getPhishingScore.rejected, (state) => {
            state.loading = 'failed'
            // ToastMessage.success('Có lỗi xảy ra')
        })
        builder.addCase(getPhishingScore.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
                state.indicator = action.meta.arg
            }
        })
    },
})

export const { setPhishingIndicator } = phishingSlice.actions

export default phishingSlice.reducer
