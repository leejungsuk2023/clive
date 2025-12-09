import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--navy-900)] text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-[var(--gold)] text-xl sm:text-2xl font-bold mb-4">
              Motiva Preservé
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4">
              ศัลยกรรมเกาหลีระดับพรีเมียม ให้คำปรึกษาและผ่าตัดโดยศัลยแพทย์เฉพาะทาง
            </p>
            <div className="flex gap-3">
              <a
                href="https://line.me/ti/p/YOUR_LINE_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[var(--gold)] rounded-full flex items-center justify-center hover:bg-[var(--gold-dark)] transition-colors"
                aria-label="ติดต่อทางไลน์"
              >
                <MessageCircle className="w-5 h-5 text-[var(--navy-900)]" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">เบอร์ติดต่อ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <div>
                  <a href="tel:+821012345678" className="text-gray-300 hover:text-[var(--gold)] transition-colors text-sm sm:text-base">
                    +82 10-1234-5678
                  </a>
                  <p className="text-gray-400 text-xs">ติดต่อได้ 24 ชม.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:info@motivapreserve.com" className="text-gray-300 hover:text-[var(--gold)] transition-colors text-sm sm:text-base">
                    info@motivapreserve.com
                  </a>
                  <p className="text-gray-400 text-xs">ตอบกลับภายใน 24 ชม.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">ที่อยู่</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[var(--gold)] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-300 mb-2 text-sm sm:text-base">
                  ชั้น 3 เลขที่ 123 ถนนโนฮยอน<br />
                  เขตกังนัม โซล
                </p>
                <p className="text-gray-400 text-xs">
                  ใกล้สถานี Gangnam ทางออก 5
                </p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base sm:text-lg">เวลาทำการ</h4>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="flex justify-between text-gray-300">
                <span>วันจันทร์–วันศุกร์</span>
                <span>09:00–18:00</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>วันเสาร์</span>
                <span>09:00–14:00</span>
              </li>
              <li className="flex justify-between text-gray-300">
                <span>วันอาทิตย์ /วันหยุดนักขัตฤกษ์</span>
                <span className="text-[var(--gold)]">ปิด</span>
              </li>
            </ul>
            <p className="text-gray-400 text-xs mt-3">
              * กรุณาจองคิวล่วงหน้า
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[var(--gold)]/10 border border-[var(--gold)]/30 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 text-center">
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">
            ปรึกษาฟรี
          </h3>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            การปรึกษาแบบส่วนตัว 1:1 กับคุณหมอ
          </p>
          <a
            href="https://line.me/ti/p/YOUR_LINE_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[var(--gold)] hover:bg-[var(--gold-dark)] text-[var(--navy-900)] px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 font-semibold text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5" />
            <span>ติดต่อทางไลน์</span>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2024 Motiva Preservé Clinic สงวนลิขสิทธิ์
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
                นโยบายความเป็นส่วนตัว
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
                เงื่อนไขการใช้งาน
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--gold)] transition-colors">
                นโยบายการคืนเงิน
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-xs text-center mt-4">
            ข้อมูลทางการแพทย์ทั้งหมดบนเว็บไซต์นี้ใช้สำหรับการอ้างอิงเท่านั้น และไม่ได้มีจุดประสงค์เพื่อใช้แทนคำแนะนำทางการแพทย์จากผู้เชี่ยวชาญ
          </p>
        </div>
      </div>
    </footer>
  );
}