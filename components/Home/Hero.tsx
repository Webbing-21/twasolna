import Link from "next/link"

export default function HeroHome() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative">
      <div className="relative bg-primary flex justify-between min-h-screen w-full">
        <div className="hidden md:flex lg:hidden xl:flex gap-4 mt-auto h-[70vh] items-end">
            <div className="grid gap-2 h-full">
                <div className="w-16 h-full rounded p-5 bg-white"></div>
                <div className="w-16 h-full rounded p-5 bg-white"></div>
            </div>
        </div>
        <div className="hidden lg:flex gap-4 mt-auto relative z-10 ps-5 h-[80vh] items-center">
            <div className="grid gap-2 h-full">
                <div className="w-64 h-full rounded p-5 bg-white"></div>
                <div className="w-64 h-full rounded p-5 bg-[#B8BAC7]"></div>
            </div>
        </div>

        <div className="container mx-auto px-4 flex justify-center items-center py-8 relative z-10">
          <div className="text-center my-8 md:my-12 px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 rtl">
              <span className="text-[#7FEFD4]">تواصلنا</span> <span className="text-white">بإشارتنا</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-[#7FEFD4] rtl">
              منصتك لمحتوى <span className="text-[#b8bac7]">لغة الإشارة</span>
            </h2>
            <p className="text-[#b8bac7] text-lg md:text-xl max-w-3xl mx-auto mb-8 rtl leading-relaxed">
              شاهد، أنشئ، وتواصل مع مجتمع لغة الإشارة بكل سهولة. هنا يمكنك التعلم، التفاعل، ومشاركة مهاراتك مع الآخرين.
            </p>

            {/* CTA Button */}
            <div className="mt-8 md:mt-12">
              <Link
                href="#"
                className="bg-[#6371b4] text-white px-12 py-3 rounded-lg text-xl font-medium hover:bg-white hover:text-primary transition-colors rtl inline-block border-2 border-white"
              >
                ابدأ الآن
              </Link>
            </div>
          </div>
        </div>
        <div className="gap-4 mt-auto relative z-10 ps-5 h-[80vh] pe-5 items-center hidden lg:flex">
            <div className="grid gap-2 h-full">
                <div className="w-64 h-full rounded p-5 bg-white"></div>
                <div className="w-64 h-full rounded p-5 bg-[#B8BAC7]"></div>
            </div>
        </div>
        <div className="gap-4 mt-auto h-[70vh] items-end hidden md:flex lg:hidden xl:flex">
            <div className="grid gap-2 h-full">
                <div className="w-16 h-full rounded p-5 bg-white"></div>
                <div className="w-16 h-full rounded p-5 bg-white"></div>
            </div>
        </div>
      </div>
      <div className="absolute bottom-0 inset-x-0 flex justify-center">
        <svg width={1439} height={125} viewBox="0 0 1439 125" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M285.787 22.4297C309.234 14.0437 320.957 9.85071 332.978 6.90366C343.657 4.28535 354.503 2.40403 365.441 1.27302C377.751 0 390.202 0 415.104 0H1013.81C1038 0 1050.1 0 1062.06 1.20213C1072.69 2.27019 1083.24 4.04698 1093.64 6.52065C1105.34 9.30482 1116.76 13.2669 1139.62 21.1912L1439 125H-1L285.787 22.4297Z" fill="#FCFCFD" />
        </svg>
      </div>


    </div>
  )
}

