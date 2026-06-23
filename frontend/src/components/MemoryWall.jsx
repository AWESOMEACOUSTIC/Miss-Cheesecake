import React from 'react';

const columns = [
  {
    type: 'single',
    src: 'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/Long-1.png',
    width: 'w-[200px] md:w-[280px]',
  },
  {
    type: 'double',
    src1: 'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/Short-3.png',
    src2: 'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/Short-4.png',
    width: 'w-[240px] md:w-[320px]',
    flex1: 'flex-[1.2]',
    flex2: 'flex-[0.8]',
  },
  {
    type: 'single',
    src: 'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/Long-2.png',
    width: 'w-[260px] md:w-[350px]',
  },
  {
    type: 'double',
    src1: 'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/Short-2.png',
    src2: 'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/Short-1.png',
    width: 'w-[280px] md:w-[360px]',
    flex1: 'flex-1',
    flex2: 'flex-[0.8]',
  },
  {
    type: 'single',
    src: 'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/Long-3.png',
    width: 'w-[280px] md:w-[380px]',
  },
  {
    type: 'double',
    src1: 'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/Short-5.png',
    src2: 'https://ik.imagekit.io/kgka7sx7o/Miss%20Cheesecake/Short-6.png',
    width: 'w-[240px] md:w-[300px]',
    flex1: 'flex-[0.8]',
    flex2: 'flex-[1.2]',
  }
];

function MemoryWall() {
  const Copy = () => (
    <div className="flex w-max animate-marquee">
      {columns.map((col, idx) => (
        <div key={idx} className={`h-[350px] md:h-[500px] flex-shrink-0 ${col.width} pr-4 md:pr-6`}>
          {col.type === 'single' ? (
            <div className="w-full h-full overflow-hidden rounded-[24px] md:rounded-[32px] shadow-sm">
              <img
                src={col.src}
                alt="memory"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ) : (
            <div className="flex flex-col gap-4 md:gap-6 w-full h-full">
              <div className={`w-full ${col.flex1} overflow-hidden rounded-[24px] md:rounded-[32px] shadow-sm`}>
                <img src={col.src1} alt="memory part 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className={`w-full ${col.flex2} overflow-hidden rounded-[24px] md:rounded-[32px] shadow-sm`}>
                <img src={col.src2} alt="memory part 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden relative">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>

      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-10 md:mb-16">
        <h1 className="text-[#FF6E6E] font-[emiken] text-5xl md:text-7xl uppercase tracking-tighter">
          Memory Wall
        </h1>
        <p className="text-[#F5B426] font-[samarkan] text-3xl md:text-5xl mt-[10px] md:mt-[8px]">
          yaadein
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex">
        <div className="flex w-max hover:[&>div]:![animation-play-state:paused]">
          {/* Duplicate the children for infinite loop */}
          <Copy />
          <Copy />
        </div>
      </div>
    </section>
  );
}

export default MemoryWall;