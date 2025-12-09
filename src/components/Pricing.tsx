import { Check, Sparkles, TrendingDown, MessageCircle } from 'lucide-react';

export function Pricing() {
  const includedItems = [
    'ซิลิโคนแท้ Motiva Preservé®',
    'ตรวจวิเคราะห์ 1:1 + 3D Simulation',
    'ค่าผ่าตัด + ค่ายานอนหลับ',
    'ห้องพักฟื้น + แพคเกจดูแล 1 วัน',
    'Motiva รับประกัน 10 ปี',
    'การตรวจหลังผ่าตัด 3 ครั้ง',
    'บริการฉุกเฉิน 24 ชม',
    'บริการล่าม (เกาหลี-ไทย)',
  ];

  const comparisonData = [
    { location: 'ราคาเฉลี่ยในกาหลี', price: '620,000', highlight: false },
    { location: 'ราคาเฉลี่ยแบบพรีเมียมในไทย', price: '560,000', highlight: false },
    { location: '⭐ ราคาพิเศษของเรา', price: '435,000', highlight: true },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <Sparkles className="w-4 h-4 text-[var(--gold)]" />
            <span className="text-[var(--gold)] text-xs sm:text-sm">ราคาโปรโมชั่นพิเศษสำหรับคนไทย</span>
          </div>
          <h2 className="text-[var(--navy-900)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            ราคาสมเหตุสมผล
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
            ศัลยกรรมหน้าอก Motiva Preservé® ระดับพรีเมียม ในราคาที่คุ้มค่าที่สุด
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Price Comparison Cards */}
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-6 sm:p-8 border-2 transition-all duration-300 ${
                  item.highlight
                    ? 'bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-800)] border-[var(--gold)] shadow-2xl scale-105'
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                {item.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-[var(--gold)] text-[var(--navy-900)] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap flex items-center gap-1">
                      <TrendingDown className="w-4 h-4" />
                      ประหยัดกว่า 30%
                    </div>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className={`text-lg sm:text-xl font-semibold mb-4 ${
                    item.highlight ? 'text-[var(--gold)]' : 'text-gray-600'
                  }`}>
                    {item.location}
                  </h3>
                  <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 ${
                    item.highlight ? 'text-white' : 'text-[var(--navy-900)]'
                  }`}>
                    ฿{item.price}
                  </div>
                  {!item.highlight && (
                    <div className="text-gray-500 text-sm mt-2">เฉลี่ย</div>
                  )}
                  {item.highlight && (
                    <div className="text-[var(--gold)] text-sm mt-2 font-semibold">
                      ⭐ ราคาพิเศษ
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Main Pricing Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left: Price Highlight */}
              <div className="bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-800)] p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="text-[var(--gold)] text-sm sm:text-base mb-2 uppercase tracking-wide">
                    ราคาแพ็กเกจแบบรวมทุกอย่าง
                  </div>
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-gray-400 text-2xl sm:text-3xl line-through">฿620,000</span>
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold">
                      ฿435,000
                    </span>
                  </div>
                  <div className="text-gray-300 text-sm sm:text-base mt-3">
                    ประมาณ 14 ล้านวอน*
                  </div>
                </div>

                <div className="bg-white/10 rounded-xl p-4 sm:p-6 backdrop-blur-sm border border-white/20">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 bg-[var(--gold)] rounded-full flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-[var(--navy-900)]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">
                        ทำไมจึงถูกกว่า
                      </h4>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        ด้วยความร่วมมือของเรากับ Motiva โดยตรง ไม่ผ่านคนกลาง ทำให้เราสามารถเสนอราคาที่ดีที่สุดตามต้นทุนการดำเนินการ
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-xs text-gray-400">
                  *อัตราแลกเปลี่ยน 1 THB = 32.26 KRW  (อัตราแลกเปลี่ยนอาจเปลี่ยนแปลงได้)
                </div>
              </div>

              {/* Right: Included Items */}
              <div className="p-8 sm:p-10 lg:p-12 bg-gray-50">
                <h3 className="text-[var(--navy-900)] text-xl sm:text-2xl font-bold mb-6">
                  สิ่งที่รวมในแพคเกจ
                </h3>
                <ul className="space-y-4">
                  {includedItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[var(--gold)] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 p-4 sm:p-5 bg-white rounded-xl border-2 border-[var(--gold)]/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5 text-[var(--gold)]" />
                    <span className="text-[var(--navy-900)] font-semibold text-sm sm:text-base">
                      โปรโมชั่นพิเศษ
                    </span>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    โปรพิเศษเดือนนี้: รับฟรี Premium Recovery Kit  (มูลค่า ฿1,550)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-8 sm:mt-12 text-center">
            <button className="bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--navy-900)] px-8 sm:px-12 py-4 sm:py-5 rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 inline-flex items-center gap-3 group text-base sm:text-lg font-semibold">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 group-hover:animate-bounce" />
              <span>ประเมินราคาฟรี</span>
            </button>
            <p className="text-gray-500 text-xs sm:text-sm mt-4">
              ปรึกษาฟรี ไม่มีค่าใช้จ่าย • ตอบกลับภายใน 24 ชม.
            </p>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="text-[var(--gold)] text-2xl sm:text-3xl font-bold mb-1">100%</div>
              <div className="text-gray-600 text-xs sm:text-sm">Motiva ของแท้</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="text-[var(--gold)] text-2xl sm:text-3xl font-bold mb-1">10ปี</div>
              <div className="text-gray-600 text-xs sm:text-sm">Motiva รับประกัน</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="text-[var(--gold)] text-2xl sm:text-3xl font-bold mb-1">0%</div>
              <div className="text-gray-600 text-xs sm:text-sm">ผ่อนชำระนาน 12 เดือน</div>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <div className="text-[var(--gold)] text-2xl sm:text-3xl font-bold mb-1">24/7</div>
              <div className="text-gray-600 text-xs sm:text-sm">ดูแลหลังผ่าตัดตลอด 24 ชั่วโมง</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
