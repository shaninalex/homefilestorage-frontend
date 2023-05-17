export interface LoginPayload {
    email: string
    password: string
}

export interface LoginSuccessPayload {
    access_token: string
    refresh_token: string
    exp: number
}

export interface RegisterPayload {
    username: string
    email: string
    password: string
    password_confirm: string
}

export interface RegisterSuccessPayload {
    status: boolean
}
