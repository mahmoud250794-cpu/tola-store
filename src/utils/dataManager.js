// src/utils/dataManager.js
const PRODUCTS_KEY = 'tola_products';
const SETTINGS_KEY = 'tola_settings';

const defaultProducts = [
  { id: 1, name: "كوب مخصص باسمك", description: "كوب سيراميك عالي الجودة، نطبع عليه الاسم أو الصورة التي تختارها.", price: "25 ₪", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400", category: "أكواب" },
  { id: 2, name: "وسادة مطبوعة", description: "وسادة ناعمة ومريحة مع طباعة صورتك المفضلة.", price: "45 ₪", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400", category: "ديكور" },
  { id: 3, name: "بوكس هدايا رومانسي", description: "صندوق هدايا أنيق يحتوي على ورد وشوكولاتة.", price: "120 ₪", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400", category: "بوكسات" }
];

const defaultSettings = {
  whatsappNumber: "970567074860", // ✅ تم تحديث الرقم هنا
  storeName: "متجر تولا 🎁",
  logoUrl: ""
};

export const getProducts = () => {
  const stored = localStorage.getItem(PRODUCTS_KEY);
  return stored ? JSON.parse(stored) : defaultProducts;
};

export const saveProducts = (products) => {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
};

export const addProduct = (newProduct) => {
  const current = getProducts();
  const updated = [...current, { ...newProduct, id: Date.now() }];
  saveProducts(updated);
  return updated;
};

export const deleteProduct = (id) => {
  const current = getProducts();
  const updated = current.filter(p => p.id !== id);
  saveProducts(updated);
  return updated;
};

export const getSettings = () => {
  const stored = localStorage.getItem(SETTINGS_KEY);
  return stored ? JSON.parse(stored) : defaultSettings;
};

export const saveSettings = (settings) => {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};