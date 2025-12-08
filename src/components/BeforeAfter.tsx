import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';

interface CaseStudy {
  id: number;
  beforeImage: string;
  afterImage: string;
  procedure: string;
  recoveryTime: string;
  timeSinceOperation: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    beforeImage: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    afterImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    procedure: 'โมทีวา พรีเซิร์ฟ 300cc',
    recoveryTime: '24 ชั่วโมง',
    timeSinceOperation: '3 เดือนหลังผ่าตัด',
  },
  {
    id: 2,
    beforeImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    afterImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    procedure: 'โมทีวา พรีเซิร์ฟ 275cc',
    recoveryTime: '48 ชั่วโมง',
    timeSinceOperation: '6 เดือนหลังผ่าตัด',
  },
  {
    id: 3,
    beforeImage: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    afterImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    procedure: 'โมทีวา พรีเซิร์ฟ 325cc',
    recoveryTime: '24 ชั่วโมง',
    timeSinceOperation: '1 ปีหลังผ่าตัด',
  },
];

export function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-block bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <span className="text-[var(--gold)] text-xs sm:text-sm">ผลลัพธ์จริงจากผู้ป่วยจริง</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--navy-900)] mb-4">
            ก่อน & หลัง
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            ดูผลลัพธ์ที่น่าทึ่งจากผู้ป่วยของเราที่เลือกเทคนิคพรีเซิร์ฟ
          </p>
        </div>

        {/* Case Study Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-[var(--navy-900)] hover:bg-[var(--navy-800)] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
            aria-label="Previous case"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-[var(--navy-900)] hover:bg-[var(--navy-800)] text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
            aria-label="Next case"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Main Content */}
          <div className="bg-[var(--navy-900)] rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {/* Before Image */}
                <div className="relative">
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10 bg-[var(--navy-900)]/80 backdrop-blur-sm text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
                    ก่อน
                  </div>
                  <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden">
                    <img
                      src={caseStudies[currentIndex].beforeImage}
                      alt="Before procedure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* After Image */}
                <div className="relative">
                  <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10 bg-[var(--gold)] text-[var(--navy-900)] text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full font-medium">
                    หลัง
                  </div>
                  <div className="aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden">
                    <img
                      src={caseStudies[currentIndex].afterImage}
                      alt="After procedure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Case Details */}
              <div className="flex flex-col justify-center text-white">
                <div className="mb-4 sm:mb-6">
                  <span className="text-[var(--gold)] text-xs sm:text-sm">
                    กรณีศึกษา #{caseStudies[currentIndex].id}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
                  {caseStudies[currentIndex].procedure}
                </h3>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[var(--gold)]/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold)]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">ระยะเวลาฟื้นตัว</p>
                      <p className="font-semibold text-sm sm:text-base">{caseStudies[currentIndex].recoveryTime}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[var(--gold)]/20 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold)]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">ภาพถ่ายหลังผ่าตัด</p>
                      <p className="font-semibold text-sm sm:text-base">{caseStudies[currentIndex].timeSinceOperation}</p>
                    </div>
                  </div>
                </div>

                {/* Key Results */}
                <div className="border-t border-white/10 pt-4 sm:pt-6">
                  <h4 className="text-[var(--gold)] text-xs sm:text-sm mb-3">ผลลัพธ์ที่ได้รับ</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <svg className="w-4 h-4 text-[var(--gold)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>รูปทรงเป็นธรรมชาติ</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <svg className="w-4 h-4 text-[var(--gold)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>ไม่มีรอยแผลเป็นที่มองเห็นได้</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <svg className="w-4 h-4 text-[var(--gold)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>ความพึงพอใจ 100%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 sm:mt-6">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[var(--gold)] w-6 sm:w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to case ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Privacy Notice */}
        <p className="text-center text-gray-500 text-xs sm:text-sm mt-6 sm:mt-8">
          * ภาพทั้งหมดได้รับความยินยอมจากผู้ป่วย ผลลัพธ์อาจแตกต่างกันในแต่ละบุคคล
        </p>
      </div>
    </section>
  );
}
