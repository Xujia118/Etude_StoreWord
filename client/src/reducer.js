import { ACTIONS, LOGIN_STATUS } from "./constants"

export const initialState = {
    loginStatus: LOGIN_STATUS.NOT_LOGGED_IN,
    username: "",
    word: "",
    isLoading: false,
    error: "",
}

export function reducer(state, action) {
    switch(action.type) {
        
        case ACTIONS.LOG_IN:
            return {
                ...state,
                loginStatus: LOGIN_STATUS.IS_LOGGED_IN,
                username: action.username,
                isLoading: true,
            }
        case ACTIONS.LOG_OUT:
            return {
                ...state,
                loginStatus: LOGIN_STATUS.NOT_LOGGED_IN,
                username: "",
                isLoading: false,
            }
        case ACTIONS.IS_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        

        default:
            return state;
    }
}

export default reducer;