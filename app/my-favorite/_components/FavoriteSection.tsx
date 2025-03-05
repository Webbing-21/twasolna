import Link from 'next/link'
import React from 'react'

export default function FavoriteSection() {
  return (
    <div className='container px-4 md:px-8 py-10 space-y-5'>
        <div className='flex justify-between'>
            <div>
              <h2 className='text-lg text-[#080A11]'>مفضلاتي</h2>
            </div>
            <Link href={"#"} className='text-primary hover:underline flex items-center gap-1 text-sm' >حذف الكل 
              <svg width={17} height={16} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.75 4.41326C2.75 4.10375 2.97066 3.85284 3.24286 3.85284L4.94501 3.85254C5.28321 3.84279 5.58157 3.59827 5.69665 3.23653C5.69967 3.22701 5.70315 3.21528 5.71563 3.17271L5.78897 2.92247C5.83385 2.76904 5.87295 2.63537 5.92767 2.51589C6.14384 2.04387 6.54377 1.7161 7.00594 1.63218C7.12292 1.61094 7.24682 1.61103 7.38904 1.61113H9.61109C9.75331 1.61103 9.87719 1.61094 9.99417 1.63218C10.4563 1.7161 10.8563 2.04387 11.0724 2.51589C11.1272 2.63537 11.1663 2.76904 11.2111 2.92247L11.2845 3.17271C11.2969 3.21528 11.3004 3.22701 11.3034 3.23653C11.4186 3.59827 11.7761 3.84309 12.1143 3.85284H13.7572C14.0293 3.85284 14.25 4.10375 14.25 4.41326C14.25 4.72278 14.0293 4.97369 13.7572 4.97369H3.24286C2.97066 4.97369 2.75 4.72278 2.75 4.41326Z" fill="#6371B4" />
                <path fillRule="evenodd" clipRule="evenodd" d="M8.24169 14.389H8.75842C10.5363 14.389 11.4252 14.389 12.0031 13.823C12.5812 13.257 12.6402 12.3285 12.7585 10.4716L12.9289 7.79601C12.9931 6.78848 13.0252 6.28474 12.7352 5.96551C12.4453 5.64629 11.9556 5.64629 10.9764 5.64629H6.02375C5.04448 5.64629 4.55484 5.64629 4.26489 5.96551C3.97494 6.28474 4.00703 6.78848 4.0712 7.79601L4.2416 10.4716C4.35986 12.3285 4.41899 13.257 4.99696 13.823C5.57492 14.389 6.46385 14.389 8.24169 14.389ZM7.37963 8.1205C7.35331 7.84335 7.11848 7.64108 6.85515 7.6688C6.59183 7.69653 6.39971 7.94372 6.42604 8.22087L6.74549 11.5835C6.77182 11.8606 7.00663 12.0629 7.26994 12.0352C7.53329 12.0074 7.7254 11.7602 7.69908 11.4831L7.37963 8.1205ZM10.1449 7.6688C10.4083 7.69653 10.6004 7.94372 10.5741 8.22087L10.2546 11.5835C10.2283 11.8606 9.99346 12.0629 9.73017 12.0352C9.46682 12.0074 9.27471 11.7602 9.30103 11.4831L9.62047 8.1205C9.6468 7.84335 9.88165 7.64108 10.1449 7.6688Z" fill="#6371B4" />
              </svg>
            </Link>
        </div>
        <div className='grid lg:grid-cols-3 gap-4'>
          <div className='h-64 bg-[#B8BAC7] rounded'></div>
          <div className='h-64 bg-[#B8BAC7] rounded'></div>
          <div className='h-64 bg-[#B8BAC7] rounded'></div>
          <div className='h-64 bg-[#B8BAC7] rounded'></div>
          <div className='h-64 bg-[#B8BAC7] rounded'></div>
          <div className='h-64 bg-[#B8BAC7] rounded'></div>
          <div className='h-64 bg-[#B8BAC7] rounded'></div>
          <div className='h-64 bg-[#B8BAC7] rounded'></div>
          <div className='h-64 bg-[#B8BAC7] rounded'></div>
          <div className='h-64 bg-[#B8BAC7] rounded'></div>
          <div className='h-64 bg-[#B8BAC7] rounded'></div>
          <div className='h-64 bg-[#B8BAC7] rounded'></div>
        </div>
    </div>
  )
}
