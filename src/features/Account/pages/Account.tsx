import PropTypes from 'prop-types'
import { useMemo } from 'react'

import FilteredList from '@/components/FilteredList/FilteredList'
import { Header } from '@/components/Header/Header'
import Tabs from '@/components/Tabs/Tabs'
import { Layout } from '@/layouts/Layout'
import { AccountType, PermissionType } from '@/types/account'

import { Stats } from '../components/Stats/Stats'
import ProfileForm from '../forms/ProfileForm'

/**
 * @description Account props
 * @property {string} type - Account type
 */
type AccountProps = {
  type: AccountType
  permission: PermissionType
}

/**
 * @description Account page
 * @returns {JSX.Element} Account page
 */
export const Account = ({ type, permission }: AccountProps): JSX.Element => {
  const tabs = useMemo(() => {
    if (type === 'tipster' && permission === 'read') {
      return [
        { label: 'Stats', component: <Stats /> },
        { label: 'Tips', component: <FilteredList type="tips" filter="filterTips" /> }
      ]
    }
    if (type === 'tipster' && permission === 'write') {
      return [
        { label: 'Stats', component: <Stats /> },
        { label: 'Tips', component: <FilteredList type="tips" filter="filterTips" /> },
        { label: 'Profile', component: <ProfileForm /> }
      ]
    }
    return [{ label: 'Profile', component: <ProfileForm /> }]
  }, [type, permission])

  return (
    <Layout>
      <Header type={type} />
      <Tabs tabs={tabs} />
    </Layout>
  )
}

export default Account

/**
 * @description Account prop types
 * @property {string} type - Account type
 */
Account.propTypes = {
  type: PropTypes.oneOf(['tipster', 'account'])
}
