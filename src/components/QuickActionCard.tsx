// ** import core packages:
import { ReactNode } from "react";
// ** import components
import SvgIconContainer from "./SvgIconContainer";
import Typography from "./typography";

interface QuickActionCardProps {
   icon: ReactNode;
   title: string;
   description: string;
}

const QuickActionCard = ({
   icon,
   title,
   description,
}: QuickActionCardProps) => {
   return (
      <div className="px-6 ">
         <div className="flex items-center gap-4">
            <div className="!w-12 !h-12 flex items-center justify-center">
               <SvgIconContainer
                  icon={icon}
                  className="!w-12 !h-12 bg-gray-100"
               ></SvgIconContainer>
            </div>
            <div className="border-b border-gray-200  w-full flex items-center justify-between">
               <div className="flex flex-col gap-1 py-6  ">
                  <Typography
                     variant="Medium_H6"
                     className="text-gray-900 capitalize"
                  >
                     {title}
                  </Typography>
                  <Typography
                     variant="Regular_H7"
                     className="text-gray-600 capitalize "
                  >
                     {description}
                  </Typography>
               </div>
               <div className="flex items-center justify-center ">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="24"
                     height="24"
                     viewBox="0 0 24 24"
                     fill="none"
                  >
                     <path
                        d="M16.0832 13.3707C16.808 12.6006 16.808 11.3994 16.0832 10.6293L8.7282 2.81464C8.34969 2.41246 7.71681 2.39329 7.31464 2.7718C6.91246 3.15032 6.89329 3.78319 7.2718 4.18537L14.6268 12L7.2718 19.8146C6.89329 20.2168 6.91247 20.8497 7.31464 21.2282C7.71681 21.6067 8.34969 21.5875 8.7282 21.1854L16.0832 13.3707Z"
                        fill="#667185"
                     />
                  </svg>
               </div>
            </div>
         </div>
      </div>
   );
};

export default QuickActionCard;
