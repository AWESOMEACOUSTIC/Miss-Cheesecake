import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

function Button({ btn }) {
  return (
    <>
      <style>{`
        @keyframes breathe {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200, 101, 78, 0); }
          50% { box-shadow: 0 0 0 6px rgba(200, 101, 78, 0.28); }
        }
        .animate-breathe {
          animation: breathe 3s ease-in-out infinite;
        }
      `}</style>

      <Link
        to={"/cheesecakes"}
        className="
          group relative inline-flex items-center justify-between gap-x-6 w-fit
          mt-4 sm:mt-6 md:mt-8
          pl-6 sm:pl-8 md:pl-10 pr-2 sm:pr-2.5 md:pr-3
          py-2 sm:py-2.5 md:py-3
          overflow-hidden
          border border-[#C8654E]/40
          rounded-full
          bg-[#FCEDDE]
          text-[#C8654E]
          font-[satoshi]
          text-base sm:text-lg md:text-2xl
          shadow-sm
          transition-all duration-500 ease-out
          hover:shadow-[0_8px_30px_-8px_rgba(200,101,78,0.45)]
          hover:border-[#C8654E]/70
          hover:-translate-y-0.5
        "
      >
        {/* Soft sheen sweep on hover */}
        <span
          className="
            pointer-events-none absolute inset-0 -translate-x-full
            bg-gradient-to-r from-transparent via-white/40 to-transparent
            transition-transform duration-700 ease-out
            group-hover:translate-x-full
          "
        />

        <span className="relative leading-none transition-colors duration-500">
          {btn}
        </span>

        {/* Circular icon badge */}
        <span
          className="
            relative flex items-center justify-center
            w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11
            rounded-full
            bg-gradient-to-br from-[#E8A98F] to-[#C8654E]
            text-[#FCEDDE]
            shadow-inner
            animate-breathe
            transition-all duration-500 ease-out
            group-hover:rotate-[360deg]
            group-hover:shadow-[0_0_18px_-2px_rgba(200,101,78,0.6)]
          "
        >
          <ChevronRight
            className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-500 group-hover:translate-x-0.5"
            strokeWidth={3}
          />
        </span>
      </Link>
    </>
  );
}

export default Button;