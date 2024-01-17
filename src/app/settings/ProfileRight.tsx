// ** import assets:
import { LockerIcon } from "../../../public/assets/svg/profileIcon";

// ** import third party :
import { Button } from "@heathmont/moon-core-tw";

// ** import components:
import Typography from "@/components/typography";
import InputBox from "@/components/Shared/InputBox";

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
               <div className=" flex gap-4 items-center justify-center sm:justify-end">
                  <Button className=" w-full sm:w-auto capitalize bg-primary-400 text-white rounded-md px-6 py-4 ">
                     update password
                  </Button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default ProfileRight;
