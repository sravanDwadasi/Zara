import React, { useEffect } from 'react';
import NavbarComponent from './components/NavbarComponent';
import HomePage from './components/Homepage';

export default function App() {
  useEffect(() => {
    // Disable vertical and horizontal scrolling on the entire page
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // Set white background for entire page
    document.documentElement.style.backgroundColor = "#ffffff";
    document.body.style.backgroundColor = "#ffffff";

    // Cleanup styles on unmount if needed
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.documentElement.style.backgroundColor = '';
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <NavbarComponent />
      {/* Add margin top so HomePage content not obscured by fixed navbar */}
      <div style={{ marginTop: "100px", backgroundColor: "#ffffff", minHeight: "100vh" }}>
        <HomePage />
      </div>
    </>
  );
}
