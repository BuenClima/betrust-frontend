import FilterAltIcon from '@mui/icons-material/FilterAlt'
import SortIcon from '@mui/icons-material/Sort'
import { Button, Grid, IconButton, Tooltip } from '@mui/material'
import PropTypes from 'prop-types'

import { useAppDispatch } from '@/app/store'
import { FilterType, show } from '@/services/modalSlice'

/**
 * @description FiltersProps interface
 * @property {FilterType} filter - FilterType
 */
type FiltersProps = {
  filter: FilterType
}

/**
 * @description Filters component
 * @param {FiltersProps} { filter } - FiltersProps
 * @returns {JSX.Element} Filters component
 */
export const Filters = (props: FiltersProps): JSX.Element => {
  const { filter } = props
  const dispatch = useAppDispatch()

  const handleOpen = () => {
    dispatch(show(filter))
  }

  const handleOpenSort = () => {
    dispatch(show('sort'))
  }

  return (
    <Grid
      sx={{ height: '8vh' }}
      container
      justifyContent="space-between"
      alignItems="center"
    >
      <Tooltip title="Filters">
        <Button
          startIcon={<FilterAltIcon />}
          variant="contained"
          sx={{ mx: 2 }}
          onClick={handleOpen}
        >
          Filters
        </Button>
      </Tooltip>
      <Tooltip title="Sort">
        <IconButton sx={{ mx: 2 }} onClick={handleOpenSort}>
          <SortIcon />
        </IconButton>
      </Tooltip>
    </Grid>
  )
}

export default Filters

/**
 * @description Filters propTypes
 * @property {FilterType} filter - FilterType
 */
Filters.propTypes = {
  filter: PropTypes.string.isRequired
}
