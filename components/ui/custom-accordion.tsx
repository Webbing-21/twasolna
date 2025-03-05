"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"
interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
  noBackgroundIcon?: boolean; // إضافة الـ prop الجديد
}

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, noBackgroundIcon, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all text-left [&[data-state=open]>svg.close]:!block [&[data-state=open]>svg.open]:!hidden",
        className
      )}
      {...props}
    >
      {children}
      {/* <Plus
        className={`size-7 shrink-0 ${noBackgroundIcon ? "bg-transparent" : "bg-[#C6C6C6] "} rounded text-primary transition-transform duration-200`}
      /> */}
      <svg className="size-7 hidden close" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.5867 2.66669H10.4133C5.56 2.66669 2.66667 5.56002 2.66667 10.4134V21.5734C2.66667 26.44 5.56 29.3334 10.4133 29.3334H21.5733C26.4267 29.3334 29.32 26.44 29.32 21.5867V10.4134C29.3333 5.56002 26.44 2.66669 21.5867 2.66669ZM20.48 19.0667C20.8667 19.4534 20.8667 20.0934 20.48 20.48C20.28 20.68 20.0267 20.7734 19.7733 20.7734C19.52 20.7734 19.2667 20.68 19.0667 20.48L16 17.4134L12.9333 20.48C12.7333 20.68 12.48 20.7734 12.2267 20.7734C11.9733 20.7734 11.72 20.68 11.52 20.48C11.1333 20.0934 11.1333 19.4534 11.52 19.0667L14.5867 16L11.52 12.9334C11.1333 12.5467 11.1333 11.9067 11.52 11.52C11.9067 11.1334 12.5467 11.1334 12.9333 11.52L16 14.5867L19.0667 11.52C19.4533 11.1334 20.0933 11.1334 20.48 11.52C20.8667 11.9067 20.8667 12.5467 20.48 12.9334L17.4133 16L20.48 19.0667Z" fill="#6371B4" />
      </svg>
      <svg className="size-7 open" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.5867 2.66669H10.4133C5.56 2.66669 2.66667 5.56002 2.66667 10.4134V21.5734C2.66667 26.44 5.56 29.3334 10.4133 29.3334H21.5733C26.4267 29.3334 29.32 26.44 29.32 21.5867V10.4134C29.3333 5.56002 26.44 2.66669 21.5867 2.66669ZM21.3333 17H17V21.3334C17 21.88 16.5467 22.3334 16 22.3334C15.4533 22.3334 15 21.88 15 21.3334V17H10.6667C10.12 17 9.66667 16.5467 9.66667 16C9.66667 15.4534 10.12 15 10.6667 15H15V10.6667C15 10.12 15.4533 9.66669 16 9.66669C16.5467 9.66669 17 10.12 17 10.6667V15H21.3333C21.88 15 22.3333 15.4534 22.3333 16C22.3333 16.5467 21.88 17 21.3333 17Z" fill="#6371B4" />
</svg>




    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));

AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
