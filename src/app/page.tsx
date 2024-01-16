"use client";
import MetricsCard from "@/components/MetricesCard";
import WelcomeBanner from "@/components/WelcomeBanner";
import {
   MetricesIcon1,
   MetricesIcon2,
   MetricesIcon3,
   ScheduleIcon1,
   ScheduleIcon2,
   TickMark,
} from "../../public/assets/svg/Metrices";
import {
   QuickActionIcon1,
   QuickActionIcon2,
   QuickActionIcon3,
   QuickActionIcon4,
} from "../../public/assets/svg/QuickActionSvg";
import ProfileCard from "@/components/ProfileCard";
import OverviewCard from "@/components/overviewCard";
import Typography from "@/components/typography";
import avater from "../../public/avater.jpeg";
import Image from "next/image";
import { Button } from "@heathmont/moon-core-tw";
import QuickActionCard from "@/components/QuickActionCard";
import SingleUserProfile from "@/components/SingleUserProfile";

const metricsList = [
   {
      subTitle: "Blood pressure",
      title: "118/75",
      icon: <MetricesIcon1></MetricesIcon1>,
      measurement: " mm/hg",
      percentage: "5%",
   },
   {
      subTitle: "Cholesterol levels",
      title: "164",
      icon: <MetricesIcon2></MetricesIcon2>,
      measurement: "mg/dl",
      percentage: "5%",
   },
   {
      subTitle: "Blood Glucose levels",
      title: "5.5",
      icon: <MetricesIcon3></MetricesIcon3>,
      measurement: "mmol/L",
      percentage: "5%",
   },
];

const quickActionList = [
   {
      title: "Book an Appointment",
      subTile: "Find a doctor and specialization",
      icon: <QuickActionIcon1></QuickActionIcon1>,
   },
   {
      title: "Request Consultation",
      subTile: "Talk to a specialist",
      icon: <QuickActionIcon2></QuickActionIcon2>,
   },
   {
      title: "Locate a hospital near you",
      subTile: "Find closest hospitals",
      icon: <QuickActionIcon3></QuickActionIcon3>,
   },
   {
      title: "Emergency",
      subTile: "Request immediate help",
      icon: <QuickActionIcon4></QuickActionIcon4>,
   },
];

const userList = [
   {
      name: "Mostafizur Rahaman",
      designation: "Frontend",
      avater: avater,
   },
   {
      name: "Mostafizur Rahaman",
      designation: "Frontend",
      avater: avater,
   },
   {
      name: "Mostafizur Rahaman",
      designation: "Frontend",
      avater: avater,
   },
   {
      name: "Mostafizur Rahaman",
      designation: "Frontend",
      avater: avater,
   },
   {
      name: "Mostafizur Rahaman",
      designation: "Frontend",
      avater: avater,
   },
];

