import { Box, CircularProgress } from '@mui/material'

/**
 * @description Fallback component
 * @returns {JSX.Element} Fallback component
 */
export const Fallback = (): JSX.Element => {
  return (
    <Box sx={{ color: '#fff', backgroundColor: '#000', height: '100vh', width: '100vw' }}>
      <Box
        sx={{
          position: 'absolute' as const,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        <CircularProgress color="inherit" size={60} />
      </Box>
    </Box>
  )
}

export default Fallback
