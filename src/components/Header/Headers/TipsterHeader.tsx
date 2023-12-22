import { Avatar, Grid, Typography } from '@mui/material'

/**
 * @description TipsterHeader component
 * @returns {JSX.Element} TipsterHeader component
 */
export const TipsterHeader = (): JSX.Element => {
  return (
    <Grid container justifyContent={'center'} alignItems={'center'}>
      <Grid
        item
        xs={12}
        container
        justifyContent={'center'}
        alignItems={'center'}
        spacing={2}
      >
        <Grid
          item
          xs={12}
          sm={4}
          container
          justifyContent={'flex-end'}
          alignItems={'center'}
        >
          <Avatar
            sx={{
              border: '4px solid #ffd700',
              width: 124,
              height: 124,
              '&:hover': {
                opacity: 0.9
              }
            }}
            aria-label="recipe"
            src="https://i.pravatar.cc/300"
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          container
          justifyContent={'flex-start'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <Typography variant={'h4'}>Tipster name</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle1'}>Tipster description</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default TipsterHeader
