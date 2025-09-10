import React, { useState } from 'react';
import { Offcanvas, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/zara_removebg.png';
import HamburgerIcon from './HamburgerIcon'; // Adjust path if needed

export default function NavbarComponent() {
  const [showMenu, setShowMenu] = useState(false);

  const navLinkStyle = {
    fontFamily: "'Fira Code', monospace",
    fontWeight: 100,
    fontSize: '0.8rem',
    letterSpacing: '0.02em',
    color: '#000',
    textDecoration: 'none',
  };

  return (
    <>
      <nav
        className="d-flex align-items-center justify-content-between px-3 bg-white"
        style={{
          height: "60px",
          width: "100vw",
          position: "fixed",
          top: "20px",
          left: 0,
          zIndex: 1100,  // kept high so navbar stays above menu
          overflow: "visible",
          boxShadow: "none",
          borderBottom: "none",
          backgroundColor: "#fff",
        }}
      >
        <div className="d-flex align-items-center" style={{ gap: "2.5rem", height: "70px", overflow: "visible" }}>
          {/* Hamburger */}
          <div style={{ position: 'relative', left: '30px', top: '20px' }}>
            <HamburgerIcon toggled={showMenu} toggle={setShowMenu} width={60} height={35} color="black" />
          </div>
          {/* Logo */}
          <div style={{ height: "60px", overflow: "visible", display: "flex", alignItems: "center", marginLeft: "40px" }}>
            <Link to="/">
            <img
              src={Logo}
              alt="ZARA Logo"
              style={{
                height: "110px",
                width: "auto",
                objectFit: "contain",
                userSelect: "none",
                pointerEvents: "none",
                marginTop: "30px",
                cursor: "pointer",
              }}
            />
            </Link>
          </div>
        </div>

        <div className="d-flex align-items-center" style={{ gap: "2rem", fontFamily: "'Fira Code', monospace" }}>
          <Form className="d-flex" style={{ margin: 0 }}>
            <FormControl
              type="search"
              placeholder="SEARCH"
              className="border-0"
              style={{
                borderBottom: "3px solid #000",
                borderRadius: 0,
                background: "transparent",
                color: "#000",
                fontWeight: 300,
                fontFamily: "'Fira Code', monospace",
                fontSize: "0.8rem",
                height: "34px",
                width: "150px",
                minWidth: "100px",
                boxShadow: "none",
                outline: "none",
                paddingBottom: "4px",
              }}
            />
          </Form>
          <div className="d-flex align-items-center" style={{ gap: "1.5rem" }}>
            <Link to="/login" style={navLinkStyle}>LOG IN</Link>
            <Link to="/help" style={navLinkStyle}>HELP</Link>
            <Link to="/shopping-bag" style={navLinkStyle}>SHOPPING BAG</Link>
          </div>
        </div>
      </nav>

      {/* Offcanvas menu sliding from left with no backdrop dimming */}
      <Offcanvas
        show={showMenu}
        onHide={() => setShowMenu(false)}
        placement="start"
        backdrop={false}     // no dimmed background
        scroll={true}        // allow background scrolling
        style={{
          zIndex: 1000,       // less than navbar to be under it
          marginTop: '80px',  // push menu below navbar (60px height + 20px top)
          border: 'none',     // remove border
          boxShadow: 'none',  // remove shadow for clean look
          width: '250px',
        }}
      >
        {/* Removed Offcanvas.Header and close button */}
        <Offcanvas.Body style={{ fontFamily: "'Fira Code', monospace", fontWeight: 'lighter', paddingTop: '1rem' }}>
          <div className="d-flex flex-column" style={{ gap: '0.75rem',marginTop: '80px', marginLeft: '40px' }}>
            <Link to="/women" className="text-black text-decoration-none" style={{ fontWeight: 'lighter' }}>
              WOMEN
            </Link>
            <Link to="/men" className="text-black text-decoration-none" style={{ fontWeight: 'lighter' }}>
              MAN
            </Link>
            <Link to="/kids" className="text-black text-decoration-none" style={{ fontWeight: 'lighter' }}>
              KIDS
            </Link>
            <Link to="/perfumes" className="text-black text-decoration-none" style={{ fontWeight: 'lighter' }}>
              PERFUMES
            </Link>
            <Link to="/travel" className="text-black text-decoration-none" style={{ fontWeight: 'lighter' }}>
              TRAVEL MODE
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
