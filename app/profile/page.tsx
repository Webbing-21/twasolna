"use client"

import { useState } from "react"
import { Pencil, ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ProfilePage() {
  const [isPasswordSectionOpen, setIsPasswordSectionOpen] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const togglePasswordSection = () => {
    setIsPasswordSectionOpen(!isPasswordSectionOpen)
  }

  return (
    <div dir="rtl" className="w-full max-w-7xl py-10 mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8 items-start">

        {/* Profile Form */}
        <div className="w-full md:!w-2/4">
          <h2 className="text-xl font-semibold mb-6">البيانات الشخصية</h2>

          <div className="space-y-6">
            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-right block">
                الاسم الكامل
              </Label>
              <Input id="fullName" defaultValue="أحمد محمد" className="text-right" />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-right block">
                البريد الإلكتروني
              </Label>
              <Input id="email" type="email" defaultValue="AhmedMohamed54@gmail.com" className="text-right" />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-right block">
                رقم الموبايل
              </Label>
              <div className="flex">
                <div className="inline-flex items-center justify-center rounded-s-md border border-l-0 border-input bg-background px-3 text-sm">
                  20+
                </div>
                <Input id="phone" type="tel" defaultValue="1234 5678" className="text-right rounded-e-none" />
              </div>
            </div>

            {/* Change Password Section */}
            <div className="border-t pt-4">
              <button onClick={togglePasswordSection} className="flex items-center justify-between w-full py-2">
                <span className="text-lg font-medium">تغيير كلمة المرور</span>
                {isPasswordSectionOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>

              {isPasswordSectionOpen && (
                <div className="space-y-4 mt-4">
                  {/* Current Password */}
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword" className="text-right block">
                      كلمة المرور الحالية
                    </Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showCurrentPassword ? "text" : "password"}
                        placeholder="ادخل كلمة المرور"
                        className="text-right pr-10"
                      />
                      <button
                        type="button"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                        aria-label={showCurrentPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                      >
                        {showCurrentPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* New Password */}
                  <div className="space-y-2">
                    <Label htmlFor="newPassword" className="text-right block">
                      كلمة المرور الجديدة
                    </Label>
                    <div className="relative">
                      <Input
                        id="newPassword"
                        type={showNewPassword ? "text" : "password"}
                        placeholder="ادخل كلمة المرور الجديدة"
                        className="text-right pr-10"
                      />
                      <button
                        type="button"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        aria-label={showNewPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                      >
                        {showNewPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Confirm New Password */}
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-right block">
                      أعد كتابة كلمة المرور الجديدة
                    </Label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="أعد إدخال كلمة المرور الجديدة"
                        className="text-right pr-10"
                      />
                      <button
                        type="button"
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        aria-label={showConfirmPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

           
          </div>
        </div>

        {/* Profile Picture */}
        <div className="relative mx-auto md:mx-0 md:ms-auto">
          <div className="w-24 h-24 rounded-full bg-[#6371b4] flex items-center justify-center text-white text-4xl font-semibold">
            A
          </div>
          <button
            className="absolute bottom-0 right-0 bg-white rounded-full p-1.5 border border-gray-200 shadow-sm"
            aria-label="تغيير الصورة الشخصية"
          >
            <Pencil className="w-4 h-4 text-gray-600" />
          </button>
        </div>

      </div>
       {/* Action Buttons */}
       <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600 order-2 sm:order-1"
              >
                إلغاء
              </Button>
              <Button className="bg-[#6371b4] hover:bg-[#5a67a9] text-white order-1 sm:order-2">
                حفظ التغيير
              </Button>
            </div>
    </div>
  )
}

