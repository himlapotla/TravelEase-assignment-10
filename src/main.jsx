import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { allRoutes } from './Routes/routers.jsx'
import AuthProvider from './components/Provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer> </ToastContainer>
      <RouterProvider router={allRoutes}> </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)


