import { ClearSharp } from '@mui/icons-material'
import { Box, IconButton, Modal as MuiModal } from '@mui/material'

import { useAppDispatch, useAppSelector } from '@/app/store'
import { SortForm } from '@/features/List/forms/SortForm'
import { TipsFilterForm } from '@/features/List/forms/TipsFilterForm'
import { TipstersFilterForm } from '@/features/List/forms/TipstersFilterForm'
import { CreateTipForm } from '@/features/Tips/forms/CreateTipForm'
import { TipDetails } from '@/features/Tips/pages/TipDetails'
import { hide, ModalType } from '@/services/modalSlice'

/**
 * @description style object for Modal component
 */
const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: {
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

/**
 * @description Modal component
 * @returns {JSX.Element} Modal component
 */
export const Modal = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const modal = useAppSelector((state) => state.modal)

  const handleClose = () => {
    dispatch(hide())
  }

  const forms: Record<ModalType, JSX.Element> = {
    filterTips: <TipsFilterForm />,
    filterTipsters: <TipstersFilterForm />,
    tipDetails: <TipDetails />,
    sort: <SortForm />,
    null: <></>,
    createTip: <CreateTipForm />
  }

  return (
    <MuiModal open={modal.show} onClose={handleClose} keepMounted>
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

export default Modal
