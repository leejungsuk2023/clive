import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export function FloatingLineButton() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <a
        href="https://line.me/ti/p/YOUR_LINE_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#00B900] hover:bg-[#00A000] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        aria-label="ติดต่อทางไลน์"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 group-hover:animate-bounce" />
        
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-[#00B900] animate-ping opacity-20" />
        
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-4 whitespace-nowrap bg-[var(--navy-900)] text-white px-4 py-2 rounded-lg shadow-xl transition-all duration-300 ${
            isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <span className="text-sm font-medium">ปรึกษาฟรี</span>
          {/* Arrow */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[var(--navy-900)]" />
          </div>
        </div>
      </a>

      {/* Badge - New Message Indicator */}
      <div className="fixed bottom-20 right-6 sm:bottom-24 sm:right-6 z-40">
        <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
          ปรึกษา
        </div>
      </div>
    </>
  );
}