import Image from "next/image";
import Typography from "./typography";
import { ReactNode } from "react";

interface ISingleUserProfileProps {
   avater: any;
   name: string;
   designation: string;
   children: ReactNode;
}

const SingleUserProfile = ({
   avater,
   name,
   designation,
   children,
}: ISingleUserProfileProps) => {
   return (
      <div className="flex items-center gap-3 w-full border-b py-5 px-6 border-gray-200">
         <div className="w-10 min-w-10 min-h-10 h-10 rounded-full relative">
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
               variant="Medium_H7"
               className="text-gray-900 capitalize"
            >
               {name}
            </Typography>
            <Typography
               variant="Regular_H7"
               className="text-gray-600 capitalize"
            >
               {designation}
            </Typography>
         </div>
         <div className=" ml-auto flex item-center h-full font-semibold font-inter justify-end">
            {children}
         </div>
      </div>
   );
};

export default SingleUserProfile;
