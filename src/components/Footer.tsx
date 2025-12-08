import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--navy-900)] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              โมทีวา พรีเซิร์ฟ<sup>®</sup>
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              จุดหมายปลายทางชั้นนำของเกาหลีสำหรับการผ่าตัดเสริมหน้าอกขั้นสูงด้วยเทคนิคพรีเซิร์ฟที่ปฏิวัติวงการ
            </p>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              คลินิกศัลยกรรมเสริมความงามชั้นนำในเกาหลี ด้วยเทคนิคพรีเซิร์ฟที่ล้ำสมัย
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-[var(--gold)] rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 hover:bg-[var(--gold)] rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[var(--gold)]">ติดต่อเรา</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm sm:text-base">+82 2 1234 5678</p>
                  <p className="text-gray-400 text-xs sm:text-sm">สายตรงจากเกาหลี</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm sm:text-base">+66 2 123 4567</p>
                  <p className="text-gray-400 text-xs sm:text-sm">ฝ่ายสนับสนุนประเทศไทย</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm sm:text-base">info@motivapreserve.kr</p>
                  <p className="text-gray-400 text-xs sm:text-sm">อีเมลตอบกลับ 24/7</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Location & Hours */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[var(--gold)]">มาเยี่ยมเรา</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm sm:text-base">อาคารการแพทย์คังนัม</p>
                  <p className="text-gray-400 text-xs sm:text-sm">123 Gangnam-daero, โซล</p>
                  <p className="text-gray-400 text-xs sm:text-sm">강남구 강남대로 123</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm sm:text-base">จันทร์ - เสาร์: 9:00 - 18:00</p>
                  <p className="text-gray-400 text-xs sm:text-sm">วันอาทิตย์: ปิด</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links & CTA */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-[var(--gold)]">ปรึกษาด่วน</h4>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
              รับคำตอบทันทีสำหรับคำถามของคุณผ่าน KakaoTalk หรือ Line
            </p>
            
            {/* KakaoTalk Button */}
            <button className="w-full bg-[#FEE500] hover:bg-[#FDD835] text-[#3C1E1E] px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 mb-2 sm:mb-3 group text-sm sm:text-base">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span>แชทใน KakaoTalk</span>
            </button>

            {/* Line Button */}
            <button className="w-full bg-[#00B900] hover:bg-[#00A000] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 mb-3 sm:mb-4 group text-sm sm:text-base">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              <span>แชทใน Line</span>
            </button>

            <p className="text-gray-500 text-xs">
              เวลาตอบกลับ: โดยปกติภายใน 5 นาทีในเวลาทำการ
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 items-center">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-[var(--gold)] font-bold text-sm sm:text-base">FDA</span>
              </div>
              <p className="text-gray-400 text-xs">อนุมัติ</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-[var(--gold)] font-bold text-sm sm:text-base">JCI</span>
              </div>
              <p className="text-gray-400 text-xs">รับรอง</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-[var(--gold)] font-bold text-sm sm:text-base">ISO</span>
              </div>
              <p className="text-gray-400 text-xs">รับรอง</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-[var(--gold)] font-bold text-xs">KFDA</span>
              </div>
              <p className="text-gray-400 text-xs">จดทะเบียน</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm mb-2">
            &copy; {new Date().getFullYear()} โมทีวา พรีเซิร์ฟ เกาหลี สงวนลิขสิทธิ์
          </p>
          <p className="text-gray-500 text-xs mb-3 sm:mb-4">
            บริการทางการแพทย์โดยผู้เชี่ยวชาญทางการแพทย์ที่ได้รับใบอนุญาตในเกาหลี ผลลัพธ์อาจแตกต่างกันในแต่ละบุคคล
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-[var(--gold)] transition-colors">นโยบายความเป็นส่วนตัว</a>
            <span>•</span>
            <a href="#" className="hover:text-[var(--gold)] transition-colors">ข้อกำหนดการให้บริการ</a>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="hover:text-[var(--gold)] transition-colors">ข้อจำกัดความรับผิดชอบทางการแพทย์</a>
            <span className="hidden sm:inline">•</span>
            <a href="#" className="hover:text-[var(--gold)] transition-colors">นโยบายการคืนเงิน</a>
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="bg-[var(--gold)] text-[var(--navy-900)] py-3 sm:py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-sm sm:text-base">พร้อมเปลี่ยนแปลงความมั่นใจของคุณ?</p>
            <p className="text-xs sm:text-sm opacity-80">สล็อตจำกัดสำหรับผู้ป่วยต่างชาติ</p>
          </div>
          <button className="bg-[var(--navy-900)] hover:bg-[var(--navy-800)] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all duration-300 flex items-center gap-2 whitespace-nowrap text-sm sm:text-base w-full sm:w-auto justify-center">
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>จองคำปรึกษาฟรี</span>
          </button>
        </div>
      </div>
    </footer>
  );
}