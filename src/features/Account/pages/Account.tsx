import { Header } from '@/components/Header/Header'
import { Tabs } from '@/features/Account/components/Tabs/Tabs'
import { Layout } from '@/layouts/Layout'

/**
 * @description Account page
 * @returns {JSX.Element} Account page
 */
export const Account = (): JSX.Element => {
  return (
    <Layout>
      <Header type="account" />
      <Tabs />
    </Layout>
  )
}

export default Account
