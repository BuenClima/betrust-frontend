import 'dayjs/locale/es'

import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { SnackbarProvider } from 'notistack'
import PropTypes from 'prop-types'
import React from 'react'
import { Suspense } from 'react'
import { AuthProvider } from 'react-auth-kit'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'

import { RootState, setupStore } from '@/app/store'
import { theme } from '@/app/theme'
import { Fallback } from '@/components/Fallback/Fallback'

/**
 * @description AppProviderProps type
 * @property {React.ReactNode | React.ReactNode[]} children - children
 * @property {Partial<RootState>} state - state
 */
type AppProviderProps = {
  children: React.ReactNode | React.ReactNode[]
  state?: Partial<RootState>
}

/**
 * @description AppProvider component
 * @param {React.ReactNode | React.ReactNode[]} children - children
 * @returns {JSX.Element} AppProvider component
 */
export const AppProvider = (props: AppProviderProps): JSX.Element => {
  return (
    <HelmetProvider>
      <Provider store={setupStore(props?.state)}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'es'}>
          <ThemeProvider theme={theme}>
            <Suspense fallback={<Fallback />}>
              <SnackbarProvider maxSnack={3}>
                <AuthProvider authType="localstorage" authName="auth">
                  <CssBaseline />
                  <div style={{ height: '100vh', width: '100vw' }}>{props.children}</div>
                </AuthProvider>
              </SnackbarProvider>
            </Suspense>
          </ThemeProvider>
        </LocalizationProvider>
      </Provider>
    </HelmetProvider>
  )
}

/**
 * @description AppProvider props types
 * @property {React.ReactNode | React.ReactNode[]} children - children
 */
AppProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)])
    .isRequired,
  state: PropTypes.object
}

export default AppProvider
