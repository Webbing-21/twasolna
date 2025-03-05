import React from "react";

export default function ReelsTab() {
  return (
    <div className="space-y-4 flex gap-4">
      <div className="w-24 flex items-center">
        <div className="space-y-4">
          <div className="bg-primary rounded-full">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3704 8.16485L18.8001 14.7953C19.2013 15.2091 18.9581 16 18.4297 16H5.5703C5.04189 16 4.79869 15.2091 5.1999 14.7953L11.6296 8.16485C11.8427 7.94505 12.1573 7.94505 12.3704 8.16485Z" fill="#FCFCFD" />
            </svg>
          </div>
          <div className="bg-primary rounded-full rotate-180">
            <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.3704 8.16485L18.8001 14.7953C19.2013 15.2091 18.9581 16 18.4297 16H5.5703C5.04189 16 4.79869 15.2091 5.1999 14.7953L11.6296 8.16485C11.8427 7.94505 12.1573 7.94505 12.3704 8.16485Z" fill="#FCFCFD" />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid w-full h-full gap-4">
        <div className="h-64 md:h-96 bg-gray-200 rounded"></div>
        <div className="h-64 md:h-96 bg-gray-200 rounded"></div>
        <div className="h-64 md:h-96 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
