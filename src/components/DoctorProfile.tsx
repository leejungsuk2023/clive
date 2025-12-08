import { GraduationCap, Award, Users, Calendar } from 'lucide-react';

export function DoctorProfile() {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'การศึกษา',
      details: [
        'คณะแพทยศาสตร์ มหาวิทยาลัยแห่งชาติโซล',
        'แพทย์ประจำบ้านศัลยกรรมตกแต่ง สหรัฐอเมริกา',
        'แพทย์ศัลยกรรมตกแต่งที่ได้รับการรับรอง',
      ],
    },
    {
      icon: Award,
      title: 'การรับรอง',
      details: [
        'ศัลยแพทย์ระดับมาสเตอร์ Motiva Preservé®',
        'คณะกรรมการศัลยกรรมตกแต่งเกาหลี',
        'สมาคมศัลยกรรมตกแต่งเพื่อความงามระหว่างประเทศ',
      ],
    },
    {
      icon: Users,
      title: 'ประสบการณ์',
      details: [
        'ประสบการณ์ 15+ ปีในศัลยกรรมตกแต่ง',
        'ผ่าตัดหน้าอกสำเร็จ 3,000+ ราย',
        'เชี่ยวชาญด้านความงามเอเชีย',
      ],
    },
    {
      icon: Calendar,
      title: 'ความสำเร็จ',
      details: [
        'ศัลยแพทย์ Top 1% ในเกาหลี',
        'ตีพิมพ์บทความทางการแพทย์ 20+ เรื่อง',
        'วิทยากรและผู้ฝึกอบรมระดับสากล',
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <span className="text-[var(--gold)] text-xs sm:text-sm">พบกับศัลยแพทย์ของคุณ</span>
          </div>
          <h2 className="text-[var(--navy-900)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            ดร. คิม มิน-ซู
          </h2>
          <p className="text-gray-600 text-base sm:text-lg px-4">
            หนึ่งในเพียง 8 คน ศัลยแพทย์ผู้ได้รับการรับรอง Motiva Preservé<sup>®</sup> ในเกาหลี
          </p>
        </div>

        {/* Doctor Profile Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Doctor Image */}
            <div className="lg:col-span-2 relative h-80 sm:h-96 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1708758308011-ed8f5e3b4ca3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBkb2N0b3IlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY1MTc0MzYwfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Dr. Kim Min-Soo"
                className="w-full h-full object-cover"
              />
              {/* Gold Accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-[var(--gold)]" />
            </div>

            {/* Doctor Info */}
            <div className="lg:col-span-3 p-6 sm:p-8 lg:p-12">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-[var(--navy-900)] text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
                  ดร. คิม มิน-ซู
                </h3>
                <p className="text-[var(--gold)] text-lg sm:text-xl mb-3 sm:mb-4">
                  ศัลยแพทย์ระดับมาสเตอร์, ผู้เชี่ยวชาญ Motiva Preservé<sup>®</sup>
                </p>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  ดร. คิม เป็นศัลยแพทย์ตกแต่งผู้บุกเบิกที่เชี่ยวชาญในเทคนิคพรีเซิร์ฟที่ปฏิวัติวงการ ด้วยประสบการณ์กว่า 15 ปีและการฝึกอบรมอย่างกว้างขวางทั้งในเกาหลีและสหรัฐอเมริกา ท่านได้กลายเป็นหนึ่งในไม่กี่คนที่ได้รับการรับรองให้ทำการผ่าตัดขั้นสูงนี้
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  ด้วยความเชี่ยวชาญและความใส่ใจในรายละเอียดทุกขั้นตอน ดร. คิมมุ่งมั่นที่จะมอบผลลัพธ์ที่ดีที่สุดให้กับผู้ป่วยทุกคน โดยเฉพาะผู้หญิงเอเชียที่ต้องการความงามที่เป็นธรรมชาติ
                </p>
              </div>

              {/* Quote */}
              <div className="border-l-4 border-[var(--gold)] pl-4 sm:pl-6 py-2 mb-6 sm:mb-8 bg-gray-50 rounded-r-lg">
                <p className="text-[var(--navy-800)] italic mb-2 text-sm sm:text-base">
                  &ldquo;ปรัชญาของผมเรียบง่าย: รักษาสิ่งที่ธรรมชาติมอบให้คุณ ในขณะที่เสริมสร้างความงามตามธรรมชาติของคุณ ผู้ป่วยทุกคนสมควรได้รับการดูแลเฉพาะบุคคลและผลลัพธ์ที่ดูเป็นธรรมชาติของตัวเอง&rdquo;
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  — ดร. คิม มิน-ซู
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-[var(--navy-900)] rounded-lg">
                  <div className="text-[var(--gold)] text-xl sm:text-2xl font-bold">15+</div>
                  <div className="text-white text-xs">ปี</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-[var(--navy-900)] rounded-lg">
                  <div className="text-[var(--gold)] text-xl sm:text-2xl font-bold">3K+</div>
                  <div className="text-white text-xs">การผ่าตัด</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-[var(--navy-900)] rounded-lg">
                  <div className="text-[var(--gold)] text-xl sm:text-2xl font-bold">98%</div>
                  <div className="text-white text-xs">ความพึงพอใจ</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {credentials.map((credential, index) => {
            const Icon = credential.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border border-gray-100 hover:border-[var(--gold)]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[var(--navy-900)] to-[var(--navy-700)] rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--gold)]" />
                </div>
                <h4 className="text-[var(--navy-900)] font-semibold mb-2 sm:mb-3 text-sm sm:text-base">
                  {credential.title}
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {credential.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-600 text-xs sm:text-sm">
                      <div className="w-1.5 h-1.5 bg-[var(--gold)] rounded-full mt-1.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-[var(--navy-900)] to-[var(--navy-800)] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center">
          <p className="text-white text-base sm:text-lg mb-4 sm:mb-6 px-4">
            ได้รับความไว้วางใจจากผู้ป่วยต่างชาติ • มีบริการแปลภาษาไทย-อังกฤษ-เกาหลี
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[var(--gold)] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--navy-900)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm">รับรอง JCI</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[var(--gold)] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--navy-900)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm">อนุมัติโดย FDA</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[var(--gold)] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--navy-900)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm">รับรอง ISO</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[var(--gold)] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--navy-900)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm">รับประกัน 10 ปี</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}