import { createReducer, on } from "@ngrx/store"
import { isAuthClicked } from "./auth.action"

export const isClicked = false

export const authReducer = createReducer(
    isClicked,
    on(isAuthClicked,(state)=> true)

)