// ** import core packages:
import Image from "next/image";
// ** import assets:
import avater from "../../public/avater.jpeg";

// ** import cards :
import OverviewCard from "./overviewCard";
import Typography from "./typography";
import TitleGroup from "./TitleGroup";

const userDetailsList = [
   {
      subTitle: "Age",
      title: "26 y/o",
   },

   {
      subTitle: "Date of Birth",
      title: "15-05-1994",
   },

   {
      subTitle: "Height",
      title: "6”7 In",
   },
   {
      subTitle: "Weight",
      title: "80 kg",
   },

   {
      subTitle: "HMO Plan",
      title: "Red Beryl",
   },

   {
      subTitle: "Expires on",
      title: "24-07-2024",
   },
];
const ProfileCard = ({}) => {
   return (
      <OverviewCard className="!p-0 mt-4">
         <div className="p-6 border-b border-gray-200">
            <Typography variant="SemiBold_H5" className="text-gray-900">
               Your Profile
            </Typography>
         </div>
         <div className="pb-1  grid grid-cols-1 md:grid-cols-3  ">
            <div className=" md:border-r border-b md:border-b-0 order-gray-200 pl-6 pt-6 py-[29px] ">
               <div className="w-16 h-16 rounded-full  mb-3 ">
                  <Image
                     src={avater}
                     width={64}
                     height={64}
                     className="object-fill w-16 h-16 rounded-full"
                     alt="avater"
                  ></Image>
               </div>
               <TitleGroup
                  title="David Fayemi"
                  subTitle="HMO ID: RET/15118/A"
               ></TitleGroup>
            </div>
            <div className="md:col-span-2 p-6">
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {userDetailsList.map((item, idx) => (
                     <TitleGroup
                        className="!flex-col-reverse"
                        key={idx}
                        title={item.title}
                        subTitle={item.subTitle}
                     ></TitleGroup>
                  ))}
               </div>
            </div>
         </div>
      </OverviewCard>
   );
};

export default ProfileCard;
