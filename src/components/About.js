import Image from 'next/image';
import logo from '../images/logo_transparent.png'; // Adjust the path as necessary

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right side - Content */}
          <div className="text-center lg:text-right order-2 lg:order-1">
            <div className="flex justify-center lg:justify-end mb-6">
              <div className="p-6">
              <Image
                src={logo}
                alt="الباب الخيري"
                width={96}
                height={96}
                className="rounded-lg flex-shrink-0"
              />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              نبذة عن الباب الخيري
            </h2>
            <div className="text-lg text-gray-600 leading-relaxed space-y-6">
              <p className="text-xl">
                مشروع الباب الخيري يعمل على جمع الملابس والأحذية والأوراق والحقائب والكتب والأثاث وإعادة تدويرها لصالح الجمعيات الخيرية المتعاقد معها
              </p>
              <p>
                وفي حال طلب المندوب يتم أخذ الطلب من جميع أنحاء الرياض مجاناً ولا يوجد طلب أي رسوم
              </p>
              <div className="bg-green-50 p-6 rounded-lg border-r-4 border-green-500">
                <h3 className="font-bold text-green-800 mb-2">خدمة مجانية 100%</h3>
                <p className="text-green-700">
                  نحن نقدم خدماتنا مجاناً تماماً لجميع سكان الرياض، بهدف تسهيل عملية التبرع وإعادة التدوير
                </p>
              </div>
            </div>
          </div>

          {/* Left side - Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {/* Icons for different items */}
                    <div className="text-center">
                      <div className="bg-green-100 p-4 rounded-full mb-2">
                        <svg className="w-8 h-8 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                          <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-gray-700">ملابس</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-100 p-4 rounded-full mb-2">
                        <svg className="w-8 h-8 text-blue-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-gray-700">أحذية</p>
                    </div>
                    <div className="text-center">
                      <div className="bg-yellow-100 p-4 rounded-full mb-2">
                        <svg className="w-8 h-8 text-yellow-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                          <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 001 1h6a1 1 0 001-1V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium text-gray-700">كتب</p>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">إعادة التدوير</h3>
                    <p className="text-gray-600">لصالح الجمعيات الخيرية</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-green-500 rounded-full opacity-50 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

