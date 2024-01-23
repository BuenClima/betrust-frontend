import { Backdrop, CircularProgress } from '@mui/material'

import { useAppDispatch, useAppSelector } from '@/app/store'
import { hide } from '@/services/loadingSlice'

/**
 * @description Loading component
 * @returns {JSX.Element} Loading component
 */
export const Loading = (): JSX.Element => {
  const loading = useAppSelector((state) => state.loading)
  const dispatch = useAppDispatch()

  const handleClose = () => dispatch(hide())
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={loading.isLoading}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" data-testid="circular-progress-loading" />
    </Backdrop>
  )
}

export default Loading
