import React from "react";
import Header from "@components/Share/Header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center relative">
      <div className="fixed bg-[#a3cd31] w-full h-[100vh] -z-10" />
      <div className="w-fScreen flex flex-col justify-center">
        <Header />
        <div className="w-full h-[100vh] ">{children}</div>
      </div>
    </div>
  );
}
