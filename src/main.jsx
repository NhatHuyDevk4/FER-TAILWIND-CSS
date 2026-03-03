import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { TooltipProvider } from '@/components/ui/tooltip'
import TanStackQueryProvider from './provider/TankStackQuert'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TanStackQueryProvider>
    <TooltipProvider>
      <App />
    </TooltipProvider>
  </TanStackQueryProvider>
)

