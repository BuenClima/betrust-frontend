import { Box, CircularProgress } from '@mui/material'

export const Fallback = () => {
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
