import { ClearSharp } from '@mui/icons-material'
import { Box, IconButton, Modal as MuiModal } from '@mui/material'

import { useAppDispatch, useAppSelector } from '@/app/store'
import { BetsFilterForm } from '@/forms/Bets/BetsFilterForm'
import { SortForm } from '@/forms/Sort/SortForm'
import { TipstersFilterForm } from '@/forms/Tipsters/TipstersFilterForm'
import { BetDetails } from '@/pages/BetDetails/BetDetails'
import { hide, ModalType } from '@/services/modalSlice'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '85vw',
    sm: '30vw'
  },
  height: {
    xs: '95vh',
    sm: 'auto'
  },
  bgcolor: '#fff',
  border: 'none',
  boxShadow: 24,
  p: 4,
  borderRadius: 2
}

export const Modal = () => {
  const dispatch = useAppDispatch()
  const modal = useAppSelector((state) => state.modal)

  const handleClose = () => {
    dispatch(hide())
  }

  const forms: Record<ModalType, JSX.Element> = {
    filterBets: <BetsFilterForm />,
    filterTipsters: <TipstersFilterForm />,
    betDetails: <BetDetails />,
    sort: <SortForm />,
    null: <></>
  }

  return (
    <MuiModal open={modal.show} onClose={handleClose}>
      <Box sx={style}>
        <IconButton
          onClick={handleClose}
          sx={{ color: 'primary.main', position: 'absolute', top: 8, right: 8 }}
        >
          <ClearSharp />
        </IconButton>
        {forms[modal.type]}
      </Box>
    </MuiModal>
  )
}
