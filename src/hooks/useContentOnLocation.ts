import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { ListType } from '@/components/FilteredList/FilteredList'
import { HeaderType } from '@/components/Header/Header'
import { FilterType } from '@/services/modalSlice'

type ContentType = 'tipsters' | 'tips'

export const useContentOnLocation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const [content, setContent] = useState<{
    header: HeaderType
    filter: FilterType
    content: ListType
  }>({ header: 'tipsters', filter: 'filterTipsters', content: 'tipsters' })

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
