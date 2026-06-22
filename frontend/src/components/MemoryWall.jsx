import React from 'react';

const columns = [
  {
    type: 'single',
    src: 'https://i.pinimg.com/736x/19/5c/c1/195cc19cc49edf864a335c813d8e2027.jpg',
    width: 'w-[200px] md:w-[280px]',
  },
  {
    type: 'double',
    src1: 'https://i.pinimg.com/736x/3e/d2/11/3ed21172b861fd337cbcf3e5f1b8a095.jpg',
    src2: 'https://i.pinimg.com/736x/c6/fe/40/c6fe40d727aeb488e7405b4b16ce424a.jpg',
    width: 'w-[240px] md:w-[320px]',
    flex1: 'flex-[1.2]',
    flex2: 'flex-[0.8]',
  },
  {
    type: 'single',
    src: 'https://i.pinimg.com/736x/dd/f4/97/ddf497124cd8d76b6b302bfa1c0a897a.jpg',
    width: 'w-[260px] md:w-[350px]',
  },
  {
    type: 'double',
    src1: 'https://i.pinimg.com/736x/61/72/33/617233a27a4f124893db3127bf4d7879.jpg',
    src2: 'https://i.pinimg.com/736x/e0/46/70/e0467087521ec50319acf9e2866f5793.jpg',
    width: 'w-[280px] md:w-[360px]',
    flex1: 'flex-1',
    flex2: 'flex-[0.8]',
  },
  {
    type: 'single',
    src: 'https://i.pinimg.com/736x/04/97/84/049784b45dd2760c9e45997072689afa.jpg',
    width: 'w-[280px] md:w-[380px]',
  },
  {
    type: 'double',
    src1: 'https://i.pinimg.com/736x/73/2e/26/732e26f2c37140a5d21964c4324411c5.jpg',
    src2: 'https://i.pinimg.com/1200x/4d/a8/ba/4da8ba00e3d8ae242660264f9e888703.jpg',
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