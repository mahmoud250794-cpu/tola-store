// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, Plus, Save, LogOut, Settings, Package } from 'lucide-react';
import { getProducts, addProduct, deleteProduct, getSettings, saveSettings } from '../utils/dataManager';
import Navbar from '../components/Navbar';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("products"); // 'products' or 'settings'
  
  // حالة المنتجات
  const [products, setProducts] = useState([]);
  const [newProd, setNewProd] = useState({ name: "", price: "", category: "", description: "", image: "" });

  // حالة الإعدادات
  const [settings, setSettings] = useState({ whatsappNumber: "", storeName: "" });

  // التحقق من الدخول عند التحميل
  useEffect(() => {
    const auth = sessionStorage.getItem('tola_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadData();
    }
  }, []);

  const loadData = () => {
    setProducts(getProducts());
    setSettings(getSettings());
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === "tola123") { // كلمة المرور الافتراضية
      setIsAuthenticated(true);
      sessionStorage.setItem('tola_admin_auth', 'true');
      loadData();
    } else {
      alert("كلمة المرور خاطئة! حاول مرة أخرى.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('tola_admin_auth');
    setIsAuthenticated(false);
    navigate("/");
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProd.name || !newProd.price) return alert("الاسم والسعر مطلوبان!");
    addProduct(newProd);
    setProducts(getProducts()); // تحديث القائمة
    setNewProd({ name: "", price: "", category: "", description: "", image: "" }); // تصفير النموذج
    alert("تم إضافة المنتج بنجاح! ✅");
  };

  const handleDelete = (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذا المنتج؟")) {
      deleteProduct(id);
      setProducts(getProducts());
    }
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    saveSettings(settings);
    alert("تم حفظ الإعدادات! سيتم تحديث الموقع. ✅");
  };

  // شاشة تسجيل الدخول
  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff5f5' }}>
        <form onSubmit={handleLogin} style={{ background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', textAlign: 'center', width: '300px' }}>
          <h2 style={{ marginBottom: '20px', color: '#d63031' }}>🔒 دخول المدير</h2>
          <input type="password" placeholder="أدخل كلمة المرور" value={password} onChange={e => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ddd' }} />
          <button type="submit" style={{ width: '100%', padding: '10px', background: '#d63031', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>دخول</button>
          <p style={{ marginTop: '15px', fontSize: '12px', color: '#999' }}>كلمة المرور الافتراضية: tola123</p>
        </form>
      </div>
    );
  }

  // لوحة التحكم الرئيسية
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ color: '#2d3436' }}>⚙️ لوحة تحكم تولا</h2>
          <button onClick={handleLogout} style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 16px', background: '#ff7675', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
            <LogOut size={16}/> خروج
          </button>
        </div>

        {/* التبويبات */}
        <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
          <button onClick={() => setActiveTab('products')} style={{ ...styles.tabBtn, background: activeTab === 'products' ? '#d63031' : '#eee', color: activeTab === 'products' ? 'white' : '#333' }}>
            <Package size={18}/> المنتجات
          </button>
          <button onClick={() => setActiveTab('settings')} style={{ ...styles.tabBtn, background: activeTab === 'settings' ? '#d63031' : '#eee', color: activeTab === 'settings' ? 'white' : '#333' }}>
            <Settings size={18}/> إعدادات المتجر
          </button>
        </div>

        {/* محتوى تبويب المنتجات */}
        {activeTab === 'products' && (
          <div>
            <h3 style={{ marginBottom: '15px' }}>إضافة منتج جديد</h3>
            <form onSubmit={handleAddProduct} style={{ background: 'white', padding: '20px', borderRadius: '12px', marginBottom: '30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              <input placeholder="اسم المنتج" value={newProd.name} onChange={e => setNewProd({...newProd, name: e.target.value})} style={styles.input} required />
              <input placeholder="السعر (مثلاً: 25 ₪)" value={newProd.price} onChange={e => setNewProd({...newProd, price: e.target.value})} style={styles.input} required />
              <input placeholder="التصنيف (مثلاً: أكواب)" value={newProd.category} onChange={e => setNewProd({...newProd, category: e.target.value})} style={styles.input} />
              <input placeholder="رابط الصورة (URL)" value={newProd.image} onChange={e => setNewProd({...newProd, image: e.target.value})} style={styles.input} />
              <textarea placeholder="وصف المنتج" value={newProd.description} onChange={e => setNewProd({...newProd, description: e.target.value})} style={{...styles.input, gridColumn: '1 / -1'}} rows="2" />
              <button type="submit" style={{ ...styles.btnPrimary, gridColumn: '1 / -1' }}><Plus size={18}/> إضافة المنتج</button>
            </form>

            <h3 style={{ marginBottom: '15px' }}>قائمة المنتجات ({products.length})</h3>
            <div style={{ display: 'grid', gap: '10px' }}>
              {products.map(p => (
                <div key={p.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <img src={p.image} alt="" style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px' }} />
                    <div>
                      <strong>{p.name}</strong>
                      <span style={{ marginRight: '10px', color: '#636e72', fontSize: '0.9rem' }}>{p.price}</span>
                    </div>
                  </div>
                  <button onClick={() => handleDelete(p.id)} style={{ background: '#ff7675', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }}><Trash2 size={16}/></button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* محتوى تبويب الإعدادات */}
        {activeTab === 'settings' && (
          <form onSubmit={handleSaveSettings} style={{ background: 'white', padding: '30px', borderRadius: '12px', maxWidth: '500px' }}>
            <h3 style={{ marginBottom: '20px' }}>إعدادات عامة</h3>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>رقم الواتساب (مع مفتاح الدولة)</label>
              <input type="text" value={settings.whatsappNumber} onChange={e => setSettings({...settings, whatsappNumber: e.target.value})} style={styles.input} placeholder="970591234567" />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>اسم المتجر</label>
              <input type="text" value={settings.storeName} onChange={e => setSettings({...settings, storeName: e.target.value})} style={styles.input} />
            </div>
            <button type="submit" style={styles.btnPrimary}><Save size={18}/> حفظ الإعدادات</button>
          </form>
        )}
      </div>
    </>
  );
};

const styles = {
  tabBtn: { display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold', transition: '0.3s' },
  input: { padding: '10px', borderRadius: '8px', border: '1px solid #ddd', fontFamily: 'inherit' },
  btnPrimary: { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', background: '#25D366', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }
};

export default AdminDashboard;