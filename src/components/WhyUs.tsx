import { Shield, Award, Users, CheckCircle } from 'lucide-react';

export function WhyUs() {
  const features = [
    {
      icon: Shield,
      title: 'รักษาเนื้อเยื่อ',
      description: 'รักษาเนื้อเยื่อหน้าอกและหลอดเลือดตามธรรมชาติ',
    },
    {
      icon: Award,
      title: 'ได้รับการรับรอง FDA',
      description: 'รับรองความปลอดภัยตามมาตรฐานสากล',
    },
    {
      icon: Users,
      title: 'ศัลยแพทย์ผู้เชี่ยวชาญ',
      description: 'มีเพียง 8 ผู้เชี่ยวชาญพรีเซิร์ฟที่ได้รับการรับรองในเกาหลี',
    },
    {
      icon: CheckCircle,
      title: 'ผลลัพธ์ตามธรรมชาติ',
      description: 'รักษาการเคลื่อนไหวและความรู้สึกตามธรรมชาติ',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[var(--navy-900)] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--gold)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--gold)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-[var(--gold)]/20 border border-[var(--gold)]/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
              <span className="text-[var(--gold)] text-xs sm:text-sm">เทคนิคปฏิวัติวงการ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              เทคนิคพรีเซิร์ฟ<sup>®</sup> คืออะไร?
            </h2>

            <p className="text-gray-300 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
              เทคนิคพรีเซิร์ฟเป็นวิธีการผ่าตัดที่ล้ำสมัย ซึ่งให้ความสำคัญกับการรักษาเนื้อเยื่อหน้าอก เส้นประสาท และหลอดเลือดตามธรรมชาติของคุณ ต่างจากวิธีการแบบดั้งเดิม ขั้นตอนขั้นสูงนี้ช่วยลดการบาดเจ็บต่อเนื้อเยื่อโดยรอบให้เหลือน้อยที่สุด
            </p>

            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              เทคนิคนี้แตกต่างจากวิธีการทั่วไปที่อาจสร้างความเสียหายต่อเนื้อเยื่อโดยรอบ ด้วยการใส่ใจในรายละเอียดทุกขั้นตอน
            </p>

            {/* Key Points */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[var(--gold)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[var(--navy-900)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-1">ความเสียหายต่อเนื้อเยื่อน้อยที่สุด</h4>
                  <p className="text-gray-400 text-sm sm:text-base">การผ่าตัดที่ระมัดระวังช่วยรักษาความสมบูรณ์ของหน้าอก</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[var(--gold)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[var(--navy-900)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-1">ระยะเวลาฟื้นตัวที่ลดลง</h4>
                  <p className="text-gray-400 text-sm sm:text-base">กลับมาทำกิจกรรมปกติได้ภายใน 24-48 ชั่วโมง</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[var(--gold)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-[var(--navy-900)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-base sm:text-lg mb-1">รูปลักษณ์และความรู้สึกตามธรรมชาติ</h4>
                  <p className="text-gray-400 text-sm sm:text-base">ผลลัพธ์ที่ดูและให้ความรู้สึกเป็นธรรมชาติของคุณ</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 hover:border-[var(--gold)]/50"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--gold)]/20 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--gold)]" />
                  </div>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">{feature.title}</h4>
                  <p className="text-gray-400 text-xs sm:text-sm mb-2">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 border-t border-white/10 pt-8 sm:pt-12">
          <div className="text-center">
            <div className="text-[var(--gold)] text-3xl sm:text-4xl font-bold mb-2">95%</div>
            <div className="text-gray-400 text-xs sm:text-sm">ความพึงพอใจของผู้ป่วย</div>
          </div>
          <div className="text-center">
            <div className="text-[var(--gold)] text-3xl sm:text-4xl font-bold mb-2">24h</div>
            <div className="text-gray-400 text-xs sm:text-sm">เวลาในการฟื้นตัว</div>
          </div>
          <div className="text-center">
            <div className="text-[var(--gold)] text-3xl sm:text-4xl font-bold mb-2">8</div>
            <div className="text-gray-400 text-xs sm:text-sm">ผู้เชี่ยวชาญที่ได้รับการรับรอง</div>
          </div>
          <div className="text-center">
            <div className="text-[var(--gold)] text-3xl sm:text-4xl font-bold mb-2">100%</div>
            <div className="text-gray-400 text-xs sm:text-sm">โปรโตคอลความปลอดภัย</div>
          </div>
        </div>
      </div>
    </section>
  );
}