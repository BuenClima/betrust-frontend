import RequireAuth from '@auth-kit/react-router/RequireAuth'
import { lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

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
            <RequireAuth fallbackPath="/auth/signin">
              <List />
            </RequireAuth>
          }
        />

        <Route
          path="/tipsters/:id"
          element={
            <RequireAuth fallbackPath="/auth/signin">
              <Account self={false} />
            </RequireAuth>
          }
        />

        <Route
          path="/account"
          element={
            <RequireAuth fallbackPath="/auth/signin">
              <Account self={true} />
            </RequireAuth>
          }
        />

        <Route
          path="/signout"
          element={
            <RequireAuth fallbackPath="/auth/signin">
              <SignOut />
            </RequireAuth>
          }
        />

        <Route
          path="/"
          element={
            <RequireAuth fallbackPath="/auth/signin">
              <Home />
            </RequireAuth>
          }
        />

        <Route path="*" element={<Navigate to={'/'} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesProvider
