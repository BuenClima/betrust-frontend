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
import PropTypes from 'prop-types'
import { useMemo } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/store'
import { show } from '@/services/modalSlice'

/**
 * @description AccountHeader props
 * @property {string} type - Account type
 */
type AccountHeaderProps = {
  self?: boolean
}

/**
 * @description AccountHeader component
 * @returns {JSX.Element} AccountHeader component
 */
export const AccountHeader = ({ self }: AccountHeaderProps): JSX.Element => {
  const user = useAppSelector((state) => state.auth.user)
  const dispatch = useAppDispatch()

  const handleClickOnCreateTip = () => {
    dispatch(show('createTip'))
  }

  const isTipsterAccount = useMemo(() => user?.role?.name === 'tipster', [user])

  return (
    <Grid container justifyContent={'center'} alignItems={'center'}>
      <Grid
        item
        xs={10}
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
              disabled={!self}
            />
            <Tooltip title="Add a profile image">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
                disabled={!self}
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
      </Grid>
      {isTipsterAccount && (
        <Grid item xs={12} sm={2} container>
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
      )}
    </Grid>
  )
}

export default AccountHeader

/**
 * @description AccountHeader props
 * @property {boolean} self - Is self account
 */
AccountHeader.propTypes = {
  self: PropTypes.bool
}
