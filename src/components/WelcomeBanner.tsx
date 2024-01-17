import OverviewCard from "@/components/overviewCard";
import Typography from "@/components/typography";
import { Calendar } from "../../public/assets/svg/SidebarIcon";

interface Props {}

const WelcomeBanner = ({}) => {
   return (
      <div className="flex flex-col gap-3 sm:flex-row items-center justify-between">
         <div className="flex flex-col items-start gap-1  md:w-auto">
            <Typography className="text-black" variant="SemiBold_H4">
               Welcome David
            </Typography>
            <Typography variant="Regular_H6" className="text-gray-600">
               It’s a sunny day today, we hope you’re taking good care of your
               health 😊
            </Typography>
         </div>
         <div className="w-full sm:w-auto">
            <OverviewCard>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 ">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                     >
                        <path
                           fill-rule="evenodd"
                           clip-rule="evenodd"
                           d="M6.66663 0.833344C7.12686 0.833344 7.49996 1.20644 7.49996 1.66668V2.50001H12.5V1.66668C12.5 1.20644 12.8731 0.833344 13.3333 0.833344C13.7935 0.833344 14.1666 1.20644 14.1666 1.66668V2.50001H15C16.8409 2.50001 18.3333 3.99239 18.3333 5.83334V15C18.3333 16.841 16.8409 18.3333 15 18.3333H4.99996C3.15901 18.3333 1.66663 16.841 1.66663 15V5.83334C1.66663 3.99239 3.15901 2.50001 4.99996 2.50001H5.83329V1.66668C5.83329 1.20644 6.20639 0.833344 6.66663 0.833344ZM12.5 4.16668C12.5 4.62691 12.8731 5.00001 13.3333 5.00001C13.7935 5.00001 14.1666 4.62691 14.1666 4.16668H15C15.9204 4.16668 16.6666 4.91287 16.6666 5.83334V6.25001H3.33329V5.83334C3.33329 4.91287 4.07948 4.16668 4.99996 4.16668H5.83329C5.83329 4.62691 6.20639 5.00001 6.66663 5.00001C7.12686 5.00001 7.49996 4.62691 7.49996 4.16668H12.5ZM16.6666 7.91668H3.33329V15C3.33329 15.9205 4.07948 16.6667 4.99996 16.6667H15C15.9204 16.6667 16.6666 15.9205 16.6666 15V7.91668Z"
                           fill="#344054"
                        />
                     </svg>
                  </div>
                  <div className="flex flex-col gap-[2px]">
                     <Typography
                        className="text-gray-600 text-xs"
                        variant="Regular_H7"
                     >
                        Today’s Date
                     </Typography>
                     <Typography
                        variant="SemiBold_H6"
                        className="text-gray-700"
                     >
                        1st July, 2023
                     </Typography>
                  </div>
               </div>
            </OverviewCard>
         </div>
      </div>
   );
};

export default WelcomeBanner;
