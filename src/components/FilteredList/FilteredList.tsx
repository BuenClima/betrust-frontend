import { Container, List as MuiList, ListItem } from '@mui/material'
import PropTypes from 'prop-types'
import { useEffect, useMemo } from 'react'

import { useAppDispatch } from '@/app/store'
import { TipCard } from '@/components/Cards/TipCard'
import { TipsterCard } from '@/components/Cards/TipsterCard'
import { Filters } from '@/components/Filters/Filters'
import { reset } from '@/services/filtersSlice'
import { FilterType } from '@/services/modalSlice'

/**
 * @description ListType type
 */
export type ListType = 'tips' | 'tipsters'

/**
 * @description ListProps interface
 */
type ListProps = {
  type: ListType
  filter: FilterType
}

/**
 * @description FilteredList component
 * @param {ListProps} { type, filter} - ListProps
 * @returns {JSX.Element} FilteredList component
 */
export const FilteredList = ({ type, filter }: ListProps): JSX.Element => {
  const dispatch = useAppDispatch()
  const ListComponent = useMemo(() => (type === 'tips' ? TipCard : TipsterCard), [type])

  useEffect(() => {
    dispatch(reset())
  }, [filter])

  return (
    <Container maxWidth={'xl'}>
      <Filters filter={filter} />
      <MuiList
        key={`${type}`}
        sx={{
          maxHeight: { xs: '80vh', sm: 'calc(100vh - 20vh - 69px - 4vh - 8vh)' },
          overflow: 'auto'
        }}
      >
        {[...Array(100)].map((_, i) => (
          <ListItem key={`${type}_${i}`}>
            <ListComponent extended={false} />
          </ListItem>
        ))}
      </MuiList>
    </Container>
  )
}

export default FilteredList

/**
 * @description FilteredList propTypes
 * @property {typeof LisType[]} type - ListType
 * @property {typeof FilterType[]} filter - FilterType
 */
FilteredList.propTypes = {
  type: PropTypes.array.isRequired,
  filter: PropTypes.array.isRequired
}
