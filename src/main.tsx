import '@fontsource/jost' // Defaults to weight 400
import '@fontsource/jost/400.css' // Specify weight
import '@fontsource/jost/400-italic.css' // Specify weight and style

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'

import App from '@/App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<></>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
)
