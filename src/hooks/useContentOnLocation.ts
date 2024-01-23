import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { CardType } from '@/components/Card/Card'
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
  content: CardType
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
    content: 'tipster'
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
        content: type.substring(0, type.length - 1) as CardType
      })
    else navigate('/tipsters')
  }, [location.pathname])

  return content
}

export default useContentOnLocation
