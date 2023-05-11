import React from "react";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <div className="w-full ">
        <div className="w-full h-[100vh] mt-14 mb-14 p-4">{children}</div>
      </div>
    </div>
  );
}
