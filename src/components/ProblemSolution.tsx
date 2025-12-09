import { Heart, Clock, Users } from 'lucide-react';

export function ProblemSolution() {
  const benefits = [
    {
      icon: Heart,
      title: 'ลดความเจ็บปวด',
      description: 'ด้วยเทคนิคที่รบกวนเส้นประสาทและเส้นเลือดน้อยมาก ทำให้อาการเจ็บหลังผ่าตัดลดลงมาก',
      highlight: 'ความเจ็บปวดลดลงถึง 70%',
    },
    {
      icon: Clock,
      title: 'กลับไปใช้ชีวิตได้ตามปกติใน 1 วัน',
      description: 'ฟื้นตัวเร็ว สามารถทำกิจวัตรต่างๆเบาๆ ได้ตั้งแต่วันถัดไป',
      highlight: 'ฟื้นตัวภายใน 24 ชั่วโมง',
    },
    {
      icon: Users,
      title: 'เหมาะกับผู้หญิงเอเชีย',
      description: 'ออกแบบตามสรีระและผิวของผู้หญิงเอเชีย',
      highlight: 'ทรงสวยเป็นธรรมชาติ',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <span className="text-[var(--gold)] text-xs sm:text-sm">ข้อดีของ Preservé</span>
          </div>
          <h2 className="text-[var(--navy-900)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            ทำไมต้อง Preservé
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            เป็นเทคนิคเสริมหน้าอกระดับพรีเมียมที่แตกต่างจากการผ่าตัดทั่วไปอย่างสิ้นเชิง
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[var(--gold)]/30 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-700)] rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--gold)]" />
                </div>

                {/* Badge */}
                <div className="inline-block bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full px-3 py-1 mb-3 sm:mb-4">
                  <span className="text-[var(--gold)] text-xs font-semibold">
                    {benefit.highlight}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-[var(--navy-900)] text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-[var(--gold)]/5 rounded-full -mr-10 -mt-10 sm:-mr-12 sm:-mt-12 group-hover:bg-[var(--gold)]/10 transition-colors duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-[var(--navy-900)] to-[var(--navy-800)] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl">
            <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
              เมื่อเปรียบเทียบกับการผ่าตัดทั่วไป
            </h3>
            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto">
              การเสริมหน้าอกแบบเดิมต้องผ่ากล้ามเนื้อ ทำให้เจ็บมากและต้องพักฟื้นนาน
              แต่ Preservé รักษาเส้นประสาทและเส้นเลือด ทำให้สามารถ<span className="text-[var(--gold)] font-semibold">กลับบ้านได้ในวันเดียว</span>
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-[var(--gold)] text-2xl sm:text-3xl font-bold mb-1">-70%</div>
                <div className="text-gray-300 text-xs sm:text-sm">ความเจ็บปวดลดลง</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-[var(--gold)] text-2xl sm:text-3xl font-bold mb-1">1วัน</div>
                <div className="text-gray-300 text-xs sm:text-sm">ระยะพักฟื้น</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-[var(--gold)] text-2xl sm:text-3xl font-bold mb-1">0%</div>
                <div className="text-gray-300 text-xs sm:text-sm">ความเสียหายต่อเส้นประสาท</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="text-[var(--gold)] text-2xl sm:text-3xl font-bold mb-1">100%</div>
                <div className="text-gray-300 text-xs sm:text-sm">ความเป็นธรรมชาติ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}