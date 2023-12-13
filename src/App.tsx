import './index.css'

import { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AppProvider } from '@/providers/AppProvider'

const List = lazy(() => import('@/pages/List/List'))
const TipsterDetails = lazy(() => import('./pages/TipsterDetails/TipsterDetails'))

function App() {
  return (
    <AppProvider>
      <div style={{ height: '100vh', width: '100vw' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/:resource" element={<List />} />
            <Route path="/:resource/:id" element={<TipsterDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AppProvider>
  )
}

export default App
