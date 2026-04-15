// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1️⃣ استيراد الصفحات
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetail from './pages/ProductDetail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminDashboard from './pages/AdminDashboard'; // 👈 أضفنا صفحة الإدارة
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <Router>
      <div className="app" dir="rtl" lang="ar">
        {/* 2️⃣ هنا مكان <Routes> بالضبط */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* 👇 أضف هذا السطر الجديد هنا بالتحديد */}
          <Route path="/admin" element={<AdminDashboard />} />
          
        </Routes>
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;