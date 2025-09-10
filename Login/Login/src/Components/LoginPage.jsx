import React from 'react'
import { Link } from 'react-router-dom'
import zaraLogo from '../assets/Zara_removebg.png'
import zaraModel from '../assets/ZaraLoginModel.webp'

export default function LoginPage() {
  return (
    <div className="d-flex vh-100 overflow-hidden" style={{ margin: 0, padding: 0 }}>
      {/* Left half */}
      <div
        className="w-50 position-relative bg-white d-flex flex-column align-items-center justify-content-center px-5"
        style={{ margin: 0, padding: 0 }}
      >
        <img
          src={zaraLogo}
          alt="Zara Logo"
          style={{
            position: 'absolute',
            top: 20,
            left: 40,
            height: 40,
            objectFit: 'contain',
            margin: 0,
          }}
        />

        <div style={{ width: '80%', maxWidth: '360px' }}>
          <h2 className="mb-4 fw-semibold">LOG IN</h2>
          <form>
            {/* EMAIL input */}
            <div className="mb-4 form-floating">
              <input
                type="email"
                className="form-control border-0 border-bottom border-3 border-dark rounded-0 shadow-none"
                id="email"
                placeholder="EMAIL"
                required
                style={{ borderRadius: 0 }}
              />
              <label htmlFor="email" className="text-black">
                EMAIL
              </label>
            </div>

            {/* PASSWORD input */}
            <div className="mb-3 form-floating">
              <input
                type="password"
                className="form-control border-0 border-bottom border-3 border-dark rounded-0 shadow-none"
                id="password"
                placeholder="PASSWORD"
                required
                style={{ borderRadius: 0 }}
              />
              <label htmlFor="password" className="text-black">
                PASSWORD
              </label>
            </div>

            {/* Forgot password */}
            <div className="mb-4">
              <Link to="/forgot-password" className="text-decoration-underline text-black" style={{ fontSize: '0.9rem' }}>
                Have you forgotten your password?
              </Link>
            </div>

            {/* LOG IN button */}
            <button type="submit" className="btn btn-dark w-100 mb-3 py-2 fw-semibold">
              LOG IN
            </button>

            {/* REGISTER button */}
            <Link
              to="/register"
              className="btn btn-light w-100 border border-dark py-2 fw-semibold d-block text-center text-black text-decoration-none"
            >
              REGISTER
            </Link>
          </form>

          {/* HELP link */}
          <div className="mt-4 text-center">
            <Link to="/help" className="text-decoration-underline text-black" style={{ fontSize: '0.9rem' }}>
              HELP
            </Link>
          </div>
        </div>
      </div>

      {/* Right half with model image */}
      <div className="w-50 d-flex justify-content-center align-items-center bg-white p-0" style={{ margin: 0, padding: 0 }}>
        <img
          src={zaraModel}
          alt="Zara Model"
          style={{ maxWidth: '100%', maxHeight: '100vh', objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}
