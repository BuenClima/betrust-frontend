import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import filtersSlice from '@/services/filtersSlice'
import loadingSlice from '@/services/loadingSlice'
import modalSlice from '@/services/modalSlice'

/**
 * @description Combine reducers
 */
const rootReducer = combineReducers({
  loading: loadingSlice,
  modal: modalSlice,
  filters: filtersSlice
})

/**
 * @description Initialize Redux store
 */
export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    preloadedState
  })
}

/**
 * @description Initialize store with preloaded state
 */
export type AppStore = ReturnType<typeof setupStore>

/**
 * @description Define RootState type
 */
export type RootState = ReturnType<typeof rootReducer>

/**
 * @description Define AppDispatch type
 */
export type AppDispatch = AppStore['dispatch']

/**
 * @description Define DispatchFunc type
 */
type DispatchFunc = () => AppDispatch

/**
 * @description Export custom hooks
 */
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

/**
 * @description Export setupStore function
 */
export default setupStore
