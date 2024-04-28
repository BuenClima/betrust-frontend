import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type FilterType = 'filterTips' | 'filterTipsters'

export type ModalType = FilterType | 'tipDetails' | 'null' | 'sort' | 'createTip'

/**
 * @description Modal State
 */
export type ModalState = {
  show: boolean
  type: ModalType
}

/**
 * @description Modal Initial State
 */
export const initialState: ModalState = {
  show: false,
  type: 'null'
}

/**
 * @description Show Action
 * @param state - Modal state
 * @param action - Payload action
 */
export const showAction = (state: ModalState, action: PayloadAction<ModalType>) => {
  state.show = true
  state.type = action.payload
}

/**
 * @description Hide Action
 * @param state - Modal state
 */
export const hideAction = (state: ModalState) => {
  state.show = false
  state.type = 'null'
}

/**
 * @description Modal Slice
 */
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: showAction,
    hide: hideAction
  }
})

export const { show, hide } = modalSlice.actions
export default modalSlice.reducer
