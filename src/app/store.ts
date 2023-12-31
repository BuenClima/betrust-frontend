import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import authSlice from '@/features/Auth/services/authSlice'
import filtersSlice from '@/services/filtersSlice'
import loadingSlice from '@/services/loadingSlice'
import modalSlice from '@/services/modalSlice'

/**
 * @description Initialize Redux store
 */
export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    modal: modalSlice,
    filters: filtersSlice,
    auth: authSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})

/**
 * @description Define RootState type
 */
export type RootState = ReturnType<typeof store.getState>

/**
 * @description Define AppDispatch type
 */
export type AppDispatch = typeof store.dispatch

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
 * @description Export store
 */
export default store
