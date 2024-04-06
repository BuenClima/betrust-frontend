import { describe, expect, it } from 'vitest'

import { AuthState, signInAction, signOutAction } from './authSlice'

/**
 * @description AuthSlice unit tests
 */
describe('AuthSlice', async () => {
  /**
   * @description AuthSlice signIn action
   */
  it('AuthSlice signIn action', async () => {
    const state: AuthState = {
      token: null,
      user: null
    }
    const action = {
      payload: {
        token: 'token',
        user: { id: 1, name: 'User' } as any
      },
      type: 'auth/signIn'
    }

    signInAction(state, action)

    expect(state.token).toBe('token')
    expect(state.user).toStrictEqual({ id: 1, name: 'User' })
  })

  /**
   * @description AuthSlice signOut action
   */
  it('AuthSlice signOut action', async () => {
    const state: AuthState = {
      token: 'token',
      user: { id: 1, name: 'User' } as any
    }

    signOutAction(state)

    expect(state.token).toBeNull()
    expect(state.user).toBeNull()
  })
})
