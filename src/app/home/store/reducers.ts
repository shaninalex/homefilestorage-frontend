import { FilesState, filesReducer } from "./files/files.reducer";
import { UserState, userReducer } from "./user/user.reducer";


export interface AppState {
    user: UserState
    files: FilesState
}

export const reducers = {
    user: userReducer,
    files: filesReducer
};