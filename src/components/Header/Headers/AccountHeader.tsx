import AddIcon from '@mui/icons-material/Add'
import {
  Avatar,
  Button,
  Grid,
  IconButton,
  Input,
  InputLabel,
  Tooltip,
  Typography
} from '@mui/material'

import { useAppDispatch } from '@/app/store'
import { show } from '@/services/modalSlice'

export const AccountHeader = () => {
  const dispatch = useAppDispatch()

  const handleClickOnCreateTip = () => {
    dispatch(show('createTip'))
  }

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
          <InputLabel htmlFor="avatar-button-file">
            <Input
              style={{ display: 'none' }}
              id="avatar-button-file"
              name="avatar-button-file"
              type="file"
              inputProps={{ accept: 'image/*' }}
              onChange={(e) => {
                console.log(e.target)
              }}
            />
            <Tooltip title="Add a profile image">
              <IconButton color="primary" aria-label="upload picture" component="span">
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
              </IconButton>
            </Tooltip>
          </InputLabel>
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
            <Typography variant={'h4'}>Name</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle1'}>Description</Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6} container>
          <Tooltip title="Create tip">
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={handleClickOnCreateTip}
            >
              Create tip
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </Grid>
  )
}
