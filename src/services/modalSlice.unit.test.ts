import { PayloadAction } from '@reduxjs/toolkit'
import { describe, expect, it } from 'vitest'

import { hideAction, initialState, ModalState, ModalType, showAction } from './modalSlice'

/**
 * @description modalSlice unit tests
 */
describe('modalSlice', () => {
  describe('showAction', () => {
    /**
     * @description should set show to true and type to action.payload
     */
    it('should set show to true and type to action.payload', () => {
      // Arrange
      const state: ModalState = {
        show: false,
        type: 'null'
      }
      const action: PayloadAction<ModalType> = {
        type: 'show',
        payload: 'filterTips'
      }

      // Act
      showAction(state, action)

      // Assert
      expect(state.show).toBe(true)
      expect(state.type).toBe(action.payload)
    })
  })

  describe('hideAction', () => {
    /**
     * @description should set show to false and type to 'null'
     */
    it("should set show to false and type to 'null'", () => {
      // Arrange
      const state: ModalState = {
        show: true,
        type: 'filterTips'
      }

      // Act
      hideAction(state)

      // Assert
      expect(state.show).toBe(initialState.show)
      expect(state.type).toBe(initialState.type)
    })
  })
})
