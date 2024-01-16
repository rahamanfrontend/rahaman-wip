import Typography from "@/components/typography";
import { LockerIcon, PngIcon } from "../../../public/assets/svg/profileIcon";
import FileUpload from "@/components/Shared/FileUpload";
import InputBox from "@/components/Shared/InputBox";
import { MetricesIcon1 } from "../../../public/assets/svg/Metrices";
import { Button } from "@heathmont/moon-core-tw";

const ProfileRight = ({}) => {
   return (
      <div className="p-6 rounded-xl bg-white  ">
         <div className="flex flex-col space-y-2 mb-5">
            <Typography variant="SemiBold_H5" className="text-gray-55">
               Profile Settings
            </Typography>

            <Typography variant="Regular_H6" className="text-gray-500">
               These are your personal details, they are visible to the public
            </Typography>
         </div>
         <form action="">
            <div className="py-8 flex flex-col gap-6">
               <InputBox
                  type="password"
                  label="current password"
                  placeholder="Enter Password"
                  prefix={<LockerIcon></LockerIcon>}
                  name="currentPassword"
               ></InputBox>
               <InputBox
                  type="password"
                  label="new password"
                  placeholder="Enter New Password"
                  prefix={<LockerIcon></LockerIcon>}
                  name="newPassword"
               ></InputBox>
               <div className=" flex gap-4 items-center justify-end">
                  <Button className="  capitalize bg-primary-400 text-white rounded-md px-6 py-4 ">
                     update password
                  </Button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default ProfileRight;
