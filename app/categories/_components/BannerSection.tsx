import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function BannerSection() {
  return (
    <div dir="rtl" className="bg-[#6371b4] w-full max-w-7xl mx-auto rounded-xl overflow-hidden">
      <div className="container md:px-8 w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          <div className="w-full md:w-7/12 lg:w-6/12 text-white text-center md:text-right">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">شاهد أقوى الفيديوهات لهذا الأسبوع</h2>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">بلغة الإشارة!</h3>
            <Button
              asChild
              className="bg-white text-[#6371b4] hover:bg-white/90 font-semibold text-lg px-6 py-2 h-auto rounded-full"
            >
              <Link href="#">تصفح أحدث الفيديوهات</Link>
            </Button>
          </div>

          <div className="w-full md:w-5/12 lg:w-5/12">
            <div className="bg-white rounded-lg aspect-video w-full">
              {/* Video placeholder - replace with actual video component */}
              <div className="w-full h-full flex items-center justify-center">
                {/* <Image
                  src="/placeholder.svg?height=240&width=400"
                  alt="فيديو بلغة الإشارة"/
                  width={400}
                  height={240}
                  className="w-full h-full object-cover rounded-lg"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

