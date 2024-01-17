
//** import core packages: 
import { ReactNode } from "react";
// ** import third party: 
import { Chip } from "@heathmont/moon-core-tw";
// ** import components: 
import SvgIconContainer from "./SvgIconContainer";
import OverviewCard from "./overviewCard";
import Typography from "./typography";




interface Props {
   subTitle: string;
   title: string;
   percentage: string;
   icon: ReactNode;
   measurement: string;
}

const MetricsCard = ({
   subTitle,
   title,
   percentage,
   icon,
   measurement,
}: Props) => {
   return (
      <OverviewCard className="!p-4 flex items-center justify-between">
         <div className="flex flex-col gap-2">
            <Typography variant="Regular_H6" className="text-gray-600">
               {subTitle}
            </Typography>
            <Typography variant="SemiBold_H5" className="text-gray-700">
               {title}
               <Typography variant="Regular_H6">{measurement}</Typography>{" "}
            </Typography>
            <div className="flex items-center gap-1">
               <Chip
                  isActive
                  size="sm"
                  className="bg-success-50 rounded-[10px] flex items-center gap-[2px] hover:bg-success-50 px-1  h-[20px]"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="12"
                     height="13"
                     viewBox="0 0 12 13"
                     fill="none"
                  >
                     <path
                        d="M2.64645 7.97983C2.45118 8.17509 2.45118 8.49167 2.64645 8.68693C2.84171 8.88219 3.15829 8.88219 3.35355 8.68693L5.03388 7.0066L5.68373 7.53731C5.88793 7.70407 6.18653 7.68363 6.36609 7.4906L8.00142 5.73262L8.63523 6.40868C8.8241 6.61014 9.14051 6.62035 9.34197 6.43148C9.54343 6.24262 9.55363 5.9262 9.36477 5.72474L8.36477 4.65808C8.27001 4.557 8.13757 4.49978 7.99903 4.50005C7.86049 4.50032 7.72827 4.55806 7.63391 4.65949L5.95319 6.46627L5.31627 5.94611C5.11744 5.78374 4.82796 5.79831 4.64645 5.97983L2.64645 7.97983Z"
                        fill="#036B26"
                     />
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.5 2C1.39543 2 0.5 2.89543 0.5 4V9C0.5 10.1046 1.39543 11 2.5 11H9.5C10.6046 11 11.5 10.1046 11.5 9V4C11.5 2.89543 10.6046 2 9.5 2H2.5ZM1.5 4C1.5 3.44772 1.94772 3 2.5 3H9.5C10.0523 3 10.5 3.44772 10.5 4V9C10.5 9.55228 10.0523 10 9.5 10H2.5C1.94772 10 1.5 9.55228 1.5 9V4Z"
                        fill="#036B26"
                     />
                  </svg>
                  <Typography
                     variant="Medium_H7"
                     className="text-success-700 text-xs"
                  >
                     {percentage}
                  </Typography>
               </Chip>
               <Typography
                  variant="Regular_H7"
                  className="text-xs text-success-600"
               >
                  Healthy
               </Typography>
            </div>
         </div>

         <SvgIconContainer
            className="!bg-transparent border border-gray-200"
            icon={icon}
         ></SvgIconContainer>
      </OverviewCard>
   );
};

export default MetricsCard;
