export type PhishingSearchInput = {
    phisingInput: string
}

export type DataLeakSearchInput = {
    data: {
        total: number
        detail: []
        result: string
    }
}
export type AuthType = {
    data: any
    accessToken: string
}
export interface ReportInput {
    indicator: string
    evidence: string
    category: string
    anonymous: boolean
}

export interface Option {
    id: string
    label: string
}

export interface GetDataPhishing {
    id: string
    name: string
    description: string
    createdAt: string
    updatedAt: string
    user: User
}
export interface User {
    id: string
    name: string
    role: string
}
