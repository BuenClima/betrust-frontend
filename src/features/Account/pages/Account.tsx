import PropTypes from 'prop-types'
import { useMemo } from 'react'
import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import { useLocation } from 'react-router-dom'

import FilteredList from '@/components/FilteredList/FilteredList'
import { Header } from '@/components/Header/Header'
import Tabs from '@/components/Tabs/Tabs'
import { Layout } from '@/layouts/Layout'
import { User } from '@/types/user'

import { Stats } from '../components/Stats/Stats'
import ProfileForm from '../forms/Profile/ProfileForm'

/**
 * @description Account props
 * @property {boolean} self - Is account page for self
 */
type AccountProps = {
  self: boolean
}

/**
 * @description Account page
 * @returns {JSX.Element} Account page
 */
export const Account = (props: AccountProps): JSX.Element => {
  const { self } = props

  const user = useAuthUser<User>()
  const location = useLocation()
  const tipsterRegexPath = /\/tipsters\/[0-9]+/

  /**
   * @description role
   */
  const role = useMemo(() => user?.role?.name, [user])

  /**
   * @description tabs for account page
   */
  const tabs = useMemo(() => {
    const tabs: {
      label: string
      component: JSX.Element
    }[] = []

    if (location.pathname.match(tipsterRegexPath) || location.pathname === '/account') {
      if (self) {
        tabs.push({ label: 'Profile', component: <ProfileForm /> })
      }
      if (role === 'tipster' || location.pathname.match(tipsterRegexPath)) {
        tabs.push(
          { label: 'Stats', component: <Stats /> },
          {
            label: 'Tips',
            component: <FilteredList type="tip" filter="filterTips" owner />
          }
        )
      }
    }
    return tabs
  }, [self, location.pathname])

  return (
    <Layout>
      <Header type="user" self={self} />
      <Tabs tabs={tabs} />
    </Layout>
  )
}

export default Account

/**
 * @description Account prop types
 * @property {boolean} self - Is account page for self
 */
Account.propTypes = {
  self: PropTypes.bool.isRequired
}
