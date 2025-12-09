import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Shield } from 'lucide-react';
import before1 from 'figma:asset/649740b83010e09956381a750956f898d9d7f8a1.png';
import after1 from 'figma:asset/e8c656b81a958ebda217463b62cc29841d2aec8d.png';
import before2 from 'figma:asset/84ed0c7e368d9af775ad797ce2319dffb57fef4a.png';
import after2 from 'figma:asset/6f2e07c6b8a520c758c8e8344de0cc6953475655.png';
import before3 from 'figma:asset/e4bfc263058756941a949b1e62dbe663095036ae.png';
import after3 from 'figma:asset/678f14c0b6d2175b4b0dc4c32582b0809115ec98.png';

export function BeforeAfter() {
  const [activeCase, setActiveCase] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const cases = [
    {
      id: 1,
      beforeImage: before1,
      afterImage: after1,
      age: '28ปี',
      procedure: 'Motiva Preservé ขนาด 300cc',
      recovery: '1วัน',
      satisfaction: '5/5',
      testimonial: 'ไม่เจ็บแบบที่คิดเลย ฟื้นตัวเร็วมาก 2 วันก็กลับไปทำงานได้ ผลลัพธ์เป็นธรรมชาติมาก',
    },
    {
      id: 2,
      beforeImage: before2,
      afterImage: after2,
      age: '32ปี',
      procedure: 'Motiva Preservé ขนาด 275cc',
      recovery: '24ชม.',
      satisfaction: '5/5',
      testimonial: 'ประทับใจมาก ฟื้นตัวเร็ว และคุณหมอดูแลดีมาก ผลลัพธ์ก็สวยดังที่หวังไว้',
    },
    {
      id: 3,
      beforeImage: before3,
      afterImage: after3,
      age: '26ปี',
      procedure: 'Motiva Preservé ขนาด 325cc',
      recovery: '1วัน',
      satisfaction: '5/5',
      testimonial: 'ดีเกินคาด ฟื้นตัวเร็ว แผลเล็กมากแทบมองไม่เห็น',
    },
  ];

  const currentCase = cases[activeCase];

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const nextCase = () => {
    setActiveCase((prev) => (prev + 1) % cases.length);
    setSliderPosition(50);
  };

  const prevCase = () => {
    setActiveCase((prev) => (prev - 1 + cases.length) % cases.length);
    setSliderPosition(50);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <span className="text-[var(--gold)] text-xs sm:text-sm">ผลลัพธ์</span>
          </div>
          <h2 className="text-[var(--navy-900)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            ภาพก่อนและหลัง
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            ดูผลลัพธ์จริง ๆ ของผู้ป่วยของเรา ทุกภาพถูกขออนุญาตจากผู้ป่วย
          </p>
        </div>

        {/* Main Comparison Container */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Image Comparison */}
              <div className="lg:col-span-2 relative">
                {/* Before/After Slider */}
                <div
                  className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-gray-100 cursor-ew-resize select-none"
                  onMouseMove={handleMouseMove}
                  onMouseDown={handleMouseDown}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleMouseDown}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleMouseUp}
                >
                  {/* After Image (Background) */}
                  <img
                    src={currentCase.afterImage}
                    alt="หลังการผ่าตัด"
                    className="absolute inset-0 w-full h-full object-cover"
                    draggable={false}
                  />

                  {/* Before Image (Overlay with clip) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                  >
                    <img
                      src={currentCase.beforeImage}
                      alt="ก่อนการผ่าตัด"
                      className="absolute inset-0 w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>

                  {/* Slider Line */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                      <div className="flex gap-1">
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--navy-900)]" />
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--navy-900)]" />
                      </div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm">
                    ก่อน
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1.5 rounded-lg text-xs sm:text-sm">
                    หลัง
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevCase}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-20"
                    aria-label="ภาพก่อนหน้า"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--navy-900)]" />
                  </button>
                  <button
                    onClick={nextCase}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all z-20"
                    aria-label="ภาพถัดไป"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--navy-900)]" />
                  </button>
                </div>
              </div>

              {/* Case Details */}
              <div className="p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-gray-50 to-white">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold)] fill-current" />
                    ))}
                  </div>
                  <span className="text-sm sm:text-base text-gray-600">{currentCase.satisfaction}</span>
                </div>

                <h3 className="text-[var(--navy-900)] text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  ผลลัพธ์ {activeCase + 1}
                </h3>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600 text-sm sm:text-base">อายุ</span>
                    <span className="text-[var(--navy-900)] font-semibold text-sm sm:text-base">{currentCase.age}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600 text-sm sm:text-base">การผ่าตัด</span>
                    <span className="text-[var(--navy-900)] font-semibold text-sm sm:text-base">{currentCase.procedure}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span className="text-gray-600 text-sm sm:text-base">เวลาฟื้นตัว</span>
                    <span className="text-[var(--gold)] font-semibold text-sm sm:text-base">{currentCase.recovery}</span>
                  </div>
                </div>

                <div className="bg-white border-l-4 border-[var(--gold)] rounded-r-lg p-4 sm:p-5 mb-6 sm:mb-8">
                  <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
                    &ldquo;{currentCase.testimonial}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[var(--navy-700)] text-xs sm:text-sm">
                  <Shield className="w-4 h-4 text-[var(--gold)]" />
                  <span>ภาพจริงของผู้ป่วย</span>
                </div>
              </div>
            </div>
          </div>

          {/* Case Indicators */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCase(index);
                  setSliderPosition(50);
                }}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === activeCase
                    ? 'bg-[var(--gold)] w-8 sm:w-12'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`ดูภาพ ${index + 1}`}
              />
            ))}
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-[var(--gold)] text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">98%</div>
              <div className="text-gray-600 text-xs sm:text-sm">ความพึงพอใจ</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-[var(--gold)] text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">1-2</div>
              <div className="text-gray-600 text-xs sm:text-sm">เวลาฟื้นตัวเฉลี่ย</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-[var(--gold)] text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">500+</div>
              <div className="text-gray-600 text-xs sm:text-sm">ผลงานที่สำเร็จ</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg border border-gray-100">
              <div className="text-[var(--gold)] text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">100%</div>
              <div className="text-gray-600 text-xs sm:text-sm">ความปลอดภัย</div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 sm:mt-12 bg-gray-100 border border-gray-200 rounded-xl p-4 sm:p-6">
            <p className="text-gray-600 text-xs sm:text-sm text-center leading-relaxed">
              <strong className="text-[var(--navy-900)]">ข้อจำกัดความรับผิดชอบ:</strong> ภาพผลลัพธ์เป็นภาพของผู้ป่วยจริง แต่ผลลัพธ์อาจแตกต่างกันไปตามผู้ป่วย 
              ขึ้นอยู่กับสภาพสุขภาพ อายุ และการดูแลหลังการผ่าตัด ควรปรึกษากับแพทย์ก่อนตัดสินใจผ่าตัด
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}