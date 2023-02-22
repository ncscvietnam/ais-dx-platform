import {
    createAsyncThunk,
    createEntityAdapter,
    createSlice,
} from '@reduxjs/toolkit'
import API from '../../../api'
import { DataLeakSearchInput } from '../../../types/index'
export const getUrlData = createAsyncThunk<DataLeakSearchInput, string>(
    `check-data-leak/url`,
    async (email) => {
        const response: any = await API.get(`check-data-leak/${email}`)
        return response
    }
)

export type EmailDetail = {
    Name: string
    Title: string
    Domain: string
    BreachDate: string
    AddedDate: Date
    ModifiedDate: Date
    PwnCount: number
    Description: string
    LogoPath: string
    DataClasses: string[]
    IsVerified: boolean
    IsFabricated: boolean
    IsSensitive: boolean
    IsRetired: boolean
    IsSpamList: boolean
    IsMalware: boolean
    total: number
    detail: never[]
    result: string
    dataLeakInput: string
}
type EmailResolverState = {
    loading: boolean
}

// TODO: Replace any with proper type
const emailAdapter = createEntityAdapter<any>({
    selectId: ({ Email }) => Email,
    sortComparer: (a, b) => a.Email.localeCompare(b.Email),
})

const initialState: EmailResolverState = {
    loading: false,
}

const emailSlice = createSlice({
    name: 'urls',
    initialState: emailAdapter.getInitialState(initialState),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUrlData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getUrlData.fulfilled, (state, { payload }) => {
            state.loading = false
            emailAdapter.setAll(state, payload)
        })
        builder.addCase(getUrlData.rejected, (state) => {
            state.loading = false
        })
    },
})

const breachDomainSelectors = emailAdapter.getSelectors<any>(
    (state) => state.email
)

export const getAllDomainBreach = (store: any) => {
    return () => breachDomainSelectors.selectAll(store.getState())
}

const { reducer: emailReducer } = emailSlice
export default emailReducer
