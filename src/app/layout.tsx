import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import StoreProvider from "@/redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Create Next App",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <html dir="ltr" lang="en">
         <body
            className={`${inter.className}  w-full max-w-[1536px] mx-auto bg-gray-50 `}
         >
            <StoreProvider>
               <div className="flex items-start w-full">
                  <Sidebar></Sidebar>
                  <div className="flex flex-col w-full ">
                     <Navbar></Navbar>
                     <div className=" w-full h-full px-9 pt-6 overflow-y-auto max-h-[90vh]">
                        {children}
                     </div>
                  </div>
               </div>
            </StoreProvider>
         </body>
      </html>
   );
}
