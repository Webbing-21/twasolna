"use client"

import Link from "next/link"
import { Facebook, Instagram, Phone, Mail } from 'lucide-react'
import LogoWhite from "./LogoWhite"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer dir="rtl" className="bg-primary rounded-t-xl text-white mt-20">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Contact Info */}
          <div className="flex flex-col items-start space-y-4 order-1 lg:order-1">
            <div className="flex items-center gap-2">
              <LogoWhite />
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <span dir="ltr">+201212121212</span>
              <Phone size={16} />
            </div>
            
            <div className="flex items-center gap-2 text-sm">
              <span>info@Tawasulna.com</span>
              <Mail size={16} />
            </div>
            
            <div className="flex items-center gap-4 mt-4">
              <div className="bg-[#64e8cd] rounded-full px-6 py-2 flex items-center gap-4">
                <Link href="#" aria-label="WhatsApp">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6371b4]">
                    <path d="M17.5 14.5c-.32.4-.67.78-1.06 1.13a11.08 11.08 0 0 1-5.13 2.55c-1.08.22-2.14.18-3.11-.13a4.35 4.35 0 0 1-2.33-1.97c-.31-.62-.5-1.32-.56-2.04-.09-1.35.35-2.54 1.33-3.53a4.05 4.05 0 0 1 4.5-.7c.7.3 1.08.8 1.16 1.58a3.98 3.98 0 0 1-.12 1.31c-.14.46-.41.87-.77 1.21-.37.34-.77.52-1.2.52-.17 0-.31-.13-.31-.31 0-.07.02-.14.06-.2l.32-.48c.18-.26.3-.58.32-.92.04-.41-.05-.84-.28-1.2a1.98 1.98 0 0 0-1.12-.8 2.03 2.03 0 0 0-1.49.16c-.49.24-.87.62-1.12 1.1a3.16 3.16 0 0 0-.27 2.4c.14.54.41 1.03.8 1.43a4.37 4.37 0 0 0 3.11 1.4 8.8 8.8 0 0 0 4.47-1.05 7.95 7.95 0 0 0 3.38-3.88c.31-.76.5-1.55.57-2.37.06-.81-.01-1.61-.22-2.39-.2-.77-.54-1.52-1.03-2.2a7.88 7.88 0 0 0-4.45-3.16 8.32 8.32 0 0 0-5.33.63 8.16 8.16 0 0 0-3.64 3.32c-.82 1.37-1.2 2.96-1.1 4.6.1 1.64.68 3.14 1.7 4.36a8.2 8.2 0 0 0 3.68 2.42c1.42.44 2.84.45 4.19.02" />
                    <path d="M9.5 14.5c.11.35.27.68.48.99.2.31.46.58.76.79.3.21.64.35 1 .42.36.07.73.05 1.08-.05" />
                  </svg>
                </Link>
                <span className="text-[#6371b4]">|</span>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="text-[#6371b4]" />
                </Link>
                <span className="text-[#6371b4]">|</span>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="text-[#6371b4]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Main Links */}
          <div className="order-2 lg:order-2">
            <h3 className="text-lg font-semibold mb-4 text-right">روابط رئيسية</h3>
            <ul className="space-y-3 text-right">
              <li>
                <Link href="#" className="hover:underline">الرئيسية</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">الفيديوهات</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">الأقسام</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">الأسئلة الشائعة</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">تواصل معنا</Link>
              </li>
            </ul>
          </div>

          {/* For Users */}
          <div className="order-3 lg:order-3">
            <h3 className="text-lg font-semibold mb-4 text-right">للمستخدمين</h3>
            <ul className="space-y-3 text-right">
              <li>
                <Link href="#" className="hover:underline">صفحتي الشخصية</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">سياسة الخصوصية</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">الشروط والأحكام</Link>
              </li>
            </ul>
          </div>

          {/* For Content Creators */}
          <div className="order-4 lg:order-4">
            <h3 className="text-lg font-semibold mb-4 text-right">لصناع المحتوى</h3>
            <ul className="space-y-3 text-right">
              <li>
                <Link href="#" className="hover:underline">لوحة التحكم</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">إدارة الفيديوهات</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">فيديوهاتي</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">رفع فيديو جديد</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-[#5a67a9] py-3">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-white/80">
            Copyright © {currentYear} - Tawasulna
          </p>
        </div>
      </div>
    </footer>
  )
}
