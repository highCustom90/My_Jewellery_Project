
import { DARK, LIGHT } from "./actionType"

export const ToggleDark = (dispatch) => {
    return dispatch({ type: LIGHT, payload: "dark" })
}
export const ToggleLight = (dispatch) => {
    return dispatch({ type: DARK, payload: "light" })
}