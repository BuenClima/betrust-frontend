import { Box } from '@mui/material'
import React from 'react'

import AppBar from '../components/AppBar/AppBar'
import Footer from '../components/Footer/Footer'
import { Loading } from '../components/Loading/Loading'
import { Modal } from '../components/Modal/Modal'

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[]
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <AppBar />
      <Loading />
      <Modal />
      <Box style={{ height: 'calc(100vh - 69px - 4vh)', width: '100%' }}>{children}</Box>
      <Footer />
    </div>
  )
}
