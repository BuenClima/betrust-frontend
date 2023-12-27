import PropTypes from 'prop-types'
import { useMemo } from 'react'
import { useAuthUser } from 'react-auth-kit'
import { useLocation } from 'react-router-dom'

import FilteredList from '@/components/FilteredList/FilteredList'
import { Header } from '@/components/Header/Header'
import Tabs from '@/components/Tabs/Tabs'
import { Layout } from '@/layouts/Layout'

import { Stats } from '../components/Stats/Stats'
import ProfileForm from '../forms/ProfileForm'

/**
 * @description Account props
 * @property {boolean} self - Is account page for self
 */
type AccountProps = {
  self?: boolean
}

/**
 * @description Account page
 * @returns {JSX.Element} Account page
 */
export const Account = (props: AccountProps): JSX.Element => {
  const { self } = props

  const user = useAuthUser()
  const location = useLocation()
  const tipsterRegexPath = /\/tipsters\/[0-9]+/

  const role = useMemo(() => user()?.role?.name, [user])

  const tabs = useMemo(() => {
    if (location.pathname === '/account') {
      const tabs = []
      if (role === 'tipster') {
        tabs.push(
          { label: 'Stats', component: <Stats /> },
          {
            label: 'Tips',
            component: <FilteredList type="tip" filter="filterTips" owner />
          }
        )
      }
      if (self) {
        tabs.push({ label: 'Profile', component: <ProfileForm /> })
      }
      return tabs
    }
    if (location.pathname.match(tipsterRegexPath)) {
      return [
        { label: 'Stats', component: <Stats /> },
        { label: 'Tips', component: <FilteredList type="tip" filter="filterTips" /> }
      ]
    }
    return []
  }, [self])

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
  self: PropTypes.bool
}
