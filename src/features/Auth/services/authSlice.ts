import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthStateUserObject } from 'react-auth-kit/dist/types'

/**
 * @description Auth State
 */
export type AuthState = {
  token: string | null
  user: AuthStateUserObject | null
}

/**
 * @description Auth Initial State
 */
const initialState: AuthState = {
  token: null,
  user: null
}

/**
 * @description Sign In Action
 * @param state - Auth state
 * @param action - Payload action
 * @returns {void}
 */
export const signInAction = (
  state: AuthState,
  action: PayloadAction<AuthState>
): void => {
  state.token = action.payload.token
  state.user = action.payload.user
}

/**
 * @description Sign Out Action
 * @param state - Auth state
 * @returns {void}
 */
export const signOutAction = (state: AuthState): void => {
  state.token = null
  state.user = null
}

/**
 * @description Auth Slice
 */
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    /**
     * @description Show Auth
     * @param state - Auth state
     * @param action - Payload action
     */
    signIn: signInAction,

    /**
     * @description Reset Auth
     * @param state - Auth state
     */
    signOut: signOutAction
  }
})

export const { signIn, signOut } = authSlice.actions
export default authSlice.reducer
