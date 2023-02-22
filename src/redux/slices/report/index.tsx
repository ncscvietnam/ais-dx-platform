import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import napAPI from '../../../api/nationalAntiPhishingApi'
import ToastMessage from '../../../common/ToastMessage'
import { FieldValues } from 'react-hook-form'

export interface ReportState {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    data: FieldValues
}

export interface ReportResponseState {
    indicator: string
    category: string
    indicatorType: string
    evidence: string
    user: any
    screenShot: string
    severity: any
    note: any
    poc: any
    id: string
    status: string
    createdAt: string
    updatedAt: string
}

const initialState: ReportState = {
    loading: 'idle',
    data: {},
}

export const postReport = createAsyncThunk(
    'report',
    async (req: FieldValues) => {
        const res: ReportResponseState = await napAPI
            .post('reports', req)
            .then((res) => res.data)
        return res
    }
)

const reportSlice = createSlice({
    name: 'report',
    initialState: initialState,
    reducers: {
        setFormData: (state, action: PayloadAction<FieldValues>) => {
            state.data = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(postReport.fulfilled, (state) => {
            state.loading = 'succeeded'
            ToastMessage.success('Thành công')
        })
        builder.addCase(postReport.rejected, (state) => {
            state.loading = 'failed'
            ToastMessage.error('Có lỗi xảy ra')
        })
        builder.addCase(postReport.pending, (state) => {
            if (state.loading === 'idle') {
                state.loading = 'pending'
            }
        })
    },
})

const { reducer: reportReducer } = reportSlice
export default reportReducer
