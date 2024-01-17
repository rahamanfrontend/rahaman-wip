"use client";
import Typography from "@/components/typography";
import { useState } from "react";
import ProfileTab from "./ProfileTab";

const settingsMenu = [
   {
      name: "profile",
   },
   {
      name: "accounts",
   },
   {
      name: "team",
   },
   {
      name: "integrations",
   },
   {
      name: "billings",
   },
];

const Page = ({}) => {
   const [tab, setTab] = useState<string>("profile");
   return (
      <div>
         <div className="flex flex-col space-y-[2px] mb-5">
            <Typography variant="SemiBold_H4" className="text-black">
               Settings
            </Typography>

            <Typography variant="Regular_H7" className="text-gray-500">
               Control your profile setup and integrations
            </Typography>
         </div>
         <div className="flex items-center w-full overflow-x-scroll md:overflow-x-hidden justify-start border-b border-gray-200">
            {settingsMenu.map((menu, idx) => (
               <div
                  key={idx}
                  onClick={() => setTab(menu.name)}
                  className={`p-4 border-b cursor-pointer capitalize ${
                     menu.name === tab
                        ? "border-primary-400"
                        : "border-gray-200"
                  }`}
               >
                  <Typography
                     variant="Medium_H7"
                     className={`${
                        menu.name === tab ? "text-primary-400" : "text-gray-45"
                     }`}
                  >
                     {menu.name}
                  </Typography>
               </div>
            ))}
         </div>
         {tab === "profile" && <ProfileTab></ProfileTab>}
      </div>
   );
};

export default Page;
