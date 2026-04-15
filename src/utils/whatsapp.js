// src/utils/whatsapp.js
export const WHATSAPP_NUMBER = "970567074860";

export const createWhatsAppLink = (productName, customerMessage = "") => {
  const message = `مرحباً متجر تولا 🎁\nأريد طلب المنتج: "${productName}"\n${customerMessage ? `ملاحظة: ${customerMessage}` : ''}\nأرجو تأكيد الطلب والسعر النهائي.`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

export const openWhatsApp = (productName) => {
  const link = createWhatsAppLink(productName);
  window.open(link, '_blank');
};