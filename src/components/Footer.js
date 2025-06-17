export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-green-400 mb-4">
              الباب الخيري
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              مشروع جمع الملابس والأحذية والأوراق والحقائب والكتب والأثاث وإعادة تدويرها لصالح الجمعيات الخيرية المتعاقد معها
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {/* Social media icons */}
              <a href="#" className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://x.com/albabalkhairi" className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xl font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">
                  نبذة عنا
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-green-400 transition-colors">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#partners" className="text-gray-300 hover:text-green-400 transition-colors">
                  شركاؤنا
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-green-400 transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xl font-bold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 space-x-reverse">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-300">خدمة العملاء 24/7</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-300">info@albabalkhairi.com</span>
              </div>
              <div className="flex items-center space-x-3 space-x-reverse">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-right">
              © 2024 الباب الخيري. جميع الحقوق محفوظة.
            </p>
            {/* <div className="flex space-x-6 space-x-reverse mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                شروط الاستخدام
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

