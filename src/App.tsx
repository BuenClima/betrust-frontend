import './index.css'

import { lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { AppProvider } from '@/providers/AppProvider'

import PrivateRoute from './components/PrivateRoute/PrivateRoute'

const List = lazy(() => import('@/features/List/pages/List'))
const Auth = lazy(() => import('@/features/Auth/pages/Auth'))
const Account = lazy(() => import('@/features/Account/pages/Account'))
const Home = lazy(() => import('@/features/Home/pages/Home'))

/**
 * @description App component
 * @returns {JSX.Element} App component
 */
function App(): JSX.Element {
  return (
    <AppProvider>
      <div style={{ height: '100vh', width: '100vw' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/auth/signin" element={<Auth />} />

            <Route
              path="/:resource"
              element={
                <PrivateRoute>
                  <List />
                </PrivateRoute>
              }
            />

            <Route
              path="/tipsters/:id"
              element={
                <PrivateRoute>
                  <Account />
                </PrivateRoute>
              }
            />

            <Route
              path="/account"
              element={
                <PrivateRoute>
                  <Account self />
                </PrivateRoute>
              }
            />

            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />

            <Route path="*" element={<Navigate to={'/'} replace />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  )
}

export default App
