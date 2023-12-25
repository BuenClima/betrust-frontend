import PropTypes from 'prop-types'
import { useCallback } from 'react'
import { useAuthHeader, useIsAuthenticated } from 'react-auth-kit'
import { Navigate, useLocation } from 'react-router-dom'

import { signIn, signOut } from '@/features/Auth/services/authSlice'

import { useAppDispatch, useAppSelector } from '../../app/store'

/**
 * Defines the props interface
 *
 * @property {Object} children - The component children.
 */
type PrivateRouteProps = {
  children: JSX.Element
}

/**
 * @description Creates a protected route in a React application.
 * If the user is not authenticated, it redirects them to the login page.
 *
 * @param {PrivateRouteProps} children - The content to be rendered within the private route.
 *
 * @returns {JSX.Element} - The children JSX element if the user is authenticated,
 * or a redirect to the login page if not.
 *
 * @example
 * import { PrivateRoute } from './PrivateRoute'
 * <PrivateRoute>
 *  <p>This is a protected route.</p>
 * </PrivateRoute>
 */
export const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const authToken = useAppSelector((state) => state.auth.token)
  const token = useAuthHeader()
  const dispath = useAppDispatch()
  const isAuthenticated = useIsAuthenticated()
  const location = useLocation()

  /**
   * @description Dispatch authenticated token
   */
  const dispatchAuthenticatedToken = useCallback(() => {
    const user = localStorage.getItem('auth_state')
      ? JSON.parse(localStorage.getItem('auth_state') as string)
      : null

    dispath(
      signIn({
        token: token(),
        user
      })
    )
  }, [authToken])

  /**
   * @description Dispatch unauthenticated token
   */
  const dispatchUnauthenticatedToken = useCallback(() => {
    dispath(signOut())
  }, [authToken])

  /**
   * @description Check if user is authenticated
   */
  if (isAuthenticated()) {
    if (!authToken) dispatchAuthenticatedToken()
    return props.children
  } else dispatchUnauthenticatedToken()

  return <Navigate to={'/auth/signin'} state={{ from: location }} replace />
}

/**
 * Defines the prop types for the component.
 *
 * @property {Object} children - The component children.
 */
PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired
}

export default PrivateRoute
