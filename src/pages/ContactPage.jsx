// src/pages/ContactPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import { MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

const ContactPage = () => (
  <>
    <Navbar />
    <div style={styles.container}>
      <h2 style={styles.title}>📞 تواصل معنا</h2>
      <p style={styles.subtitle}>نسعد بخدمتكم! اختاروا وسيلة التواصل المفضلة 👇</p>
      
      <div style={styles.grid}>
        <div style={styles.card}>
          <div style={{...styles.iconBox, background: '#e6fffa', color: '#25D366'}}>
            <MessageCircle size={32} />
          </div>
          <h3>واتساب</h3>
          <p>أسرع طريقة للطلب والاستفسار</p>
          <a href="https://wa.me/970567074860" target="_blank" rel="noopener" style={styles.btnWhatsApp}>
            تحدث معنا
          </a>
        </div>

        <div style={styles.card}>
          <div style={{...styles.iconBox, background: '#ebf8ff', color: '#3182ce'}}>
            <Phone size={32} />
          </div>
          <h3>اتصال هاتفي</h3>
          <p>متاح من 9 صباحاً حتى 9 مساءً</p>
          <a href="tel:+970567074860" style={styles.btnPhone}>
            اتصل الآن
          </a>
        </div>

        <div style={styles.card}>
          <div style={{...styles.iconBox, background: '#faf5ff', color: '#805ad5'}}>
            <Mail size={32} />
          </div>
          <h3>البريد الإلكتروني</h3>
          <p>للاستفسارات والطلبات الكبيرة</p>
          <a href="mailto:info@tola-store.com" style={styles.btnEmail}>
            أرسل إيميل
          </a>
        </div>

        <div style={styles.card}>
          <div style={{...styles.iconBox, background: '#fff5f5', color: '#e53e3e'}}>
            <MapPin size={32} />
          </div>
          <h3>موقعنا</h3>
          <p>فلسطين 🇵🇸 - توصيل لجميع المناطق</p>
          <a href="https://maps.google.com" target="_blank" rel="noopener" style={styles.btnMap}>
            عرض الخريطة
          </a>
        </div>
      </div>

      <div style={styles.socials}>
        <h3 style={{marginBottom: '16px', color: '#2d3436'}}>تابعونا على منصات التواصل:</h3>
        <div style={styles.socialLinks}>
          <a href="#" style={{...styles.socialBtn, background: '#1877F2'}}>Facebook</a>
          <a href="#" style={{...styles.socialBtn, background: '#E1306C'}}>Instagram</a>
          <a href="#" style={{...styles.socialBtn, background: '#000000'}}>TikTok</a>
        </div>
      </div>
    </div>
  </>
);

const styles = {
  container: { padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', fontFamily: 'Tajawal' },
  title: { textAlign: 'center', color: '#d63031', marginBottom: '10px', fontSize: '2rem' },
  subtitle: { textAlign: 'center', color: '#636e72', marginBottom: '40px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginBottom: '50px' },
  card: { background: 'white', padding: '30px 20px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center', transition: 'transform 0.3s' },
  iconBox: { width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' },
  btnWhatsApp: { display: 'block', background: '#25D366', color: 'white', padding: '10px 20px', borderRadius: '25px', textDecoration: 'none', marginTop: '15px', fontWeight: 'bold' },
  btnPhone: { display: 'block', background: '#3182ce', color: 'white', padding: '10px 20px', borderRadius: '25px', textDecoration: 'none', marginTop: '15px', fontWeight: 'bold' },
  btnEmail: { display: 'block', background: '#805ad5', color: 'white', padding: '10px 20px', borderRadius: '25px', textDecoration: 'none', marginTop: '15px', fontWeight: 'bold' },
  btnMap: { display: 'block', background: '#e53e3e', color: 'white', padding: '10px 20px', borderRadius: '25px', textDecoration: 'none', marginTop: '15px', fontWeight: 'bold' },
  socials: { textAlign: 'center', marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '40px' },
  socialLinks: { display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' },
  socialBtn: { padding: '10px 20px', borderRadius: '8px', color: 'white', textDecoration: 'none', fontWeight: '500', minWidth: '100px' }
};

export default ContactPage;