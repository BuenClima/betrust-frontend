import { FilteredList } from '@/components/FilteredList/FilteredList'
import { Header } from '@/components/Header/Header'
import { Layout } from '@/layouts/Layout'

/**
 * @description Tipster page
 * @returns {JSX.Element} Tipster page
 */
export const Tipster = (): JSX.Element => {
  return (
    <Layout>
      <Header type="tipster" />
      <FilteredList type="tips" filter="filterTips" />
    </Layout>
  )
}

export default Tipster
