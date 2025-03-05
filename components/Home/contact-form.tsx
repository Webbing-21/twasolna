"use client"

import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { Button } from "@/components/ui/button"

// Validation schema using Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("الاسم مطلوب"),
  email: Yup.string().email("البريد الإلكتروني غير صالح").required("البريد الإلكتروني مطلوب"),
  phone: Yup.string().required("رقم الهاتف مطلوب"),
  message: Yup.string().required("الرسالة مطلوبة").min(10, "الرسالة قصيرة جدًا"),
})

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setIsSubmitting(true)
    setSubmitStatus({})

    try {
      // Replace with your actual API endpoint
      const response = await axios.post("/api/contact", values)

      setSubmitStatus({
        success: true,
        message: "تم إرسال رسالتك بنجاح!",
      })
      resetForm()
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full max-w-3xl bg-primary rounded-lg p-6 md:p-8 text-white">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          message: "",
        }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className="space-y-6" dir="rtl">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-right text-lg">
                الاسم
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                className={`w-full bg-transparent border-b border-white/70 pb-2 text-white placeholder-white/70 focus:outline-none focus:border-white text-right ${
                  errors.name && touched.name ? "border-red-300" : ""
                }`}
              />
              <ErrorMessage name="name" component="div" className="text-red-300 text-sm text-right" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-right text-lg">
                البريد الإلكتروني
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className={`w-full bg-transparent border-b border-white/70 pb-2 text-white placeholder-white/70 focus:outline-none focus:border-white text-right ${
                  errors.email && touched.email ? "border-red-300" : ""
                }`}
              />
              <ErrorMessage name="email" component="div" className="text-red-300 text-sm text-right" />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-right text-lg">
                رقم التليفون
              </label>
              <Field
                id="phone"
                name="phone"
                type="tel"
                className={`w-full bg-transparent border-b border-white/70 pb-2 text-white placeholder-white/70 focus:outline-none focus:border-white text-right ${
                  errors.phone && touched.phone ? "border-red-300" : ""
                }`}
              />
              <ErrorMessage name="phone" component="div" className="text-red-300 text-sm text-right" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-right text-lg">
                اكتب الرسالة
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={5}
                className={`w-full bg-transparent border-b border-white/70 pb-2 text-white placeholder-white/70 focus:outline-none focus:border-white text-right ${
                  errors.message && touched.message ? "border-red-300" : ""
                }`}
              />
              <ErrorMessage name="message" component="div" className="text-red-300 text-sm text-right" />
            </div>

            {submitStatus.message && (
              <div className={`text-center p-3 rounded ${submitStatus.success ? "bg-green-500/20" : "bg-red-500/20"}`}>
                {submitStatus.message}
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-[#6371b4] hover:bg-white/90 font-semibold text-lg py-6 rounded-lg"
            >
              {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

