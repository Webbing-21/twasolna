import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import VideosTab from "./_components/VideosTab";
import ReelsTab from "./_components/ReelsTab";

export default function page() {
  return (
    <div className="px-4 space-y-20 py-20">
      <div className="container mx-auto w-full max-w-7xl">
        <Tabs defaultValue="reels" dir="rtl" className="py-4 space-y-5">
            <div className="flex justify-center w-full">
              <TabsList className="border border-primary bg-transparent [&>data-[state=active]]:!bg-primary grid grid-cols-2">
                <TabsTrigger
                  value="video"
                  className="data-[state=active]:!bg-primary text-primary data-[state=active]:text-white"
                >
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 7.86H2V16.19C2 16.25 2 16.31 2.01 16.36H11.25V7.86Z" fill="currentColor" />
                    <path d="M7.68994 6.36H11.2499V2H7.71994V6.24C7.71994 6.28 7.69994 6.32 7.68994 6.36Z" fill="currentColor" />
                    <path d="M6.21988 6.24V2.16C3.99988 2.62 2.54988 4.1 2.12988 6.36H6.23988C6.22988 6.32 6.21988 6.28 6.21988 6.24Z" fill="currentColor" />
                    <path d="M16.22 2H12.75V6.36H16.22V2Z" fill="currentColor" />
                    <path d="M17.71 6.35999H21.87C21.45 4.07999 19.98 2.58999 17.72 2.14999V6.32999C17.72 6.33999 17.71 6.34999 17.71 6.35999Z" fill="currentColor" />
                    <path d="M17.72 21.85C19.91 21.42 21.35 20.02 21.82 17.86H17.72V21.85Z" fill="currentColor" />
                    <path d="M16.22 17.86H12.75V22H16.22V17.86Z" fill="currentColor" />
                    <path d="M12.75 16.36H21.99C22 16.31 22 16.25 22 16.19V7.86H12.75V16.36Z" fill="currentColor" />
                    <path d="M11.25 17.86H7.71997V22H11.25V17.86Z" fill="currentColor" />
                    <path d="M2.17993 17.86C2.64993 20 4.06993 21.4 6.21993 21.84V17.86H2.17993Z" fill="currentColor" />
                  </svg>
                  فيديو 
                </TabsTrigger>
                <TabsTrigger
                  value="reels"
                  className="data-[state=active]:!bg-primary text-primary data-[state=active]:text-white"
                >
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.36 7.78H2V11.25H6.36V7.78Z" fill="currentColor" />
                    <path d="M6.3599 6.29V2.13C4.0799 2.55 2.5899 4.02 2.1499 6.28H6.3299C6.3399 6.28 6.3499 6.29 6.3599 6.29Z" fill="currentColor" />
                    <path d="M6.36 16.31V12.75H2V16.28H6.24C6.28 16.28 6.32 16.3 6.36 16.31Z" fill="currentColor" />
                    <path d="M21.8501 6.27999C21.4201 4.08999 20.0201 2.64999 17.8601 2.17999V6.27999H21.8501Z" fill="currentColor" />
                    <path d="M16.3601 11.25V2.01C16.3101 2 16.2501 2 16.1901 2H7.86011V11.25H16.3601Z" fill="currentColor" />
                    <path d="M22.0001 12.75H17.8601V16.28H22.0001V12.75Z" fill="currentColor" />
                    <path d="M17.8601 21.82C20.0001 21.35 21.4001 19.93 21.8401 17.78H17.8601V21.82Z" fill="currentColor" />
                    <path d="M6.23991 17.78H2.15991C2.61991 20 4.09991 21.45 6.35991 21.87V17.76C6.31991 17.77 6.27991 17.78 6.23991 17.78Z" fill="currentColor" />
                    <path d="M22.0001 7.78H17.8601V11.25H22.0001V7.78Z" fill="currentColor" />
                    <path d="M7.86011 12.75V22H16.1901C16.2501 22 16.3101 22 16.3601 21.99V12.75H7.86011Z" fill="currentColor" />
                  </svg>
                  مقاطع سريعة
                </TabsTrigger>
              </TabsList>
            </div>
          
          <TabsContent value="reels" className="space-y-4">
           <ReelsTab />
          </TabsContent>
          <TabsContent value="video">
            <VideosTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
