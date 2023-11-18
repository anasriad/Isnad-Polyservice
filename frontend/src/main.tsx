import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <GoogleOAuthProvider clientId='92771652400-fn64lneeh52o5j7u48vqoeu5p7cha5no.apps.googleusercontent.com'>
    <React.StrictMode>
    <App />
  </React.StrictMode>,
  </GoogleOAuthProvider>
  
)
