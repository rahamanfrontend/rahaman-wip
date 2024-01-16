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
   GoogleDrive,
   Paypal,
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
      value: "",
   },
   {
      name: "Consult a Doctor",
      icon: <Message></Message>,
      path: "/consultant",
      value: "",
   },
   {
      name: "Appointments",
      icon: <Calendar></Calendar>,
      path: "/appointments",
      value: "",
   },
   {
      name: "Medical History",
      icon: <File></File>,
      path: "/medical-history",
      value: "",
   },
   {
      name: "My Hospitals",
      icon: <Plus></Plus>,
      path: "/my-hospitals",
      value: "",
   },
];

const settingSidebarMenus = [
   {
      name: "Home",
      icon: <HomeIcon></HomeIcon>,
      path: "/",
      value: "",
   },
   {
      name: "Customers",
      icon: <Message></Message>,
      path: "/customers",
      value: "",
   },
   {
      name: "Campaigns",
      icon: <Calendar></Calendar>,
      path: "/campaigns",
      value: "",
   },
   {
      name: "Automations",
      icon: <File></File>,
      path: "/automations",
      value: "",
   },
   {
      name: "Monetization",
      icon: <Plus></Plus>,
      path: "/monetization",
      value: "",
   },
];
const sidebarBottom = [
   {
      name: "Settings",
      icon: <Settings></Settings>,
      path: "/settings",
      value: "",
   },
   {
      name: "Help Center",
      icon: <Headset></Headset>,
      path: "/help-center",
      value: "",
   },
   {
      name: "Refer family & friends",
      icon: <Gift></Gift>,
      path: "/refer",
      value: "",
   },
];

const integrationMenus = [
   {
      name: "Google Drive",
      icon: <GoogleDrive></GoogleDrive>,
      path: "/google-drive",
      value: "",
   },
   {
      name: "Paypal",
      icon: <Paypal></Paypal>,
      path: "/paypal",
      value: "",
   },
];

const paths = [
   "/settings",
   "/customers",
   "/automations",
   "/monetization",
   "/google-drive",
   "paypal",
];

const Sidebar = ({}) => {
   const pathname = usePathname();
   return (
      <>
         <div className="py-6 w-[272px] min-w-[272px] border-r bg-white border-gray-200 h-screen flex flex-col justify-between">
            <div>
               <div className="py-2 px-6">
                  <Image width={224} height={40} alt="logo" src={logo}></Image>
               </div>
               <div
                  className={`py-3 px-2 flex flex-col gap-1 ${
                     paths.includes(pathname) && "border-b border-gray-100"
                  }`}
               >
                  {paths.includes(pathname) ? (
                     <>
                        {settingSidebarMenus.map((menu, idx) => {
                           return (
                              <Link
                                 href={`${menu.path}`}
                                 key={idx}
                                 className={`px-4  group py-3 flex items-center justify-between rounded ${
                                    pathname === menu.path
                                       ? `bg-primary-50   ${styles.active}`
                                       : `bg-transparent ${styles.menu} hover:bg-primary-50`
                                 } `}
                              >
                                 <div className="flex items-center gap-3 ">
                                    {menu.icon}

                                    <Typography
                                       variant="Medium_H7"
                                       className="capitalize  text-gray-900"
                                    >
                                       {menu.name}
                                    </Typography>
                                 </div>
                                 {menu.value && (
                                    <div className="bg-gray-100 px-2 rounded-[10px] ">
                                       <Typography
                                          variant="Medium_H7"
                                          className="capitalize text-xs  lg:text-xs text-gray-900"
                                       >
                                          {menu.value}
                                       </Typography>
                                    </div>
                                 )}
                              </Link>
                           );
                        })}
                     </>
                  ) : (
                     <>
                        {sidebarAboveMenus.map((menu, idx) => {
                           return (
                              <Link
                                 href={`${menu.path}`}
                                 key={idx}
                                 className={`px-4  group py-3 flex items-center justify-between rounded ${
                                    pathname === menu.path
                                       ? `bg-primary-50   ${styles.active}`
                                       : `bg-transparent ${styles.menu} hover:bg-primary-50`
                                 } `}
                              >
                                 <div className="flex items-center gap-3 ">
                                    {menu.icon}

                                    <Typography
                                       variant="Medium_H7"
                                       className="capitalize  text-gray-900"
                                    >
                                       {menu.name}
                                    </Typography>
                                 </div>
                                 {menu.value && (
                                    <div className="bg-gray-100 px-2 rounded-[10px] ">
                                       <Typography
                                          variant="Medium_H7"
                                          className="capitalize text-xs  lg:text-xs text-gray-900"
                                       >
                                          {menu.value}
                                       </Typography>
                                    </div>
                                 )}
                              </Link>
                           );
                        })}
                     </>
                  )}
               </div>
            </div>

            {paths.includes(pathname) && (
               <div className=" px-2">
                  <div className="pt-5">
                     <Typography
                        variant="Medium_H7"
                        className="inline-block pb-3 text-gray-600 px-3"
                     >
                        Integrations
                     </Typography>
                     <div></div>
                  </div>
                  <div className="pb-3 mb-[10px]  flex flex-col gap-1">
                     {integrationMenus.map((menu, idx) => {
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
                                 className="capitalize  text-gray-900"
                              >
                                 {menu.name}
                              </Typography>
                           </Link>
                        );
                     })}
                  </div>
               </div>
            )}

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
                              className="capitalize  text-gray-900"
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
