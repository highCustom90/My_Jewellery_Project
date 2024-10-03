import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType"

const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.payload
            }
        case LOGIN_FAILED:
            return { ...state, isError: true, isLoading: false }
        default:
            return state;
    }
}