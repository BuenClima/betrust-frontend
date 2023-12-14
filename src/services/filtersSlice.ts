import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dayjs } from 'dayjs'

import { SelectValueProps } from '@/types'

/**
 * @description Filters State
 */
type FiltersState = {
  active: boolean
  filters: {
    date?: Dayjs | null
    sport?: SelectValueProps[]
    league?: SelectValueProps[]
    picks?: number
    yield?: number
    profit?: number
    winRate?: number
    status?: SelectValueProps[]
  }
}

/**
 * @description Filters Initial State
 */
const initialState: FiltersState = {
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

/**
 * @description Filters Slice
 */
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    /**
     * @description Show Filters
     * @param state - Filters state
     * @param action - Payload action
     */
    filter: (state, action: PayloadAction<FiltersState>) => {
      state.active = true
      state.filters = action.payload.filters
    },

    /**
     * @description Reset Filters
     * @param state - Filters state
     */
    reset: (state) => {
      state.active = false
      state.filters = initialState.filters
    }
  }
})

export const { filter, reset } = filtersSlice.actions
export default filtersSlice.reducer
