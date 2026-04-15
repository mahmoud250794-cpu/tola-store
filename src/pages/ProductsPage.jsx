// src/pages/ProductsPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Search, X } from 'lucide-react';
import { getProducts } from '../utils/dataManager';
import { openWhatsApp } from '../utils/whatsapp';
import Navbar from '../components/Navbar';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // جلب المنتجات من الذاكرة عند فتح الصفحة
  useEffect(() => {
    setProducts(getProducts());
  }, []);

  // تصفية المنتجات حسب البحث (غير حساس لحالة الأحرف)
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Tajawal, sans-serif' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#d63031', fontSize: '2rem' }}>كل منتجاتنا 🛍️</h1>

        {/* 🔍 شريط البحث */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
            <input
              type="text"
              placeholder="ابحث عن منتج أو تصنيف..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '12px 40px 12px 20px', borderRadius: '25px', border: '1px solid #ddd', fontSize: '16px', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' }}
            />
            {searchTerm ? (
              <X size={20} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#999', cursor: 'pointer' }} onClick={() => setSearchTerm("")} />
            ) : (
              <Search size={20} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
            )}
          </div>
        </div>

        {/* 📦 شبكة المنتجات */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}>
          {filtered.map(p => (
            <div key={p.id} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', transition: 'transform 0.3s' }}>
              <img 
                src={p.image} 
                alt={p.name} 
                style={{ width: '100%', height: '220px', objectFit: 'cover' }} 
                onError={(e) => { e.target.src = 'https://via.placeholder.com/400x300?text=No+Image'; }} 
              />
              <div style={{ padding: '20px' }}>
                <span style={{ fontSize: '12px', background: '#fff3cd', padding: '4px 10px', borderRadius: '12px', color: '#856404', display: 'inline-block', marginBottom: '8px' }}>
                  {p.category}
                </span>
                <h3 style={{ margin: '0 0 5px', fontSize: '18px', color: '#2d3436' }}>{p.name}</h3>
                <p style={{ color: '#636e72', fontSize: '14px', marginBottom: '15px', lineHeight: '1.5', height: '42px', overflow: 'hidden' }}>
                  {p.description}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                  <span style={{ fontWeight: 'bold', color: '#d63031', fontSize: '18px' }}>{p.price}</span>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <Link to={`/product/${p.id}`} style={{ padding: '8px 12px', background: '#f8f9fa', borderRadius: '8px', fontSize: '14px', textDecoration: 'none', color: '#2d3436', border: '1px solid #eee' }}>
                      تفاصيل
                    </Link>
                    <button 
                      onClick={() => openWhatsApp(p.name)} 
                      style={{ padding: '8px 12px', background: '#25D366', color: 'white', border: 'none', borderRadius: '8px', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}
                    >
                      <MessageCircle size={14} /> اطلب
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🚫 حالة عدم وجود نتائج */}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', color: '#999', marginTop: '60px', padding: '40px', background: '#f9f9f9', borderRadius: '16px' }}>
            <p style={{ fontSize: '18px', marginBottom: '10px' }}>لا توجد منتجات مطابقة للبحث 😔</p>
            <button onClick={() => setSearchTerm("")} style={{ padding: '10px 20px', background: '#d63031', color: 'white', border: 'none', borderRadius: '20px', cursor: 'pointer' }}>
              عرض كل المنتجات
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductsPage;