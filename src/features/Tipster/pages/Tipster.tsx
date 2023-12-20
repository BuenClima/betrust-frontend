import { FilteredList } from '@/components/FilteredList/FilteredList'
import { Header } from '@/components/Header/Header'
import { Layout } from '@/layouts/Layout'

export const Tipster = () => {
  return (
    <Layout>
      <Header type="tipster" />
      <FilteredList type="tips" filter="filterTips" />
    </Layout>
  )
}

export default Tipster
