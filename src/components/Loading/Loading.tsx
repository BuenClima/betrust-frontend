import { Backdrop, CircularProgress } from '@mui/material'

import { useAppDispatch, useAppSelector } from '@/app/store'
import { hide } from '@/services/loadingSlice'

export const Loading = () => {
  const loading = useAppSelector((state) => state.loading)
  const dispatch = useAppDispatch()

  const handleClose = () => dispatch(hide())
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading.isLoading}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}
