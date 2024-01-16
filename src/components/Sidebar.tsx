"use client";

//  ** import core packages:
import { usePathname } from "next/navigation";
import Link from "next/link";

// ** import assets:
import {
   HomeIcon,
   File,
   Calendar,
   Gift,
   Plus,
   Headset,
   Settings,
   Message,
   SignOutIcon,
} from "../../public/assets/svg/SidebarIcon";
import styles from "./sidebar.module.css";
import logo from "../../public/assets/rayna.svg";
import avater from "../../public/avater.jpeg";
// ** import components:
import Typography from "@/components/typography";
import Image from "next/image";

const sidebarAboveMenus = [
   {
      name: "dashboard",
      icon: <HomeIcon></HomeIcon>,
      path: "/",
   },
   {
      name: "Consult a Doctor",
      icon: <Message></Message>,
      path: "/consultant",
   },
   {
      name: "Appointments",
      icon: <Calendar></Calendar>,
      path: "/appointments",
   },
   {
      name: "Medical History",
      icon: <File></File>,
      path: "/medical-history",
   },
   {
      name: "My Hospitals",
      icon: <Plus></Plus>,
      path: "/my-hospitals",
   },
];
const sidebarBottom = [
   {
      name: "Settings",
      icon: <Settings></Settings>,
      path: "/settings",
   },
   {
      name: "Help Center",
      icon: <Headset></Headset>,
      path: "/help-center",
   },
   {
      name: "Refer family & friends",
      icon: <Gift></Gift>,
      path: "/refer",
   },
];

const Sidebar = ({}) => {
   const pathname = usePathname();
   return (
      <>
         <div className="py-6 w-[272px]  border-r border-gray-200 h-screen flex flex-col justify-between">
            <div>
               <div className="py-2 px-6">
                  <Image width={224} height={40} alt="logo" src={logo}></Image>
               </div>
               <div className="py-3 px-2 flex flex-col gap-1">
                  {sidebarAboveMenus.map((menu, idx) => {
                     return (
                        <Link
                           href={`${menu.path}`}
                           key={idx}
                           className={`px-4  group py-3 flex items-center justify-start gap-3 rounded ${
                              pathname === menu.path
                                 ? `bg-primary-50   ${styles.active}`
                                 : `bg-transparent ${styles.menu} hover:bg-primary-50`
                           } `}
                        >
                           {menu.icon}

                           <Typography
                              variant="Medium_H7"
                              className="uppercase  text-gray-900"
                           >
                              {menu.name}
                           </Typography>
                        </Link>
                     );
                  })}
               </div>
            </div>
            <div>
               <div className="pb-3 mb-[10px] px-2 flex flex-col gap-1">
                  {sidebarBottom.map((menu, idx) => {
                     return (
                        <Link
                           href={`${menu.path}`}
                           key={idx}
                           className={`px-4  group py-3 flex items-center justify-start gap-3 rounded ${
                              pathname === menu.path
                                 ? `bg-primary-50   ${styles.active}`
                                 : `bg-transparent ${styles.menu} hover:bg-primary-50`
                           } `}
                        >
                           {menu.icon}

                           <Typography
                              variant="Medium_H7"
                              className="uppercase  text-gray-900"
                           >
                              {menu.name}
                           </Typography>
                        </Link>
                     );
                  })}
               </div>
               <div className="px-6 py-3 my-2">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full relative">
                        <Image
                           src={avater}
                           width={40}
                           height={40}
                           className="object-fill w-10 h-10 rounded-full"
                           alt="avater"
                        ></Image>
                        <div className="absolute bottom-0 right-0 block border-[1.5px] border-white size-[10px] rounded-full bg-success-600"></div>
                     </div>
                     <div className="flex flex-col">
                        <Typography
                           variant="SemiBold_H7"
                           className="text-gray-900 capitalize"
                        >
                           David Fayemi
                        </Typography>
                        <Typography
                           variant="SemiBold_H7"
                           className="text-gray-600 capitalize"
                        >
                           David@rayna.ui
                        </Typography>
                     </div>
                     <div className="flex item-center h-full font-semibold font-inter justify-end">
                        <SignOutIcon></SignOutIcon>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Sidebar;
