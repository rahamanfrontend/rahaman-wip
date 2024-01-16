import Typography from "@/components/typography";
import {
   FilterIcon,
   SearchIcon,
   SortIcon,
   StarIcon,
   ThreeDot,
} from "../../../public/assets/svg/tableIcon";
import { Table } from "@heathmont/moon-table-tw";
import React from "react";

const makeData = (length: number) => {
   return Array.from("_".repeat(length)).map((_, index) => {
      return {
         name: "Test",
         address: (
            <Typography variant="Medium_H7" className="text-gray-900">
               Lakshimpur, Chittagong, Bangladesh
            </Typography>
         ),
         phone: <Typography variant="Regular_H7">'01951-9786235'</Typography>,
         ratings: (
            <div className="flex items-center">
               <StarIcon></StarIcon>
               <StarIcon></StarIcon>
               <StarIcon></StarIcon>
               <StarIcon></StarIcon>
               <StarIcon></StarIcon>
            </div>
         ),
         actions: (
            <div className="flex items-center justify-end">
               <div className="border border-gray-200 rounded-md flex items-center justify-center p-[10px]">
                  <ThreeDot></ThreeDot>
               </div>
            </div>
         ),
      };
   });
};

const tableMenu = [
   {
      name: "search",
      icon: <SearchIcon></SearchIcon>,
   },
   {
      name: "filter",
      icon: <FilterIcon></FilterIcon>,
   },
   {
      name: "search",
      icon: <SortIcon></SortIcon>,
   },
];

const CustomTable = ({}) => {
   const columnsInitial = [
      {
         Header: (
            <div className="flex capitalize items-center justify-between">
               <Typography variant="Regular_H6">name</Typography>
               <div>
                  <SortIcon />
               </div>
            </div>
         ),
         accessor: "name",
      },
      {
         Header: (
            <div className="flex capitalize items-center justify-between">
               <Typography variant="Regular_H6">phone</Typography>
               <div>
                  <SortIcon />
               </div>
            </div>
         ),
         accessor: "phone",
      },
      {
         Header: (
            <div className="flex capitalize items-center justify-between">
               <Typography variant="Regular_H6">address</Typography>
               <div>
                  <SortIcon />
               </div>
            </div>
         ),
         accessor: "address",
      },
      {
         Header: (
            <div className="flex capitalize items-center justify-between">
               <Typography variant="Regular_H6">ratings</Typography>
               <div>
                  <SortIcon />
               </div>
            </div>
         ),
         accessor: "ratings",
      },
      {
         Header: "",
         accessor: "actions",
      },
   ];

   const columns = React.useMemo(() => columnsInitial, []);
   const data = React.useMemo(() => makeData(2), []);
   return (
      <div>
         <div className="flex items-center justify-between">
            <Typography variant="SemiBold_H5" className="text-gray-900">
               All History
            </Typography>
            <div className="flex items-center gap-6 ">
               {tableMenu.map((menu, idx) => (
                  <div
                     className="flex items-center gap-1 cursor-pointer"
                     key={idx}
                  >
                     {menu.icon}
                     <Typography
                        variant="Regular_H7"
                        className="text-xs lg:text-xs text-gray-500"
                     >
                        {menu.name}
                     </Typography>
                  </div>
               ))}
            </div>
         </div>
         <div className="rounded-lg overflow-hidden border border-gray-200 mt-5">
            <Table
               columns={columns}
               data={data}
               isSorting={true}
               rowSize="xl"
               headerBackgroundColor="#000"
               defaultRowBackgroundColor="#fff"
               evenRowBackgroundColor="#fff"
               // rowGap={1}
            />
         </div>
      </div>
   );
};

export default CustomTable;
