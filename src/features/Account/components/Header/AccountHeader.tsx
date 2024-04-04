import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import { Avatar, Box, Button, Grid, Tooltip, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import React from 'react'

import { useAppDispatch } from '@/app/store'
import ImageUpload from '@/components/ImageUpload/ImageUpload'
import { show } from '@/services/modalSlice'

/**
 * @description AccountHeader props
 * @property {string} type - Account type
 * @property {boolean} self - Is self account
 */
type AccountHeaderProps = {
  self: boolean
  tipster: boolean
}

/**
 * @description AccountHeader component
 * @returns {JSX.Element} AccountHeader component
 */
export const AccountHeader = (props: AccountHeaderProps): JSX.Element => {
  const { self, tipster } = props
  const dispatch = useAppDispatch()

  /**
   * @description Handle click on create tip
   */
  const handleClickOnCreateTip = () => {
    dispatch(show('createTip'))
  }

  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      data-testid="account-header"
    >
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
              data-testid="avatar"
              sx={{
                border: '4px solid',
                borderColor: 'primary.main',
                width: 124,
                height: 124,
                '&:hover': {
                  opacity: 0.9
                }
              }}
              aria-label="avatar"
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
            <Typography variant={'h4'} color={'#fff'}>
              Name
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant={'subtitle1'} color={'#fff'}>
              Description
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {self && (
        <React.Fragment>
          <Box sx={{ position: 'absolute', top: '7%', right: 100 }}>
            <ImageUpload htmlFor="cover" self={self} tooltip="Upload cover image">
              <EditIcon
                data-testid="edit-cover"
                sx={{
                  width: 25,
                  height: 25
                }}
              />
            </ImageUpload>
          </Box>
          {tipster && (
            <Grid item xs={12} sm={2} container>
              <Tooltip title="Create tip">
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  onClick={handleClickOnCreateTip}
                >
                  Create tip
                </Button>
              </Tooltip>
            </Grid>
          )}
        </React.Fragment>
      )}
    </Grid>
  )
}

export default AccountHeader

/**
 * @description AccountHeader props
 * @property {boolean} self - Is self account
 * @property {boolean} tipster - Is tipster account
 */
AccountHeader.propTypes = {
  self: PropTypes.bool.isRequired,
  tipster: PropTypes.bool.isRequired
}
