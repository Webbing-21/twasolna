import Link from 'next/link'
import React from 'react'

export default function VideosSection() {
  return (
    <div className='container px-4 md:px-8 space-y-5'>
        <div className='flex justify-between'>
            <div>
              <h2 className='text-lg text-[#080A11]'>فديوهاتي</h2>
            </div>
            <Link href={"#"} className='text-primary hover:underline flex items-center gap-1 text-sm' >عرض الكل 
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.54978 7.76335L9.7859 3.65549C10.0503 3.39916 10.5556 3.55453 10.5556 3.89213V12.1079C10.5556 12.4454 10.0503 12.6008 9.7859 12.3445L5.54978 8.23664C5.40935 8.10049 5.40935 7.8995 5.54978 7.76335Z" fill="#6371B4" />
              </svg>
            </Link>
        </div>
        <div className='grid lg:grid-cols-3 gap-4'>
          <div className='h-64 bg-primary rounded flex justify-center items-center cursor-pointer'>
            <div className='flex flex-col items-center text-white'>
              <svg width={33} height={33} viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.16675 17.1666V15.8333C3.16675 11.4499 3.16675 9.25829 4.37736 7.78316C4.59899 7.51311 4.8466 7.26549 5.11665 7.04387C6.59179 5.83325 8.78344 5.83325 13.1667 5.83325C17.5501 5.83325 19.7417 5.83325 21.2169 7.04387C21.4869 7.26549 21.7345 7.51311 21.9561 7.78316C22.8915 8.92299 23.1042 10.4906 23.1525 13.1666L24.0446 12.7277C26.639 11.4304 27.9364 10.7818 28.8849 11.368C29.8334 11.9543 29.8334 13.4046 29.8334 16.3054V16.6945C29.8334 19.5953 29.8334 21.0457 28.8849 21.6318C27.9364 22.2181 26.639 21.5694 24.0446 20.2722L23.1525 19.8333C23.1042 22.5093 22.8915 24.0769 21.9561 25.2167C21.7345 25.4867 21.4869 25.7343 21.2169 25.9559C19.7417 27.1666 17.5501 27.1666 13.1667 27.1666C8.78344 27.1666 6.59179 27.1666 5.11665 25.9559C4.8466 25.7343 4.59899 25.4867 4.37736 25.2167C3.16675 23.7415 3.16675 21.5499 3.16675 17.1666ZM13.1667 12.1666C13.719 12.1666 14.1667 12.6143 14.1667 13.1666V15.4999H16.5001C17.0523 15.4999 17.5001 15.9477 17.5001 16.4999C17.5001 17.0522 17.0523 17.4999 16.5001 17.4999H14.1667V19.8333C14.1667 20.3855 13.719 20.8333 13.1667 20.8333C12.6145 20.8333 12.1667 20.3855 12.1667 19.8333V17.4999H9.83341C9.28113 17.4999 8.83341 17.0522 8.83341 16.4999C8.83341 15.9477 9.28113 15.4999 9.83341 15.4999H12.1667V13.1666C12.1667 12.6143 12.6145 12.1666 13.1667 12.1666Z" fill="#FCFCFD" />
              </svg>
              <span>إضافة فيديو جديد</span>
            </div>
          </div>
          <div className='h-64 bg-gray-200 rounded'></div>
          <div className='h-64 bg-gray-200 rounded'></div>
          <div className='h-64 bg-gray-200 rounded'></div>
          <div className='h-64 bg-gray-200 rounded'></div>
          <div className='h-64 bg-gray-200 rounded'></div>
          <div className='h-64 bg-gray-200 rounded'></div>
          <div className='h-64 bg-gray-200 rounded'></div>
          <div className='h-64 bg-gray-200 rounded'></div>
          <div className='h-64 bg-gray-200 rounded'></div>
          <div className='h-64 bg-gray-200 rounded'></div>
          <div className='h-64 bg-gray-200 rounded'></div>
          <div className='h-64 bg-gray-200 rounded'></div>
          <div className='h-64 bg-gray-200 rounded'></div>
          <div className='h-64 bg-gray-200 rounded'></div>
        </div>
    </div>
  )
}
