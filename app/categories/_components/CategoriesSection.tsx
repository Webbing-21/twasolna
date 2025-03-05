import Link from 'next/link'
import React from 'react'

export default function CategoriesSection() {
  return (
    <div className='container px-4 md:px-8 space-y-5'>
        <div className='flex justify-between'>
            <div>
              <h2 className='text-lg text-[#080A11]'>قسم تعليمي</h2>
            </div>
            <Link href={"#"} className='text-primary hover:underline flex items-center gap-1 text-sm' >عرض الكل 
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.54978 7.76335L9.7859 3.65549C10.0503 3.39916 10.5556 3.55453 10.5556 3.89213V12.1079C10.5556 12.4454 10.0503 12.6008 9.7859 12.3445L5.54978 8.23664C5.40935 8.10049 5.40935 7.8995 5.54978 7.76335Z" fill="#6371B4" />
              </svg>
            </Link>
        </div>
        <div className='grid lg:grid-cols-3 gap-4'>
          <div className='h-64 bg-gray-200 rounded'></div>
          <div className='h-64 bg-gray-200 rounded'></div>
          <div className='h-64 bg-gray-200 rounded'></div>
        </div>
    </div>
  )
}
