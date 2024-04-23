import { useEffect } from 'react'
import { useSignOut } from 'react-auth-kit'

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

  return <></>
}

export default SignOut
