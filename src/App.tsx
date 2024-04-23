import './index.css'

import { AppProvider } from '@/providers/AppProvider'

import RoutesProvider from './providers/RoutesProvider'

/**
 * @description App component
 * @returns {JSX.Element} App component
 */
function App(): JSX.Element {
  return (
    <AppProvider>
      <RoutesProvider />
    </AppProvider>
  )
}

export default App
