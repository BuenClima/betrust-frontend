import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthStateUserObject } from 'react-auth-kit/dist/types'

/**
 * @description Auth State
 */
type AuthState = {
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
    signIn: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token
      state.user = action.payload.user
    },

    /**
     * @description Reset Auth
     * @param state - Auth state
     */
    signOut: (state) => {
      state.token = null
      state.user = null
    }
  }
})

export const { signIn, signOut } = authSlice.actions
export default authSlice.reducer
