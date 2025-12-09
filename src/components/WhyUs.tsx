import { Shield, Award, Heart, Zap } from 'lucide-react';

export function WhyUs() {
  const features = [
    {
      icon: Shield,
      title: 'ไม่รบกวนระบบประสาท',
      description: 'คงความรู้สึกตามเดิม',
    },
    {
      icon: Award,
      title: 'แผลขนาดเล็ก',
      description: '3–4 ซม. ขนาดเล็ก สวยงาม',
    },
    {
      icon: Heart,
      title: 'สัมผัสเหมือนธรรมชาติ',
      description: 'ไม่เป็นบล็อก',
    },
    {
      icon: Zap,
      title: 'ฟื้นตัวเร็ว',
      description: '24–48 ชม. กลับไปใช้ชีวิตได้ตามปกติ',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <span className="text-[var(--gold)] text-xs sm:text-sm">เทคนิค Preservé</span>
          </div>
          <h2 className="text-[var(--navy-900)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            ทำไมต้องเลือกเรา
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            มากกว่าการผ่าตัดทั่วไป คือมาตรฐานใหม่ของการเสริมหน้าอกยุคใหม่
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-8 sm:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div className="relative h-64 sm:h-80 lg:h-auto min-h-[400px] bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-700)]">
              <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-12">
                <div className="text-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[var(--gold)] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-[var(--navy-900)]" />
                  </div>
                  <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                    เทคนิค Preservé
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto">
                    ใส่ซิลิโคนระหว่างชั้นเนื้อเยื่อเหนือกล้ามเนื้อ ไม่ต้องผ่าตัดกล้ามเนื้อ
                    ให้สัมผัสนุ่มเป็นธรรมชาติ เหมือนหน้าอกจริงๆ
                  </p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)]/10 rounded-full -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--gold)]/10 rounded-full -ml-12 -mb-12" />
            </div>

            {/* Right Side - Details */}
            <div className="p-6 sm:p-8 lg:p-12">
              <h3 className="text-[var(--navy-900)] text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                จุดเด่นของ Preservé
              </h3>
              
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="flex gap-3 sm:gap-4 items-start">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[var(--gold)]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--gold)]" />
                      </div>
                      <div>
                        <h4 className="text-[var(--navy-900)] font-semibold mb-1 text-sm sm:text-base">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-gradient-to-r from-[var(--gold)]/10 to-transparent border-l-4 border-[var(--gold)] p-4 sm:p-6 rounded-r-xl">
                <p className="text-[var(--navy-900)] font-semibold mb-2 text-sm sm:text-base">
                  มีเพียงแพทย์ในเกาหลีจำนวน 8 ท่านเท่านั้นที่ได้รับการรับรอง
                </p>
                <p className="text-gray-600 text-xs sm:text-sm">
                  ต้องใช้ทักษะขั้นสูงและได้รับการรับรองจาก Motiva
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-[var(--gold)] text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">8</div>
            <div className="text-gray-600 text-xs sm:text-sm">แพทย์ในเกาหลีจำนวน 8 ท่านเท่านั้นที่ได้รับการรับรอง</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-[var(--gold)] text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">10ปี</div>
            <div className="text-gray-600 text-xs sm:text-sm">Motiva รับประกัน</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-[var(--gold)] text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">98%</div>
            <div className="text-gray-600 text-xs sm:text-sm">ความพึงพอใจ</div>
          </div>
          <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100 text-center">
            <div className="text-[var(--gold)] text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">1-2วัน</div>
            <div className="text-gray-600 text-xs sm:text-sm">เวลาพักฟื้น</div>
          </div>
        </div>
      </div>
    </section>
  );
}