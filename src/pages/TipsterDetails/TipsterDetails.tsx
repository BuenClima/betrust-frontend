import { FilteredList } from '@/components/FilteredList/FilteredList'
import { Header } from '@/components/Header/Header'
import { Layout } from '@/layouts/Layout'

export const TipsterDetails = () => {
  return (
    <Layout>
      <Header type="tipster" />
      <FilteredList type="bets" filter="filterBets" />
    </Layout>
  )
}

export default TipsterDetails
