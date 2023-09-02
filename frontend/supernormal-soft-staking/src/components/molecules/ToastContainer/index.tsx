'use client'

import { ToastContainer as TostifyContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const ToastContainer = () => (
  <TostifyContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
  />
)
