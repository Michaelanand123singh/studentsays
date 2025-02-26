import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';

const CLIENT_ID = "985632903963-753b7qvtrl740ra6br1iqgdh8g2a1s0r.apps.googleusercontent.com"; // Replace with your actual Client ID

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
