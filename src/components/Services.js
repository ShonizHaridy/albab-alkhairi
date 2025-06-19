import Image from 'next/image';
import clothes from '../images/clothes.jpeg'; 
import shoes from '../images/shoes.jpg'; 
import furniture from '../images/furniture.jpg'

export default function Services() {
  const services = [
    {
      title: "ملابس",
      description: "جمع الملابس المستعملة بجميع حالاتها وأنواعها",
      icon: (
              <Image
                src={clothes}
                alt="الباب الخيري"
                width={96}
                height={96}
                className="rounded-lg flex-shrink-0 object-cover"
              />
      ),
      color: ""
    },
    {
      title: "أحذية",
      description: "أحذية مستعملة من جميع الأنواع والأحجام",
      icon: (
              <Image
                src={shoes}
                alt="الباب الخيري"
                width={96}
                height={96}
                className="rounded-lg flex-shrink-0 object-cover"
              />
      ),
      color: ""
    },
    {
      title: "أوراق",
      description: "جمع الأوراق والمستندات القديمة لإعادة التدوير",
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      ),
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "حقائب",
      description: "حقائب مدرسية وحقائب يد وحقائب سفر مستعملة",
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "كتب",
      description: "كتب مدرسية وثقافية ومجلات قديمة",
      icon: (
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      ),
      color: "from-red-500 to-red-600"
    },
    {
      title: "أثاث",
      description: "قطع أثاث منزلي ومكتبي مستعمل",
      icon: (
              <Image
                src={furniture}
                alt="الباب الخيري"
                width={96}
                height={96}
                className="rounded-lg flex-shrink-0 object-cover"
              />
      ),
      color: ""
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            خدماتنا
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            نستقبل جميع أنواع المواد المستعملة لإعادة تدويرها وتوزيعها على الجمعيات الخيرية
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Icon */}
                <div className={`bg-gradient-to-br ${service.color} text-white w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              نستقبل جميع الحالات
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              نحن نستقبل جميع المواد المذكورة أعلاه بجميع حالاتها، سواء كانت جديدة أو مستعملة أو تحتاج إلى إصلاح. 
              هدفنا هو إعادة التدوير والاستفادة القصوى من كل ما يمكن إعادة استخدامه.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

