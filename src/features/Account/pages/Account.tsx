import { Header } from '@/components/Header/Header'
import Tabs from '@/components/Tabs/Tabs'
import { Layout } from '@/layouts/Layout'

import Tips from '../components/Tips/Tips'
import ProfileForm from '../forms/ProfileForm'

/**
 * @description Account page
 * @returns {JSX.Element} Account page
 */
export const Account = (): JSX.Element => {
  return (
    <Layout>
      <Header type="account" />
      <Tabs
        tabs={[
          { label: 'Profile', component: <ProfileForm /> },
          { label: 'Tips', component: <Tips /> }
        ]}
      />
    </Layout>
  )
}

export default Account
