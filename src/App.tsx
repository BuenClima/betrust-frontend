import './index.css'

import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AppProvider } from '@/providers/AppProvider'

const List = lazy(() => import('@/pages/List/List'))
const TipsterDetails = lazy(() => import('./pages/TipsterDetails/TipsterDetails'))
const Auth = lazy(() => import('@/pages/Auth/Auth'))
const Account = lazy(() => import('@/pages/Account/Account'))
const Home = lazy(() => import('@/pages/Home/Home'))

function App() {
  return (
    <AppProvider>
      <div style={{ height: '100vh', width: '100vw' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/auth/signin" element={<Auth />} />

            <Route path="/:resource" element={<List />} />
            <Route path="/:resource/:id" element={<TipsterDetails />} />

            <Route path="/account" element={<Account />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  )
}

export default App
