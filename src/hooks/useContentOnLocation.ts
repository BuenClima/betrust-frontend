import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { ListType } from '@/components/FilteredList/FilteredList'
import { HeaderType } from '@/components/Header/Header'
import { FilterType } from '@/services/modalSlice'

/**
 * @description ContentType type.
 * @property {string} tipsters - Tipsters.
 */
type ContentType = 'tipsters' | 'tips'

/**
 * @description Content type.
 * @property {HeaderType} header - Header.
 * @property {FilterType} filter - Filter.
 * @property {ListType} content - Content.
 */
type Content = {
  header: HeaderType
  filter: FilterType
  content: ListType
}

/**
 * @description useContentOnLocation hook
 * @returns {Content} Content.
 */
export const useContentOnLocation = (): Content => {
  const navigate = useNavigate()
  const location = useLocation()

  const [content, setContent] = useState<Content>({
    header: 'tipsters',
    filter: 'filterTipsters',
    content: 'tipsters'
  })

  useEffect(() => {
    const type = location.pathname.split('/')[1]

    const filters: Record<ContentType, FilterType> = {
      tipsters: 'filterTipsters',
      tips: 'filterTips'
    }

    if (['tipsters', 'tips'].includes(type))
      setContent({
        header: type as ContentType,
        filter: filters[type as ContentType],
        content: type as ContentType
      })
    else navigate('/tipsters')
  }, [location.pathname])

  return content
}

export default useContentOnLocation
