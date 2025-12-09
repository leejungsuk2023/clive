import { GraduationCap, Award, Users, Calendar } from 'lucide-react';
import doctorImage from 'figma:asset/427813b80ae35f0ea4a197c163909aad72c9e254.png';

export function DoctorProfile() {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'การศึกษา',
      details: [
        'วิทยาลัยแพทยศาสตร์ มหาวิทยาลัยแห่งชาติปูซาน',
        'หลักสูตรแพทย์ประจำบ้านศัลยกรรมตกแต่งสหรัฐอเมริกา',
        'ประกาศนียบัตรผู้เชี่ยวชาญด้านศัลยกรรมตกแต่ง',
      ],
    },
    {
      icon: Award,
      title: 'การรับรอง',
      details: [
        'Motiva Preservé Master Surgeon',
        'สมาชิกสมาคมศัลยแพทย์ตกแต่งแห่งเกาหลี',
        'สมาชิกสมาคมศัลยแพทย์ความงามนานาชาติ',
      ],
    },
    {
      icon: Users,
      title: 'ประวัติ',
      details: [
        'ประสบการณ์ด้านศัลยกรรมตกแต่ง 15ปี+',
        'การผ่าตัดเสริมหน้าอกมากกว่า 3,000 ครั้ง',
        'ผู้เชี่ยวชาญด้านความงามชาวเอเชีย',
      ],
    },
    {
      icon: Calendar,
      title: 'ผลงาน',
      details: [
        'ศัลยแพทย์ตกแต่งอันดับ 1% ของเกาหลี',
        'ตีพิมพ์บทความทางการแพทย์มากกว่า 20 ฉบับ',
        'อาจารย์และผู้สอนระดับนานาชาติ',
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4">
            <span className="text-[var(--gold)] text-xs sm:text-sm">ประวัติศัลยแพทย์</span>
          </div>
          <h2 className="text-[var(--navy-900)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
            คุณหมอ ซง คยองโฮ (Song Kyung Ho)
          </h2>
          <p className="text-gray-600 text-base sm:text-lg px-4">
            หนึ่งในแพทย์ 8 ท่านในเกาหลีที่ได้รับการรับรองจาก Motiva Preservé<sup>®</sup>
          </p>
        </div>

        {/* Doctor Profile Card */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-12 sm:mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            {/* Doctor Image */}
            <div className="lg:col-span-2 relative h-80 sm:h-96 lg:h-auto bg-gray-100">
              <img
                src={doctorImage}
                alt="Dr. Song Kyung Ho"
                className="w-full h-full object-contain object-center"
              />
              {/* Gold Accent */}
              <div className="absolute top-0 left-0 w-2 h-full bg-[var(--gold)]" />
            </div>

            {/* Doctor Info */}
            <div className="lg:col-span-3 p-6 sm:p-8 lg:p-12">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-[var(--navy-900)] text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">
                  คุณหมอ ซง คยองโฮ (Song Kyung Ho)
                </h3>
                <p className="text-[var(--gold)] text-lg sm:text-xl mb-3 sm:mb-4">
                  Motiva Preservé Master Surgeon
                </p>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  คุณหมอ ซง คยองโฮ เป็นศัลยแพทย์ตกแต่งที่ได้รับการยอมรับ ด้วยประสบการณ์กว่า 15 ปี ผ่านการฝึกฝนและการศึกษาทั้งในสหรัฐอเมริกาและเกาหลีใต้ เพื่อผลลัพธ์ที่ดีที่สุดให้กับคนไข้ด้วยเทคนิคการรักษาที่ได้รับการยอมรับทั่วโลก
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  ด้วยความเชี่ยวชาญและความใส่ใจในรายละเอียดอย่างพิถีพิถันของ คุณหมอ ซง คยองโฮ  ทำให้ผลลัพธ์ดูเป็นธรรมชาติ โดยเฉพาะอย่างยิ่งสำหรับผู้หญิงชาวเอเชียที่เน้นการมีรูปลักษณ์ที่ดูเป็นธรรมชาติ
                </p>
              </div>

              {/* Quote */}
              <div className="border-l-4 border-[var(--gold)] pl-4 sm:pl-6 py-2 mb-6 sm:mb-8 bg-gray-50 rounded-r-lg">
                <p className="text-[var(--navy-800)] italic mb-2 text-sm sm:text-base">
                  &ldquo;หน้าที่ของผมคือช่วยให้คุณสวยขึ้นอย่างเป็นธรรมชาติ โดยยังคงความงามที่ธรรมชาติให้มา&rdquo;
                </p>
                <p className="text-gray-500 text-xs sm:text-sm">
                  — คุณหมอ ซง คยองโฮ (Song Kyung Ho)
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-[var(--navy-900)] rounded-lg">
                  <div className="text-[var(--gold)] text-xl sm:text-2xl font-bold">15ปี+</div>
                  <div className="text-white text-xs">ประสบการณ์</div>
                </div>
                <div className="text-center p-3 sm:p-4 bg-[var(--navy-900)] rounded-lg">
                  <div className="text-[var(--gold)] text-xl sm:text-2xl font-bold">3,000+</div>
                  <div className="text-white text-xs">เคส</div>
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
            ได้รับความไว้วางใจจากผู้ป่วยต่างชาติ • มีบริการแปลภาษาเกาหลี-ไทย-เกาหลี
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[var(--gold)] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--navy-900)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm">ได้รับการรับรองมาตรฐาน JCI</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[var(--gold)] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--navy-900)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm">ได้รับการรับรองจาก FDA</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[var(--gold)] rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--navy-900)]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm">ได้รับการรับรองมาตรฐาน ISO</span>
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
