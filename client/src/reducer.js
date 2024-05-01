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
        case ACTIONS.DISPLAY_WORD:
            return {
                ...state,
                word: action.payload,
            }
        case ACTIONS.UPDATE_WORD:
            return {
                ...state,
                word: action.payload,
            }

        default:
            return state;
    }
}

export default reducer;