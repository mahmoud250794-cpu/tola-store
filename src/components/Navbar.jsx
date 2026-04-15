// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gift, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={styles.nav}>
      <div style={styles.container}>
        <Link to="/" style={styles.logo}>
          <Gift size={24} color="#d63031" />
          <span>تولا 🎁</span>
        </Link>

        <div style={{...styles.menu, display: isOpen ? 'flex' : undefined}}>
          <Link to="/" style={styles.link} onClick={() => setIsOpen(false)}>الرئيسية</Link>
          <Link to="/products" style={styles.link} onClick={() => setIsOpen(false)}>المنتجات</Link>
          <Link to="/about" style={styles.link} onClick={() => setIsOpen(false)}>من نحن</Link>
          <Link to="/contact" style={styles.link} onClick={() => setIsOpen(false)}>تواصل معنا</Link>
        </div>

        <button style={styles.mobileBtn} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

const styles = {
  nav: { background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 100, padding: '12px 0' },
  container: { maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  logo: { display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700', fontSize: '1.3rem', color: '#2d3436', textDecoration: 'none' },
  menu: { display: 'flex', gap: '24px', alignItems: 'center' },
  link: { fontWeight: '500', color: '#636e72', textDecoration: 'none', padding: '8px 0' },
  mobileBtn: { display: 'none', background: 'none', border: 'none', color: '#2d3436', cursor: 'pointer' }
};

if (window.innerWidth <= 768) {
  styles.menu = { ...styles.menu, display: 'none', flexDirection: 'column', position: 'absolute', top: '100%', right: 0, left: 0, background: 'white', padding: '20px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' };
  styles.mobileBtn = { ...styles.mobileBtn, display: 'block' };
}

export default Navbar;