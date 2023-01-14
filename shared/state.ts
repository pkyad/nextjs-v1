import { IAppState } from "./types";


const initialState : IAppState = {
    isLoggedIn : false,
    user : null,
    errors : []
}

export default initialState;