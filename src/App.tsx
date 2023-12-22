import './index.css'

import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AppProvider } from '@/providers/AppProvider'

const List = lazy(() => import('@/features/List/pages/List'))
const Auth = lazy(() => import('@/features/Auth/pages/Auth'))
const Account = lazy(() => import('@/features/Account/pages/Account'))
const Home = lazy(() => import('@/features/Home/pages/Home'))

/**
 * @description App component
 * @returns {JSX.Element} App component
 */
function App(): JSX.Element {
  return (
    <AppProvider>
      <div style={{ height: '100vh', width: '100vw' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/auth/signin" element={<Auth />} />

            <Route path="/:resource" element={<List />} />

            <Route
              path="/tipsters/:id"
              element={<Account type="tipster" permission="read" />}
            />

            <Route
              path="/account"
              element={<Account type="tipster" permission="write" />}
            />

            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  )
}

export default App
