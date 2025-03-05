"use client"

import { useState } from "react"
import { ChevronDown, Menu, X, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Logo from "./Logo"
import UserHeader from "./user"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [login, setLogin] = useState(localStorage.getItem("token") === "login" ? true : false)

  const handelLogin = () => {
      localStorage.setItem("token", "login")
      setLogin(true)
  }
  // const handelLogout = () => {
  //     localStorage.removeItem("token")
  //     setLogin(false)
  // }
  return (
    <div dir="rtl" className="">
      <header className="container px-4 md:px-8 mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2 z-20">
          <Logo/>
        </div>

        {/* Mobile Menu Button */}
       

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <a href="#" className="text-primary font-semibold border-b-2 border-primary pb-1">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#" className="text-[#6e738c] hover:text-primary transition-colors">
                الأسئلة الشائعة
              </a>
            </li>
            <li>
              <a href="#" className="text-[#6e738c] hover:text-primary transition-colors">
                تواصل معنا
              </a>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger className="text-[#6e738c] hover:text-primary transition-colors flex items-center gap-1">
                  الفيديوهات
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <a href="#" className="w-full text-right">
                      فيديوهات تعليمية
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="w-full text-right">
                      فيديوهات ترفيهية
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="w-full text-right">
                      جميع الفيديوهات
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </nav>

        {/* Desktop Buttons */}
        <div className="flex gap-2">
          {login === false ? <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              سجل كصانع محتوى
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white" onClick={handelLogin}>تسجيل دخول</Button>
          </div>: <div className="">
            <UserHeader />
          </div>}
          
          <button className="md:hidden z-20 text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 !bg-white z-100 md:hidden">
            <div className="container bg-white mx-auto p-4">
                <div className="flex justify-end">
                    <Button  onClick={() => setIsMenuOpen(false)} variant={"ghost"} size={"icon"}>
                        <XCircle className="text-primary"/>
                    </Button>
                </div>
              <ul className="flex flex-col gap-6 text-lg pt-10">
                <li>
                  <a href="#" className="text-primary font-semibold block py-2">
                    الرئيسية
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#6e738c] hover:text-primary transition-colors block py-2">
                    الأسئلة الشائعة
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#6e738c] hover:text-primary transition-colors block py-2">
                    تواصل معنا
                  </a>
                </li>
                <li className="py-2">
                  <button
                    className="text-[#6e738c] hover:text-primary transition-colors flex items-center gap-2 w-full"
                    onClick={(e) => {
                      const submenu = e.currentTarget.nextElementSibling
                      if (submenu) {
                        submenu.classList.toggle("hidden")
                      }
                    }}
                  >
                    الفيديوهات
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <ul className="hidden pr-6 mt-2 space-y-2">
                    <li>
                      <a href="#" className="text-[#6e738c] hover:text-primary transition-colors block py-1">
                        فيديوهات تعليمية
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#6e738c] hover:text-primary transition-colors block py-1">
                        فيديوهات ترفيهية
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#6e738c] hover:text-primary transition-colors block py-1">
                        جميع الفيديوهات
                      </a>
                    </li>
                  </ul>
                </li>
                {!login && <>
                <li className="pt-4">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full">
                    سجل كصانع محتوى
                  </Button>
                </li>
                <li className="pt-2">
                  <Button className="bg-primary hover:bg-primary/90 text-white w-full"
                  onClick={handelLogin}>تسجيل دخول</Button>
                </li>
                </>}
              </ul>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

