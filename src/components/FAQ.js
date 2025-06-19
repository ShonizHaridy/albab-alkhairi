'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "ما هي الطلبات التي تستقبلونها؟",
      answer: "نستقبل الملابس والأحذية والأوراق والحقائب والكتب والأثاث بجميع حالاتها، سواء كانت جديدة أو مستعملة أو تحتاج إلى إصلاح."
    },
    {
      question: "ما هي الجمعيات الخيرية المتعاقد معها؟",
      answer: "نعمل حالياً مع جمعية التنمية الأهلية بشبرا، ونسعى لتوسيع شراكاتنا مع المزيد من الجمعيات المعتمدة."
    },
    {
      question: "ما هي أوقات العمل؟",
      answer: "نعمل جميع أيام الأسبوع على مدار الساعة. خدمة العملاء متاحة 24/7 لاستقبال طلباتكم."
    },
    {
      question: "هل الخدمة مجانية؟",
      answer: "نعم، جميع خدماتنا مجانية تماماً. لا نتقاضى أي رسوم مقابل جمع التبرعات من منازلكم."
    },
    {
      question: "ما هي المناطق التي تغطونها؟",
      answer: "نغطي حالياً جميع أنحاء مدينة الرياض، ونخطط لتوسيع خدماتنا لتشمل مدن أخرى في المملكة."
    },
    {
      question: "كم يستغرق وصول المندوب؟",
      answer: "عادة ما يصل المندوب خلال 24-48 ساعة من تقديم الطلب، حسب الموقع وكمية الطلبات."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            الأسئلة الشائعة
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  className="w-full px-8 py-6 text-right flex justify-between items-center hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-semibold text-gray-800">
                    {faq.question}
                  </span>
                  <div className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-8 pb-6">
                    <div className="bg-green-50 rounded-lg p-6 border-r-4 border-green-500">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact section */}
          <div className="mt-16 text-center">
            <div className="bg-green-600 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">
                لديك سؤال آخر؟
              </h3>
              <p className="text-green-100 mb-6">
                فريق خدمة العملاء جاهز للإجابة على جميع استفساراتكم
              </p>
              <button 
                onClick={() => window.open("https://wa.me/+966581396464", "_blank")}
                className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer"
              >
                تواصل معنا
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

