// src/components/WhatsAppFloat.jsx
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/whatsapp';

const WhatsAppFloat = () => (
  <button onClick={() => openWhatsApp("مرحباً تولا، لدي استفسار 🎁")} style={styles.btn} aria-label="واتساب">
    <MessageCircle size={24} color="white" />
  </button>
);

const styles = {
  btn: {
    position: 'fixed', bottom: '24px', left: '24px', width: '56px', height: '56px',
    borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center',
    justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
    zIndex: 9999, cursor: 'pointer', border: 'none', transition: '0.3s'
  }
};

export default WhatsAppFloat;