import { Container } from '@mui/material'
import PropTypes from 'prop-types'

/**
 * @description Layout component
 * @param {React.ReactNode | React.ReactNode[]} children - children
 */
type LayoutProps = {
  children: React.ReactNode | React.ReactNode[]
}

/**
 * @description Layout component
 * @param {LayoutProps} props - props
 * @returns {JSX.Element} Layout component
 */
export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxWidth="xl" sx={{ width: '50vw', minHeight: '50vh' }}>
      {children}
    </Container>
  )
}

export default Layout

/**
 * @description Layout component
 * @param {React.ReactNode | React.ReactNode[]} children - children
 */
Layout.propTypes = {
  children: PropTypes.node.isRequired
}
