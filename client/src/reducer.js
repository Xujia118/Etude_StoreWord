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
    }
}

export default reducer;