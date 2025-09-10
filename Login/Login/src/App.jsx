import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LoginPage from './Components/LoginPage'

// Lazy load remote components exposed by separate apps via Module Federation
const ForgotPassword = lazy(() => import('forgotPasswordApp/ForgotPassword'))
const Help = lazy(() => import('helpApp/Help'))
const Register = lazy(() => import('registerApp/Register'))

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-3 bg-light">
        <Link to="/" className="me-3">Login</Link>
        <Link to="/forgot-password" className="me-3">Forgot Password</Link>
        <Link to="/register" className="me-3">Register</Link>
        <Link to="/help">Help</Link>
      </nav>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/help" element={<Help />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
