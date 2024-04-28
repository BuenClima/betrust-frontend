import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dayjs } from 'dayjs'

import { SelectValueProps } from '@/types'

/**
 * @description Filters State
 */
export type FiltersState = {
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
export const initialState: FiltersState = {
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
 * @description Filter Action
 * @param state - Filters state
 * @param action - Payload action
 */
export const filterAction = (
  state: FiltersState,
  action: PayloadAction<FiltersState>
) => {
  state.active = true
  state.filters = action.payload.filters
}

/**
 * @description Reset Action
 * @param state - Filters state
 */
export const resetAction = (state: FiltersState) => {
  state.active = false
  state.filters = initialState.filters
}

/**
 * @description Filters Slice
 */
const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filter: filterAction,
    reset: resetAction
  }
})

export const { filter, reset } = filtersSlice.actions
export default filtersSlice.reducer
