import { describe, expect, it } from 'vitest'

import { hideAction, initialState, showAction } from './loadingSlice'

/**
 * @description loadingSlice unit tests
 */
describe('loadingSlice', () => {
  describe('showAction', () => {
    /**
     * @description should set isLoading to true and message to action.payload
     */
    it('should set isLoading to true and message to action.payload', () => {
      // Arrange
      const state = {
        isLoading: false,
        message: ''
      }
      const action = {
        type: 'show',
        payload: 'Loading...'
      }

      // Act
      showAction(state, action)

      // Assert
      expect(state.isLoading).toBe(true)
      expect(state.message).toBe(action.payload)
    })
  })

  describe('hideAction', () => {
    /**
     * @description should set isLoading to false and message to ''
     */
    it("should set isLoading to false and message to ''", () => {
      // Arrange
      const state = {
        isLoading: true,
        message: 'Loading...'
      }

      // Act
      hideAction(state)

      // Assert
      expect(state.isLoading).toBe(initialState.isLoading)
      expect(state.message).toBe(initialState.message)
    })
  })
})
