import { FilteredList } from '@/components/FilteredList/FilteredList'
import { Header } from '@/components/Header/Header'
import { useContentOnLocation } from '@/hooks/useContentOnLocation'
import { Layout } from '@/layouts/Layout'

/**
 * @description List page
 * @returns {JSX.Element} List page
 */
export const List = (): JSX.Element => {
  const content = useContentOnLocation()

  return (
    <Layout>
      <Header type={content.header} self={false} />
      <FilteredList type={content.content} filter={content.filter} />
    </Layout>
  )
}

export default List
