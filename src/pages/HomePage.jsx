// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Sparkles, MessageCircle } from 'lucide-react';
import { products } from '../data/products';
import { openWhatsApp } from '../utils/whatsapp';
import Navbar from '../components/Navbar';

const HomePage = () => {
  const featured = products.slice(0, 3);

  return (
    <>
      <Navbar />
      
      {/* البانر الرئيسي */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>هدايا تُلامس <span style={{color: '#d63031'}}>القلب</span> ✨</h1>
          <p style={styles.heroSubtitle}>في متجر تولا، نصمم لك هدايا مخصصة تحمل مشاعرك وتخلي ذكرياتك للأبد 🎁</p>
          <div style={styles.heroButtons}>
            <Link to="/products" style={styles.btnPrimary}>تصفح المنتجات <ArrowLeft size={18} /></Link>
            <button style={styles.btnSecondary} onClick={() => openWhatsApp("استفسار عام")}>
              <MessageCircle size={18} /> تحدث معنا
            </button>
          </div>
        </div>
      </section>

      {/* المنتجات المميزة */}
      <section style={styles.section}>
        <div className="container">
          <h2 className="section-title">منتجاتنا المميزة 💝</h2>
          <div style={styles.grid}>
            {featured.map(p => (
              <div key={p.id} style={styles.card}>
                <div style={styles.imgWrap}>
                  <img src={p.image} alt={p.name} style={styles.img} />
                  <span style={styles.tag}>{p.category}</span>
                </div>
                <div style={styles.info}>
                  <h3 style={styles.name}>{p.name}</h3>
                  <p style={styles.desc}>{p.description}</p>
                  <div style={styles.footer}>
                    <span style={styles.price}>{p.price}</span>
                    <button style={styles.waBtn} onClick={() => openWhatsApp(p.name)}>
                      <MessageCircle size={16} /> اطلب الآن
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '40px'}}>
            <Link to="/products" style={styles.viewAll}>عرض جميع المنتجات →</Link>
          </div>
        </div>
      </section>

      {/* لماذا تولا؟ */}
      <section style={styles.values}>
        <div className="container">
          <h2 className="section-title">لماذا تختار تولا؟ 🌹</h2>
          <div style={styles.grid}>
            <div style={styles.valueCard}><Heart size={32} color="#d63031" /><h4>صنع بحب</h4><p>كل هدية تُجهز بعناية فائقة</p></div>
            <div style={styles.valueCard}><Sparkles size={32} color="#fdcb6e" /><h4>تخصيص كامل</h4><p>اختر الاسم، الصورة، التصميم</p></div>
            <div style={styles.valueCard}><MessageCircle size={32} color="#25D366" /><h4>طلب سريع</h4><p>اطلب مباشرة عبر واتساب</p></div>
          </div>
        </div>
      </section>
    </>
  );
};

const styles = {
  hero: { background: 'linear-gradient(135deg, #fff5f5 0%, #ffeaa7 50%, #fab1a0 100%)', padding: '80px 20px 60px', textAlign: 'center', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  heroContent: { maxWidth: '700px' },
  heroTitle: { fontSize: '2.5rem', fontWeight: '700', color: '#2d3436', marginBottom: '16px', lineHeight: '1.3' },
  heroSubtitle: { fontSize: '1.2rem', color: '#636e72', marginBottom: '32px', lineHeight: '1.6' },
  heroButtons: { display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' },
  btnPrimary: { display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', background: '#d63031', color: 'white', borderRadius: '50px', fontWeight: '600', textDecoration: 'none', transition: '0.3s' },
  btnSecondary: { display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 32px', background: 'white', color: '#2d3436', borderRadius: '50px', fontWeight: '600', border: '2px solid #d63031', cursor: 'pointer', transition: '0.3s' },
  section: { padding: '60px 0' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginTop: '32px' },
  card: { background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transition: 'transform 0.3s' },
  imgWrap: { position: 'relative' },
  img: { width: '100%', height: '200px', objectFit: 'cover' },
  tag: { position: 'absolute', top: '12px', right: '12px', background: 'rgba(253,203,110,0.9)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: '500' },
  info: { padding: '20px' },
  name: { fontSize: '1.2rem', fontWeight: '600', marginBottom: '8px', color: '#2d3436' },
  desc: { color: '#636e72', fontSize: '0.95rem', marginBottom: '16px', lineHeight: '1.5' },
  footer: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  price: { fontSize: '1.3rem', fontWeight: '700', color: '#d63031' },
  waBtn: { display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '10px 20px', background: '#25D366', color: 'white', borderRadius: '50px', fontWeight: '500', fontSize: '0.9rem', border: 'none', cursor: 'pointer' },
  viewAll: { color: '#d63031', fontWeight: '600', fontSize: '1.1rem', textDecoration: 'none' },
  values: { background: 'white', padding: '60px 0' },
  valueCard: { textAlign: 'center', padding: '24px', borderRadius: '16px', background: '#fff5f5' }
};

export default HomePage;