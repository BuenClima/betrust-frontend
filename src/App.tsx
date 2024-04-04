import './index.css'

import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import PrivateRoute from '@/components/PrivateRoute/PrivateRoute'
import { AppProvider } from '@/providers/AppProvider'

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
              <Account self={false} />
            </PrivateRoute>
          }
        />

        <Route
          path="/account"
          element={
            <PrivateRoute>
              <Account self={true} />
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
    </AppProvider>
  )
}

export default App
