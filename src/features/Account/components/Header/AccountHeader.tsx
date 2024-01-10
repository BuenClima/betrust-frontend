import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import { Avatar, Box, Button, Grid, Tooltip, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React, { useMemo } from 'react'
import { useAuthUser } from 'react-auth-kit'
import { useLocation } from 'react-router-dom'

import { useAppDispatch } from '@/app/store'
import ImageUpload from '@/components/Inputs/ImageUpload/ImageUpload'
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
export const AccountHeader = (props: AccountHeaderProps): JSX.Element => {
  const { self } = props
  const location = useLocation()
  const user = useAuthUser()
  const dispatch = useAppDispatch()

  const handleClickOnCreateTip = () => {
    dispatch(show('createTip'))
  }

  const isTipsterAccount = useMemo(
    () => user()?.role?.name === 'tipster' && location.pathname === '/account',
    [user, location.pathname]
  )

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
          <ImageUpload self={self} tooltip="Upload avatar image" htmlFor="avatar">
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
          </ImageUpload>
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
        <React.Fragment>
          <Box sx={{ position: 'absolute', top: '7%', right: 100 }}>
            <ImageUpload htmlFor="cover" self={self} tooltip="Upload cover image">
              <EditIcon
                sx={{
                  width: 25,
                  height: 25
                }}
              />
            </ImageUpload>
          </Box>
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
        </React.Fragment>
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
