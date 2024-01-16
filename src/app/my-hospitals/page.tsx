"use client";
import Typography from "@/components/typography";
import { Button } from "@heathmont/moon-core-tw";
import { NextPage } from "next";
import {
   FavoriteIcon,
   MetricesIcon1,
   WatchIcon,
} from "../../../public/assets/svg/Metrices";
import { useState } from "react";
import HospitalInfoCard from "@/components/HospitalInfoCard";
import { Plus } from "../../../public/assets/svg/SidebarIcon";
import CustomTable from "./table";

interface Props {}

const menuList = [
   {
      name: "All Hospital",
      icon: <Plus></Plus>,
      value: 333454,
      label: "all-hospitals",
   },
   {
      name: "Recently Visited",
      icon: <WatchIcon></WatchIcon>,
      value: 35,
      label: "recently-visited",
   },
   {
      name: "Favourites",
      icon: <FavoriteIcon></FavoriteIcon>,
      value: 12,
      label: "favorites",
   },
];

const Consultant = ({}) => {
   const [selected, setSelected] = useState("all-hospitals");
   return (
      <main>
         <div className="flex justify-between items-center">
            <Typography variant="SemiBold_H5" className="text-black">
               My Hospitals
            </Typography>
            <Button className="!px-4 !py-2 bg-primary-500 text-white !rounded-md !border !border-gray-200 outline-none flex items-center justify-center gap-2">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
               >
                  <path
                     fillRule="evenodd"
                     clipRule="evenodd"
                     d="M9.16666 1.66666C5.02452 1.66666 1.66666 5.02452 1.66666 9.16666C1.66666 13.3088 5.02452 16.6667 9.16666 16.6667C10.9375 16.6667 12.565 16.0529 13.8481 15.0266L16.9107 18.0892C17.2362 18.4147 17.7638 18.4147 18.0892 18.0892C18.4147 17.7638 18.4147 17.2362 18.0892 16.9107L15.0266 13.8481C16.0529 12.565 16.6667 10.9375 16.6667 9.16666C16.6667 5.02452 13.3088 1.66666 9.16666 1.66666ZM3.33332 9.16666C3.33332 5.945 5.945 3.33332 9.16666 3.33332C12.3883 3.33332 15 5.945 15 9.16666C15 12.3883 12.3883 15 9.16666 15C5.945 15 3.33332 12.3883 3.33332 9.16666Z"
                     fill="white"
                  />
               </svg>
               <Typography variant="SemiBold_H7" className="text-white">
                  Find hospitals near me
               </Typography>
            </Button>
         </div>
         <div className="flex items-center justify-start gap-3 pt-[22px] pb-10">
            {menuList.map((menu, idx) => (
               <HospitalInfoCard
                  key={idx}
                  name={menu.name}
                  label={menu.label}
                  value={menu.value}
                  selected={selected}
                  icon={menu.icon}
                  setSelected={setSelected}
               ></HospitalInfoCard>
            ))}
         </div>
         <CustomTable></CustomTable>
      </main>
   );
};

export default Consultant;
