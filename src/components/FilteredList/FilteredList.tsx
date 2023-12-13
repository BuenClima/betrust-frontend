import { Container, List as MuiList, ListItem } from '@mui/material'
import { lazy, useMemo } from 'react'

import { FilterType } from '@/services/modalSlice'

import Filters from '../Filters/Filters'

const BetCard = lazy(() => import('@/components/Cards/BetCard'))
const TipsterCard = lazy(() => import('@/components/Cards/TipsterCard'))

export type ListType = 'bets' | 'tipsters'

type ListProps = {
  type: ListType
  filter: FilterType
}

export const FilteredList = ({ type, filter }: ListProps) => {
  const ListComponent = useMemo(() => (type === 'bets' ? BetCard : TipsterCard), [type])

  return (
    <Container maxWidth={'xl'}>
      <Filters filter={filter} />
      <MuiList
        key={`${type}`}
        style={{ maxHeight: 'calc(100vh - 20vh - 69px - 6vh - 8vh)', overflow: 'auto' }}
      >
        {[...Array(100)].map((_, i) => (
          <ListItem key={`${type}_${i}`}>
            <ListComponent />
          </ListItem>
        ))}
      </MuiList>
    </Container>
  )
}
