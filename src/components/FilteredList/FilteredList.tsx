import { Container, List as MuiList, ListItem } from '@mui/material'
import PropTypes from 'prop-types'
import { useEffect } from 'react'

import { useAppDispatch } from '@/app/store'
import { Filters } from '@/components/Filters/Filters'
import { reset } from '@/services/filtersSlice'
import { FilterType } from '@/services/modalSlice'

import Card, { CardType } from '../Card/Card'

/**
 * @description ListProps interface
 * @property {typeof LisType} type - ListType
 * @property {typeof FilterType} filter - FilterType
 * @property {boolean} owner - owner
 */
type ListProps = {
  type: CardType
  filter: FilterType
  owner?: true
}

/**
 * @description FilteredList component
 * @param {ListProps} { type, filter} - ListProps
 * @returns {JSX.Element} FilteredList component
 */
export const FilteredList = (props: ListProps): JSX.Element => {
  const { type, filter, owner } = props
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(reset())
  }, [filter])

  return (
    <Container maxWidth={'xl'}>
      <Filters filter={filter} />
      <MuiList
        data-testid="filtered-list"
        key={`${type}`}
        sx={{
          maxHeight: { xs: '80vh', sm: 'calc(100vh - 20vh - 69px - 4vh - 8vh)' },
          overflow: 'auto'
        }}
      >
        {[...Array(100)].map((_, i) => (
          <ListItem key={`${type}_${i}`}>
            <Card type={type} extended={false} owner={owner} />
          </ListItem>
        ))}
      </MuiList>
    </Container>
  )
}

export default FilteredList

/**
 * @description FilteredList propTypes
 * @property {typeof LisType} type - ListType
 * @property {typeof FilterType} filter - FilterType
 * @property {boolean} owner - owner
 */
FilteredList.propTypes = {
  type: PropTypes.oneOf(['tipster', 'tip']).isRequired,
  filter: PropTypes.oneOf(['filterTips', 'filterTipsters']).isRequired,
  owner: PropTypes.bool
}
