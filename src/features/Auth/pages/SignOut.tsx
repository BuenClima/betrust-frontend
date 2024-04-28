import { useEffect } from 'react'
import useSignOut from 'react-auth-kit/hooks/useSignOut'
import { Navigate } from 'react-router-dom'

/**
 * @description SignOut page
 * @returns {JSX.Element} SignOut page
 */
export const SignOut = (): JSX.Element => {
  const signOut = useSignOut()

  /**
   * @description Sign out user on mount
   */
  useEffect(() => {
    signOut()
  }, [signOut])

  return <Navigate to="/auth/signin" />
}

export default SignOut
