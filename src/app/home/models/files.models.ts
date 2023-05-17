export interface StorageFile {
    id: number
    name: string
    mime_type: string
    size: number
    system_path: number
    owner: number
    hash: string
    public: boolean
    folder_id: number
    created_at: string
}

export interface StorageFolder {
    id: number
    name: string
    color: string
    owner: number
    created_at: string
}
