import { FilteredList } from '@/components/FilteredList/FilteredList'
import { Header } from '@/components/Header/Header'
import { useContentOnLocation } from '@/hooks/useContentOnLocation'
import { Layout } from '@/layouts/Layout'

export const List = () => {
  const content = useContentOnLocation()

  return (
    <Layout>
      <Header type={content.header} />
      <FilteredList type={content.content} filter={content.filter} />
    </Layout>
  )
}

export default List
