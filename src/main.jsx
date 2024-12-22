import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Components/Router/Router.jsx'
import AuthProvaider from './Provaider/AuthProvaider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvaider>
      <RouterProvider router={Router} />
    </AuthProvaider>
  </StrictMode>,
)
