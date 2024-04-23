import { lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import PrivateRoute from '@/components/PrivateRoute/PrivateRoute'

const List = lazy(() => import('@/features/List/pages/List'))
const Auth = lazy(() => import('@/features/Auth/pages/Auth'))
const Account = lazy(() => import('@/features/Account/pages/Account'))
const Home = lazy(() => import('@/features/Home/pages/Home'))
const SignOut = lazy(() => import('@/features/Auth/pages/SignOut'))

/**
 * @description RoutesProvider component
 * @returns {JSX.Element} RoutesProvider component
 */
export const RoutesProvider = (): JSX.Element => {
  return (
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
          path="/signout"
          element={
            <PrivateRoute>
              <SignOut />
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
  )
}

export default RoutesProvider
