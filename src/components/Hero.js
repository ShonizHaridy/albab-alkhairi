'use client';

import { useState } from 'react';

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    neighborhood: '',
    requestType: {
      clothes: false,
      shoes: false,
      papers: false,
      bags: false,
      books: false,
      furniture: false,
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (item) => {
    setFormData(prev => ({
      ...prev,
      requestType: {
        ...prev.requestType,
        [item]: !prev.requestType[item]
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('تم إرسال طلبكم بنجاح! سيتم التواصل معكم قريباً');
  };

  return (
<section id="home" className="hero-section relative min-h-screen bg-gradient-to-br from-green-800 via-green-700 to-green-900 pt-20">
        {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right side - Content */}
          <div className="text-white text-center lg:text-right order-2 lg:order-1">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-green-300 leading-tight">
              الباب الخيري
            </h1>
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed text-green-100">
              مشروع جمع الملابس والأحذية والأوراق والحقائب والكتب والأثاث وإعادة تدويرها لصالح الجمعيات الخيرية المتعاقد معها
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <button 
                onClick={() => document.getElementById('request').scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-500 hover:bg-green-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                اطلب مندوب الآن
              </button>
              <button 
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-green-300 text-green-300 hover:bg-green-300 hover:text-green-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                تعرف علينا
              </button>
            </div>
          </div>

          {/* Left side - Form */}
          <div id="request" className="bg-white rounded-2xl shadow-2xl p-8 order-1 lg:order-2 backdrop-blur-sm bg-opacity-95">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              طلب مندوب الباب الخيري
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  الاسم
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="الاسم الكامل"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  الرقم
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="رقم الهاتف"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  المدينة
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="">اختر المدينة</option>
                  <option value="riyadh">الرياض</option>
                  <option value="jeddah">جدة</option>
                  <option value="dammam">الدمام</option>
                  <option value="mecca">مكة</option>
                  <option value="medina">المدينة</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  الحي
                </label>
                <input
                  type="text"
                  name="neighborhood"
                  value={formData.neighborhood}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  placeholder="اسم الحي"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-4">
                  نوع الطلب
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { key: 'clothes', label: 'ملابس' },
                    { key: 'shoes', label: 'أحذية' },
                    { key: 'papers', label: 'أوراق' },
                    { key: 'bags', label: 'حقائب' },
                    { key: 'books', label: 'كتب' },
                    { key: 'furniture', label: 'أثاث' }
                  ].map(item => (
                    <label key={item.key} className="flex items-center space-x-3 space-x-reverse cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-colors">
                      <input
                        type="checkbox"
                        checked={formData.requestType[item.key]}
                        onChange={() => handleCheckboxChange(item.key)}
                        className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                      />
                      <span className="text-gray-700 font-medium">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                إرسال الطلب
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

