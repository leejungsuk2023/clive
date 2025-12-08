import { Heart, Zap, Sparkles } from 'lucide-react';

export function ProblemSolution() {
  const benefits = [
    {
      icon: Heart,
      title: 'เจ็บน้อยกว่า',
      description: 'เทคนิคการผ่าตัดที่รักษาเนื้อเยื่อธรรมชาติ ช่วยลดอาการเจ็บปวดหลังผ่าตัดอย่างมีนัยสำคัญ',
      color: 'from-rose-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'หายเร็ว 1 วัน',
      description: 'กลับมาทำกิจวัตรประจำวันได้ภายใน 24 ชั่วโมง พักฟื้นน้อย และกระบวนการรักษาที่รวดเร็วกว่า',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Sparkles,
      title: 'เหมาะกับคนเอเชีย',
      description: 'ออกแบบมาสำหรับสัดส่วนของผู้หญิงเอเชียโดยเฉพาะ เพื่อผลลัพธ์ที่ดูเป็นธรรมชาติและกลมกลืน',
      color: 'from-amber-500 to-yellow-500',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <span className="text-[var(--gold)] text-xs sm:text-sm">ทำไมต้องเลือกพรีเซิร์ฟ</span>
          </div>
          <h2 className="text-[var(--navy-900)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            อนาคตของการผ่าตัดเสริมหน้าอก
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            สัมผัสเทคนิคพรีเซิร์ฟที่ปฏิวัติวงการ ซึ่งให้ความสำคัญกับความสะดวกสบาย การฟื้นตัว และความงามตามธรรมชาติของคุณ
          </p>
        </div>

        {/* Benefits Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[var(--gold)]/30 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${benefit.color} p-3 sm:p-4 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-[var(--navy-900)] text-xl sm:text-2xl font-bold mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-3 leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-[var(--navy-700)]">
                    <div className="w-2 h-2 bg-[var(--gold)] rounded-full" />
                    <span className="text-xs sm:text-sm">ได้รับการพิสูจน์ทางคลินิก</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-gray-600 mb-4 text-sm sm:text-base px-4">
            ร่วมเป็นส่วนหนึ่งกับผู้ป่วยหลายร้อยคนที่พึงพอใจกับเทคนิคพรีเซิร์ฟ
          </p>
          <div className="flex justify-center gap-1 sm:gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--gold)] fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">คะแนน 5.0 จาก 500+ รีวิว</p>
        </div>
      </div>
    </section>
  );
}