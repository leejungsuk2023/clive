import { Plane, Building2, Headset, Banknote } from 'lucide-react';

export function VipConcierge() {
  const services = [
    {
      icon: Plane,
      title: 'รับ-ส่งสนามบิน',
      description: 'พาคุณจากสนามบินสู่โรงพยาบาลและที่พักอย่างสะดวกสบายด้วยรถส่วนตัว',
      badge: 'Airport Pickup',
    },
    {
      icon: Building2,
      title: 'ที่พักระดับพรีเมียม',
      description: 'โรงแรมหรูในย่านกางนัม ห้องพักสะอาดสบาย พร้อมสิ่งอำนวยความสะดวกครบครัน',
      badge: 'Luxury Stay',
    },
    {
      icon: Headset,
      title: 'ทีมงานไทยดูแล 24/7',
      description: 'พนักงานไทยประจำที่โซลให้คำปรึกษาและดูแลคุณแบบ 1:1 ตลอดการเดินทาง',
      badge: '24/7 Support',
    },
    {
      icon: Banknote,
      title: 'ราคาตรงจากโรงพยาบาล',
      description: 'ไม่มีค่าธรรมเนียมเอเจนซี่ ไม่มีค่ามัดจำซ่อนเร้น คุณจ่ายเท่าที่โรงพยาบาลกำหนด',
      badge: '0% Agency Fee',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-800)] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--gold)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--gold)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[var(--gold)]/20 border border-[var(--gold)]/40 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <span className="text-[var(--gold)] text-xs sm:text-sm">บริการพิเศษสำหรับคุณ</span>
          </div>
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            บริการคอนเซียร์จ VIP<br className="sm:hidden" /> ตรงจากโรงพยาบาล
          </h2>
          <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto px-4">
            เราเป็น<span className="text-[var(--gold)] font-semibold"> บริการโดยตรงจากโรงพยาบาล 100%</span> ไม่ผ่านเอเจนซี่
            <br className="hidden sm:block" />
            พร้อมทีมงานไทยดูแลคุณแบบ 1:1 ตั้งแต่ลงเครื่องจนกลับบ้าน
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 hover:border-[var(--gold)]/50 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Badge */}
                <div className="inline-block bg-[var(--gold)]/20 border border-[var(--gold)]/40 rounded-full px-3 py-1 mb-4 sm:mb-5">
                  <span className="text-[var(--gold)] text-xs font-semibold uppercase tracking-wide">
                    {service.badge}
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[var(--gold)] to-[var(--gold-dark)] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[var(--navy-900)]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-white text-lg sm:text-xl font-bold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="bg-white/5 backdrop-blur-sm border border-[var(--gold)]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[var(--gold)] rounded-full animate-pulse" />
              <span className="text-white font-semibold text-base sm:text-lg">
                บริการโดยตรงจากโรงพยาบาล
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[var(--gold)] rounded-full animate-pulse" />
              <span className="text-white font-semibold text-base sm:text-lg">
                ไม่มีค่าธรรมเนียมเอเจนซี่ 0%
              </span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/30" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[var(--gold)] rounded-full animate-pulse" />
              <span className="text-white font-semibold text-base sm:text-lg">
                ทีมงานไทยดูแลแบบ 1:1
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
