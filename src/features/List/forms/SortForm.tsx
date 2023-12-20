import { Button, Checkbox, FormControlLabel, Grid, Typography } from '@mui/material'
import { Controller } from 'react-hook-form'

import { SortFormValues, useSortForm } from '@/features/List/hooks/useSortForm'

export const SortForm = () => {
  const { control, handleSubmit } = useSortForm()

  const onSubmit = (data: SortFormValues) => {
    console.log(data)
  }

  return (
    <Grid
      container
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      justifyContent="center"
      spacing={1}
    >
      <Grid item xs={10} container justifyContent="center">
        <Typography variant="h6">Sort</Typography>
      </Grid>
      <Grid item xs={10}>
        <Controller
          name="topRated"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControlLabel
              label="Top Rated"
              control={<Checkbox checked={value} onChange={onChange} />}
            />
          )}
        />
      </Grid>
      <Grid item xs={10}>
        <Controller
          name="alphabetical"
          control={control}
          render={({ field: { onChange, value } }) => (
            <FormControlLabel
              label="Alphabetical"
              control={<Checkbox checked={value} onChange={onChange} />}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} container justifyContent="center">
        <Button type="submit" variant="contained">
          Apply
        </Button>
      </Grid>
    </Grid>
  )
}
