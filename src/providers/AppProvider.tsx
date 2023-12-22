import 'dayjs/locale/es'

import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import { Suspense } from 'react'
import AuthProvider from 'react-auth-kit/AuthProvider'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'

import { authStore } from '@/app/authStore'
import store from '@/app/store'
import { theme } from '@/app/theme'
import { Fallback } from '@/components/Loading/Fallback'

/**
 * @description AppProviderProps type
 * @property {React.ReactNode | React.ReactNode[]} children - children
 */
type AppProviderProps = {
  children: React.ReactNode | React.ReactNode[]
}

/**
 * @description AppProvider component
 * @param {React.ReactNode | React.ReactNode[]} children - children
 * @returns {JSX.Element} AppProvider component
 */
export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'es'}>
          <ThemeProvider theme={theme}>
            <Suspense fallback={<Fallback />}>
              <SnackbarProvider maxSnack={3}>
                <AuthProvider store={authStore}>
                  <CssBaseline />
                  {children}
                </AuthProvider>
              </SnackbarProvider>
            </Suspense>
          </ThemeProvider>
        </LocalizationProvider>
      </Provider>
    </HelmetProvider>
  )
}

export default AppProvider
