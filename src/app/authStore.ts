import createStore, { createStoreReturn } from 'react-auth-kit/createStore'

import { User } from '@/types/user'

/**
 * @description Setup auth store
 * @returns {createStoreReturn<User>} Auth store
 */
export function setupAuthStore(): createStoreReturn<User> {
  return createStore<User>({
    authType: 'localstorage',
    authName: '_auth'
  })
}
