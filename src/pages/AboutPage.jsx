// src/pages/AboutPage.jsx - مؤقت
import React from 'react';
import Navbar from '../components/Navbar';

const AboutPage = () => (
  <>
    <Navbar />
    <div style={{padding: '100px 20px', textAlign: 'center', fontFamily: 'Tajawal'}}>
      <h2>💌 من نحن</h2>
      <p>متجر تولا للهدايا والطباعة - فلسطين 🇵🇸</p>
      <p style={{maxWidth: '600px', margin: '20px auto', color: '#636e72'}}>
        نصمم هدايا مخصصة تحمل مشاعرك وتخلي ذكرياتك للأبد.
      </p>
      <a href="/" style={{color: '#d63031'}}>← العودة للرئيسية</a>
    </div>
  </>
);

export default AboutPage;