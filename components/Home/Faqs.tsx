import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/custom-accordion'
import { Card, CardContent } from '../ui/card'

export default function Faqs() {
  return (
    <div className='container px-4 md:px-8 space-y-10'>
        <h2 className='text-lg font-semibold md:text-xl text-center'>الأسئلة الشائعة</h2>
        <Card>
            <CardContent>
                <Accordion type="single" collapsible className="w-full divide-y-2" >
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-gray-600 text-lg'>ما هو تواصلنا؟</AccordionTrigger>
                        <AccordionContent className='text-gray-500'>تواصلنا هو منصة مخصصة لمستخدمي لغة الإشارة، تتيح للأفراد التواصل والتفاعل من خلال مقاطع فيديو قصيرة وطويلة يتم تقديمها بلغة الإشارة، سواء من قبل صناع المحتوى أو المستخدمين العاديين.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-gray-600 text-lg'>كيف يمكنني التسجيل في تواصلنا؟</AccordionTrigger>
                        <AccordionContent className='text-gray-500'>تواصلنا هو منصة مخصصة لمستخدمي لغة الإشارة، تتيح للأفراد التواصل والتفاعل من خلال مقاطع فيديو قصيرة وطويلة يتم تقديمها بلغة الإشارة، سواء من قبل صناع المحتوى أو المستخدمين العاديين.</AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='text-gray-600 text-lg'>هل الموقع مخصص للصم وضعاف السمع فقط؟</AccordionTrigger>
                        <AccordionContent className='text-gray-500'>تواصلنا هو منصة مخصصة لمستخدمي لغة الإشارة، تتيح للأفراد التواصل والتفاعل من خلال مقاطع فيديو قصيرة وطويلة يتم تقديمها بلغة الإشارة، سواء من قبل صناع المحتوى أو المستخدمين العاديين.</AccordionContent>
                    </AccordionItem>
                    
                </Accordion>
            </CardContent>
        </Card>
    </div>
  )
}
