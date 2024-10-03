// here all our reducer
// this is theme reducer
import { DARK, LIGHT } from "../theme/actionType"

const initialState = {
    theme: 'light',
}
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LIGHT:
            return { theme: action.payload }
        case DARK:
            return { theme: action.payload }  // Update theme to 'dark' when DARK action is dispatched
        default:
            return state;
    }
}