import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/**
 * @description Loading State
 */
type LoadingState = {
  isLoading: boolean
  message: string
}

/**
 * @description Loading Initial State
 */
const initialState: LoadingState = {
  isLoading: false,
  message: ''
}

/**
 * @description Loading Slice
 */
const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    /**
     * @description Show loading
     * @param state - Loading state
     * @param action - Payload action
     */
    show: (state, action: PayloadAction<string>) => {
      state.isLoading = true
      state.message = action.payload
    },

    /**
     * @description Hide loading
     * @param state - Loading state
     */
    hide: (state) => {
      state.isLoading = false
      state.message = ''
    }
  }
})

export const { show, hide } = loadingSlice.actions
export default loadingSlice.reducer
