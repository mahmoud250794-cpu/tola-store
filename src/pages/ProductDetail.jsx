// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Star, ShieldCheck, Truck } from 'lucide-react';
import { getProducts } from '../utils/dataManager'; // ✅ استيراد الدالة الجديدة
import { openWhatsApp } from '../utils/whatsapp';
import Navbar from '../components/Navbar';

const ProductDetail = () => {
  const { id } = useParams();
  
  // ✅ جلب جميع المنتجات (بما فيها المضافة من لوحة التحكم)
  const products = getProducts();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return (
    <div style={{padding: '100px', textAlign: 'center', fontFamily: 'inherit'}}>
      <h2>المنتج غير موجود ❌</h2>
      <Link to="/products" style={{color: '#d63031', marginTop: '10px', display: 'inline-block'}}>العودة للمنتجات</Link>
    </div>
  );

  return (
    <>
      <Navbar />
      <div style={{maxWidth: '1000px', margin: '40px auto', padding: '0 20px'}}>
        <Link to="/products" style={{display: 'inline-flex', alignItems: 'center', gap: '5px', color: '#636e72', marginBottom: '20px', textDecoration: 'none'}}>
          <ArrowRight size={16}/> العودة للمنتجات
        </Link>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', background: 'white', padding: '30px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)'}}>
          {/* الصورة */}
          <div>
            <img src={product.image} alt={product.name} style={{width: '100%', borderRadius: '16px', objectFit: 'cover'}} />
          </div>
          
          {/* التفاصيل */}
          <div>
            <span style={{background: '#fff3cd', padding: '6px 12px', borderRadius: '20px', fontSize: '14px', color: '#856404'}}>{product.category}</span>
            <h1 style={{fontSize: '2rem', margin: '15px 0', color: '#2d3436'}}>{product.name}</h1>
            
            <div style={{display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '15px', color: '#fdcb6e'}}>
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#fdcb6e" color="#fdcb6e"/>)}
              <span style={{color: '#636e72', fontSize: '14px', marginRight: '5px'}}>(تقييم ممتاز)</span>
            </div>
            
            <p style={{fontSize: '1.1rem', color: '#636e72', lineHeight: '1.7', marginBottom: '25px'}}>{product.description}</p>
            
            <div style={{fontSize: '2rem', fontWeight: 'bold', color: '#d63031', marginBottom: '25px'}}>{product.price}</div>
            
            {/* ✅ زر الواتساب المحسن */}
            <button 
              onClick={() => openWhatsApp(product.name)} 
              style={{width: '100%', padding: '15px', background: '#25D366', color: 'white', border: 'none', borderRadius: '12px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px'}}
            >
              <MessageCircle size={24}/> اطلب الآن عبر واتساب
            </button>
            <p style={{textAlign: 'center', fontSize: '13px', color: '#999', marginTop: '10px'}}>سيتم تحويلك لمحادثة واتساب جاهزة باسم المنتج</p>
            
            <div style={{marginTop: '30px', borderTop: '1px solid #eee', paddingTop: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#636e72'}}>
                <Truck size={20} color="#d63031"/> توصيل سريع
              </div>
              <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#636e72'}}>
                <ShieldCheck size={20} color="#d63031"/> جودة مضمونة
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;