export interface User {
    id: number
    email: string
    username: string
}

export interface Identity {
    email: string
    name: IdentityName
}

export interface IdentityName {
    first: string
    last: string
}
