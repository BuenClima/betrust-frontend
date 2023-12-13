import FilterAltIcon from '@mui/icons-material/FilterAlt'
import SortIcon from '@mui/icons-material/Sort'
import { Button, Grid, IconButton, Tooltip } from '@mui/material'

import { useAppDispatch } from '@/app/store'
import { FilterType, show } from '@/services/modalSlice'

type FiltersProps = {
  filter: FilterType
}

export const Filters = ({ filter }: FiltersProps) => {
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
