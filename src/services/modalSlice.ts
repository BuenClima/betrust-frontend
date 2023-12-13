import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type FilterType = 'filterBets' | 'filterTipsters'

export type ModalType = FilterType | 'betDetails' | 'null' | 'sort'

/**
 * @description Modal State
 */
type ModalState = {
  show: boolean
  type: ModalType
}

/**
 * @description Modal Initial State
 */
const initialState: ModalState = {
  show: false,
  type: 'null'
}

/**
 * @description Modal Slice
 */
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    /**
     * @description Show Modal
     * @param state - Modal state
     * @param action - Payload action
     */
    show: (state, action: PayloadAction<ModalType>) => {
      state.show = true
      state.type = action.payload
    },

    /**
     * @description Hide Modal
     * @param state - Modal state
     */
    hide: (state) => {
      state.show = false
      state.type = 'null'
    }
  }
})

export const { show, hide } = modalSlice.actions
export default modalSlice.reducer
