import { describe, expect, it } from 'vitest'

import { filterAction, initialState, resetAction } from './filtersSlice'

/**
 * @description filtersSlice unit tests
 */
describe('filtersSlice', () => {
  describe('filterAction', () => {
    /**
     * @description should set active to true and filters to action.payload.filters
     */
    it('should set active to true and filters to action.payload.filters', () => {
      // Arrange
      const state = {
        active: false,
        filters: {
          date: null,
          sport: [],
          league: [],
          picks: 0,
          yield: 0,
          profit: 0,
          winRate: 0,
          status: []
        }
      }
      const action = {
        type: 'filter',
        payload: {
          active: true,
          filters: {
            date: null,
            sport: [],
            league: [],
            picks: 0,
            yield: 0,
            profit: 0,
            winRate: 0,
            status: []
          }
        }
      }

      // Act
      filterAction(state, action)

      // Assert
      expect(state.active).toBe(true)
      expect(state.filters).toEqual(action.payload.filters)
    })
  })

  describe('resetAction', () => {
    /**
     * @description should set active to false and filters to initialState.filters
     */
    it('should set active to false and filters to initialState.filters', () => {
      // Arrange
      const state = {
        active: true,
        filters: {
          date: null,
          sport: [],
          league: [],
          picks: 0,
          yield: 0,
          profit: 0,
          winRate: 0,
          status: []
        }
      }

      // Act
      resetAction(state)

      // Assert
      expect(state.active).toBe(initialState.active)
      expect(state.filters).toEqual(initialState.filters)
    })
  })
})
