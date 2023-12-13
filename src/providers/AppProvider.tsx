import 'dayjs/locale/es'

import { ThemeProvider } from '@emotion/react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { SnackbarProvider } from 'notistack'
import React from 'react'
import { Suspense } from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'

import store from '@/app/store'
import { theme } from '@/app/theme'
import { Fallback } from '@/components/Loading/Fallback'
type AppProviderProps = {
  children: React.ReactNode | React.ReactNode[]
}

export const AppProvider = ({ children }: AppProviderProps): JSX.Element => {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'es'}>
          <ThemeProvider theme={theme}>
            <Suspense fallback={<Fallback />}>
              <SnackbarProvider maxSnack={3}>{children}</SnackbarProvider>
            </Suspense>
          </ThemeProvider>
        </LocalizationProvider>
      </Provider>
    </HelmetProvider>
  )
}
