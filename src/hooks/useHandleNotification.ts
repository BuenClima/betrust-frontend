import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { t } from 'i18next'
import { OptionsObject, useSnackbar } from 'notistack'

type UseHandleNotificationReturn = {
  handleError: (error: FetchBaseQueryError | SerializedError | string | null) => void
  handleSuccess: (message: string) => void
  handleWarning: (message: string) => void
  handleInfo: (message: string) => void
}

const baseOptions: OptionsObject<'error' | 'default' | 'info' | 'success' | 'warning'> = {
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'center'
  },
  autoHideDuration: 3000
}

export const useHandleNotification = (): UseHandleNotificationReturn => {
  const { enqueueSnackbar } = useSnackbar()

  const handleError = (
    error: FetchBaseQueryError | SerializedError | string | null
  ): void => {
    const message = typeof error === 'string' ? error : JSON.stringify(error)
    enqueueSnackbar(t(message), {
      variant: 'error',
      ...baseOptions
    })
  }

  const handleSuccess = (message: string): void => {
    enqueueSnackbar(t(message), {
      variant: 'success',
      ...baseOptions
    })
  }

  const handleWarning = (message: string): void => {
    enqueueSnackbar(t(message), {
      variant: 'warning',
      ...baseOptions
    })
  }

  const handleInfo = (message: string): void => {
    enqueueSnackbar(t(message), {
      variant: 'info',
      ...baseOptions
    })
  }

  return {
    handleError,
    handleSuccess,
    handleWarning,
    handleInfo
  }
}
