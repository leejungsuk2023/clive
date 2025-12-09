import heroImage from 'figma:asset/306fd1fc1d399d57256dc113314fbfd05f0336e8.png';

export function Hero() {
  return (
    <section className="relative min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-block bg-[var(--gold)]/20 border border-[var(--gold)]/50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 backdrop-blur-sm">
            <span className="text-[var(--gold)] text-xs sm:text-sm font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">ศัลยกรรมเกาหลีระดับพรีเมียม</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9), -1px -1px 4px rgba(0,0,0,0.7)' }}>
            การผ่าตัดเสริมหน้าอกแบบไร้ความเจ็บปวด<br />ที่มีเพียงแพทย์ในเกาหลีจำนวน 8 ท่านเท่านั้นที่ทำได้
          </h1>

          {/* Subheadline */}
          <p className="text-[var(--gold)] text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]" style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.9)' }}>
            Motiva Preservé<sup>®</sup>
          </p>
          <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 max-w-xl font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]" style={{ textShadow: '1px 1px 6px rgba(0,0,0,0.9)' }}>
            การผ่าตัดเสริมหน้าอกด้วยเทคนิค Preservé ลดอาการบวม·ฟื้นตัวเร็ว·ออกแบบเพื่อรูปร่างผู้หญิงเอเชียโดยเฉพาะ
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2 text-white animate-bounce bg-[var(--navy-900)]/70 px-4 py-2 rounded-full">
          <span className="text-xs font-semibold">เลื่อนลง</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
