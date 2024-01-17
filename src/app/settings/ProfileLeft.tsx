import Typography from "@/components/typography";
import {
   EmailIcon,
   PngIcon,
   UserIcon,
} from "../../../public/assets/svg/profileIcon";
import FileUpload from "@/components/Shared/FileUpload";
import InputBox from "@/components/Shared/InputBox";
import { MetricesIcon1 } from "../../../public/assets/svg/Metrices";
import { Button } from "@heathmont/moon-core-tw";

const ProfileLeft = ({}) => {
   return (
      <div className="p-6 rounded-xl bg-white">
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
               <FileUpload></FileUpload>
               <InputBox
                  type="text"
                  label="full name"
                  placeholder="John Mercie Brown"
                  prefix={<UserIcon></UserIcon>}
                  name="fullName"
               ></InputBox>
               <InputBox
                  type="email"
                  label="Email"
                  placeholder="johnmercy03@gmail.com"
                  prefix={<EmailIcon></EmailIcon>}
                  name="email"
               ></InputBox>
               <div className=" flex gap-4 flex-col sm:flex-row items-center justify-center">
                  <Button
                     variant="outline"
                     className="capitalize text-primary-400 outline-primary-400 rounded-md px-6 py-4 w-full"
                  >
                     Cancel
                  </Button>
                  <Button className=" capitalize bg-primary-400 text-white rounded-md px-6 py-4 w-full">
                     save changes
                  </Button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default ProfileLeft;
