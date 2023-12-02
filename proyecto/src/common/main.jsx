import React from 'react'
import ReactDOM from 'react-dom/client'
import '../assets/styles/index.css'
import Routing from './Routing.jsx'
import AuthProvider from '../auth/authProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Routing />
    </AuthProvider>
  </React.StrictMode>,
)
