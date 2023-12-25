import { Box } from '@mui/material'
import React from 'react'

import AppBar from '@/components/AppBar/AppBar'
import { Loading } from '@/components/Loading/Loading'
import { Modal } from '@/components/Modal/Modal'

/**
 * @description Layout component
 * @param {React.ReactNode | React.ReactNode[]} children - children
 */
type LayoutProps = {
  children: React.ReactNode | React.ReactNode[]
}

/**
 * @description Layout component
 * @param {React.ReactNode | React.ReactNode[]} children - children
 * @returns {JSX.Element} Layout component
 */
export const Layout = (props: LayoutProps): JSX.Element => {
  return (
    <div>
      <AppBar />
      <Loading />
      <Modal />
      <Box style={{ height: 'calc(100vh - 69px - 4vh)', width: '100%' }}>
        {props.children}
      </Box>
    </div>
  )
}

export default Layout
