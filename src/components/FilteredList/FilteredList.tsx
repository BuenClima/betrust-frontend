import { Container, List as MuiList, ListItem } from '@mui/material'
import { useEffect, useMemo } from 'react'

import { useAppDispatch } from '@/app/store'
import { BetCard } from '@/components/Cards/BetCard'
import { TipsterCard } from '@/components/Cards/TipsterCard'
import { Filters } from '@/components/Filters/Filters'
import { reset } from '@/services/filtersSlice'
import { FilterType } from '@/services/modalSlice'

export type ListType = 'bets' | 'tipsters'

type ListProps = {
  type: ListType
  filter: FilterType
}

export const FilteredList = ({ type, filter }: ListProps) => {
  const dispatch = useAppDispatch()
  const ListComponent = useMemo(() => (type === 'bets' ? BetCard : TipsterCard), [type])

  useEffect(() => {
    dispatch(reset())
  }, [filter])

  return (
    <Container maxWidth={'xl'}>
      <Filters filter={filter} />
      <MuiList
        key={`${type}`}
        sx={{
          maxHeight: { xs: '80vh', sm: 'calc(100vh - 20vh - 69px - 6vh - 8vh)' },
          overflow: 'auto'
        }}
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
