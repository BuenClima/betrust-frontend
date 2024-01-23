import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { t } from 'i18next'
import { useEffect } from 'react'

import { useAppDispatch } from '../app/store'
import { hide, show } from '../services/loadingSlice'
import { useHandleNotification } from './useHandleNotification'

/**
 * @description Use handle mutation props
 * @property {boolean} isLoading - Is loading.
 * @property {boolean} isSuccess - Is success.
 * @property {boolean} isError - Is error.
 * @property {FetchBaseQueryError | SerializedError | null} error - Error.
 * @property {() => void} onSuccess - On success.
 * @property {() => void} onError - On error.
 * @property {string} success - Success.
 * @property {string} error - Error.
 */
type UseHandleMutationProps = {
  state: {
    isLoading: boolean
    isSuccess: boolean
    isError: boolean
    error: FetchBaseQueryError | SerializedError | null
  }
  callbacks: {
    onSuccess?: () => void
    onError?: () => void
  }
  messages: {
    success?: string
    error?: string
    loading?: string
  }
}

/**
 * @description Handle mutation hook
 * @param {UseHandleMutationProps} props - Props
 * @returns {void} Void
 */
export const useHandleMutation = ({
  state,
  callbacks,
  messages
}: UseHandleMutationProps): void => {
  const dispatch = useAppDispatch()
  const { handleError, handleSuccess } = useHandleNotification()

  const loadingMessage = messages?.loading || t('loadingMessage')

  useEffect(() => {
    state.isLoading ? dispatch(show(loadingMessage)) : dispatch(hide())
    if (state.isError) {
      messages?.error && handleError(messages?.error)
      callbacks.onError && callbacks.onError()
    }
    if (state.isSuccess) {
      messages?.success && handleSuccess(messages?.success)
      callbacks.onSuccess && callbacks.onSuccess()
    }
  }, [state.isLoading, state.isSuccess, state.isError, state.error])
}
