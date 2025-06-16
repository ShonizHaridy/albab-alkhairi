import Image from 'next/image';
import logo from '../images/gameia_tanmia_ahlia_logo.png'; // Adjust path based on component location


export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            شركاؤنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نعمل مع الجمعيات الخيرية المعتمدة لضمان وصول التبرعات إلى المستحقين
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main partner */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-12 shadow-lg border border-green-200">
            <div className="text-center">
            <div className=" flex items-center justify-center mx-auto mb-8 overflow-hidden">
              <Image
                src={logo}
                alt="جمعية التنمية الأهلية بشبرا"
                // width={48}
                // height={48}
                className="object-contain"
              />
            </div>
              
              {/* <h3 className="text-3xl font-bold text-gray-800 mb-4">
                جمعية التنمية الأهلية بشبرا
              </h3> */}
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                شريكنا الأساسي في توزيع التبرعات وإعادة التدوير. جمعية معتمدة تعمل على خدمة المجتمع وتوفير الاحتياجات الأساسية للأسر المحتاجة.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">خدمة المجتمع</h4>
                  <p className="text-gray-600 text-sm">تقديم الخدمات الاجتماعية والإنسانية</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">إعادة التدوير</h4>
                  <p className="text-gray-600 text-sm">تدوير المواد بطريقة صحية ومستدامة</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-md">
                  <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">التوزيع العادل</h4>
                  <p className="text-gray-600 text-sm">ضمان وصول التبرعات للمستحقين</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action for partnerships */}
          <div className="mt-12 text-center">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                هل أنت جمعية خيرية؟
              </h3>
              <p className="text-gray-600 mb-6">
                نرحب بالشراكة مع الجمعيات الخيرية المعتمدة لتوسيع نطاق خدماتنا
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                تواصل معنا للشراكة
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

