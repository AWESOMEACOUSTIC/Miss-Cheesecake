import Bannerdesign from "../assets/images/BannerDesign.png"

export default function Banner() {
    const fadeStyle = {
    animation: "fadeInOut 4s ease-in-out infinite",
  };

  return (
    
    <>
      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; }
          50%     { opacity: 1; }
        }
      `}</style>

      <section className="bg-[#F6E0DE] py-12 px-4">
        <div className="relative w-full rounded-3xl overflow-hidden">
          <div className=" flex justify-center items-end space-x-4 overflow-x-auto">
            <img
              src={Bannerdesign}
              alt="Cheesecake Jar"
              className="w-full h-full object-contain"
            />
          </div>
          <div
            style={fadeStyle}
            className="
              absolute top-28 left-30
              md:top-4 md:right-10
              w-70 h-30 md:w-250 md:h-100
              mix-blend-overlay pointer-events-none
            "
          >
            <img
              className="w-full h-full object-cover blur-3xl"
              src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673af047ffda0bac4655c97f_db80b98027f9694237c7f771a092fe61_bg-2.avif"
              alt="animation"
            />
          </div>
        </div>
      </section>
    </>
  )
}