export default function Home() {
   return (
      <div>
         <WelcomeBanner></WelcomeBanner>
         <div className="mt-10 grid grid-cols-3 items-start gap-4 ">
            <div className=" col-span-2">
               <div className=" grid grid-cols-3 gap-4 ">
                  {metricsList.map((item, idx) => (
                     <MetricsCard
                        key={idx}
                        subTitle={item.subTitle}
                        title={item.title}
                        icon={item.icon}
                        measurement={item.measurement}
                        percentage={item.percentage}
                     ></MetricsCard>
                  ))}
               </div>
               <ProfileCard></ProfileCard>
            </div>
            <OverviewCard className="!p-0 ">
               <div className="p-6 border-b border-gray-200">
                  <Typography variant="SemiBold_H5" className="text-gray-900">
                     Upcoming Consultations
                  </Typography>
               </div>
               <div className="p-6 border-b border-gray-200">
                  <Typography variant="SemiBold_H5" className="text-gray-900">
                     Friday, 6 July
                  </Typography>
                  <div className="flex  gap-4 items-start mt-3">
                     <div className="w-5 h-5">
                        <ScheduleIcon1></ScheduleIcon1>
                     </div>
                     <Typography variant="Regular_H7" className="text-gray-600">
                        11.30 - 12.00 (30 min)
                     </Typography>
                  </div>
                  <div className="flex  gap-4 items-start mt-3">
                     <div className="w-5 h-5">
                        <ScheduleIcon2></ScheduleIcon2>
                     </div>
                     <Typography variant="Regular_H7" className="text-gray-600">
                        Cottage Medicare Hospital, 18 Iwaya Rd, Yaba 101245,
                        Lagos
                     </Typography>
                  </div>
                  <div className="flex items-center gap-3 mt-[26px]">
                     <div className="w-12 h-12 rounded-full relative">
                        <Image
                           src={avater}
                           width={48}
                           height={48}
                           className="object-fill w-12 h-12 rounded-full"
                           alt="avater"
                        ></Image>
                        <div className="absolute bottom-0 right-0 ">
                           <TickMark></TickMark>
                        </div>
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
                  </div>
               </div>
               <div className="flex gap-2  items-center p-6 !pt-5">
                  <Button className="!px-4 !py-2 bg-white !rounded-md !border !border-gray-200 outline-none">
                     <Typography
                        variant="SemiBold_H7"
                        className="text-gray-700"
                     >
                        Reschedule
                     </Typography>
                  </Button>
                  <Button className="!px-4 !py-2 !rounded-md bg-primary-500">
                     <Typography variant="SemiBold_H7" className="text-white">
                        Confirm appointment
                     </Typography>
                  </Button>
               </div>
            </OverviewCard>
         </div>
         <div className="grid grid-cols-5 gap-3 mt-4">
            <OverviewCard className="!p-0  col-span-2">
               <div className="p-6 border-b border-gray-200">
                  <Typography variant="SemiBold_H5" className="text-gray-900">
                     Quick Actions
                  </Typography>
               </div>
               <div>
                  {quickActionList.map((item, idx) => (
                     <QuickActionCard
                        key={idx}
                        title={item.title}
                        icon={item.icon}
                        description={item.subTile}
                     ></QuickActionCard>
                  ))}
               </div>
            </OverviewCard>
            <OverviewCard className="!p-0 col-span-3 ">
               <div className="p-6 border-b border-gray-200 flex  items-center justify-between">
                  <Typography variant="SemiBold_H5" className="text-gray-900">
                     Quick Actions
                  </Typography>
                  <Typography
                     variant="SemiBold_H5"
                     className="text-gray-900 flex items-center justify-end gap-2"
                  >
                     <Typography variant="SemiBold_H6">See all</Typography>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                     >
                        <path
                           d="M13.4026 11.1423C14.0066 10.5005 14.0066 9.49947 13.4026 8.85772L7.27348 2.34553C6.95805 2.01038 6.43066 1.9944 6.09551 2.30983C5.76037 2.62526 5.74438 3.15266 6.05982 3.4878L12.1889 10L6.05982 16.5122C5.74439 16.8473 5.76037 17.3747 6.09551 17.6902C6.43066 18.0056 6.95805 17.9896 7.27348 17.6545L13.4026 11.1423Z"
                           fill="#667185"
                        />
                     </svg>
                  </Typography>
               </div>
               <div>
                  {userList.map((item, idx) => {
                     return (
                        <SingleUserProfile
                           name={item.name}
                           designation={item.designation}
                           key={idx}
                           avater={avater}
                        >
                           <Button className="!px-4 !py-2 bg-white !rounded-md !border !border-gray-200 outline-none ml-auto">
                              <Typography
                                 variant="SemiBold_H7"
                                 className="text-gray-700"
                              >
                                 Send Message
                              </Typography>
                           </Button>
                        </SingleUserProfile>
                     );
                  })}
               </div>
            </OverviewCard>
         </div>
      </div>
   );
}
