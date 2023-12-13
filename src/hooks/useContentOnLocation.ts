import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { ListType } from '@/components/FilteredList/FilteredList'
import { HeaderType } from '@/components/Header/Header'
import { FilterType } from '@/services/modalSlice'

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

    const filters: Record<'tipsters' | 'bets', FilterType> = {
      tipsters: 'filterTipsters',
      bets: 'filterBets'
    }

    if (type === 'tipsters' || type === 'bets')
      setContent({
        header: type,
        filter: filters[type],
        content: type
      })
    else navigate('/tipsters')
  }, [location.pathname])

  return content
}
