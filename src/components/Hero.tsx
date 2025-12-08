import { MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMHdvbWFuJTIwY29uZmlkZW50fGVufDF8fHx8MTc2NTE3NDM2MHww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Confident woman"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-900)]/95 via-[var(--navy-900)]/80 to-[var(--navy-900)]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <div className="w-2 h-2 bg-[var(--gold)] rounded-full animate-pulse" />
            <span className="text-[var(--gold)] text-xs sm:text-sm">ศัลยกรรมพรีเมียมจากเกาหลี</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 leading-tight">
            มีเพียง 8 คน<br />ในเกาหลี
          </h1>

          {/* Subheadline */}
          <p className="text-gray-200 text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">
            โมทีวา พรีเซิร์ฟ<sup>®</sup>
          </p>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-xl">
            ผ่าตัดเสริมหน้าอกแบบพรีเซิร์ฟ เทคนิคพิเศษที่ช่วยลดอาการบวม ฟื้นตัวเร็ว เหมาะกับรูปร่างผู้หญิงเอเชีย
          </p>

          {/* CTA Button */}
          <button className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--navy-900)] px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 sm:gap-3 group text-sm sm:text-base w-full sm:w-auto justify-center">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>รับคำปรึกษาฟรี</span>
          </button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="border-l-2 border-[var(--gold)] pl-3 sm:pl-4">
              <div className="text-[var(--gold)] text-2xl sm:text-3xl font-bold">8</div>
              <div className="text-gray-400 text-xs sm:text-sm">แพทย์ที่ได้รับการรับรอง</div>
            </div>
            <div className="border-l-2 border-[var(--gold)] pl-3 sm:pl-4">
              <div className="text-[var(--gold)] text-2xl sm:text-3xl font-bold">1,000+</div>
              <div className="text-gray-400 text-xs sm:text-sm">ผู้ป่วยที่ประสบความสำเร็จ</div>
            </div>
            <div className="border-l-2 border-[var(--gold)] pl-3 sm:pl-4">
              <div className="text-[var(--gold)] text-2xl sm:text-3xl font-bold">100%</div>
              <div className="text-gray-400 text-xs sm:text-sm">บันทึกความปลอดภัย</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white/60 animate-bounce">
          <span className="text-xs">เลื่อนลง</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}