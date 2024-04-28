import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/**
 * @description Loading State
 */
export type LoadingState = {
  isLoading: boolean
  message: string
}

/**
 * @description Loading Initial State
 */
export const initialState: LoadingState = {
  isLoading: false,
  message: ''
}

/**
 * @description Show Action
 * @param state - Loading state
 * @param action - Payload action
 */
export const showAction = (state: LoadingState, action: PayloadAction<string>) => {
  state.isLoading = true
  state.message = action.payload
}

/**
 * @description Hide Action
 * @param state - Loading state
 */
export const hideAction = (state: LoadingState) => {
  state.isLoading = false
  state.message = ''
}

/**
 * @description Loading Slice
 */
const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    show: showAction,
    hide: hideAction
  }
})

export const { show, hide } = loadingSlice.actions
export default loadingSlice.reducer
