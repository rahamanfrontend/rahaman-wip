import { Progress } from "@heathmont/moon-core-tw";
import { PngIcon } from "../../../public/assets/svg/profileIcon";
import Typography from "../typography";
import { IoCloseSharp } from "react-icons/io5";
import fileBg from "../../../public/assets/Overlay.png";
const FileUpload = ({}) => {
   return (
      <div
         style={{
            backgroundImage: `url(${fileBg.src})`,
            backgroundPosition: "left center",
            display: "block",
            backgroundSize: "45% 100%",
         }}
         className={`border border-dashed bg-no-repeat  rounded-[10px] py-5  px-4    `}
      >
         <input type="file" id="image" className="hidden" />
         <label htmlFor="image">
            <div className="py-8  flex gap-4 items-center ">
               <div className="hidden sm:block">
                  <PngIcon></PngIcon>
               </div>
               <div className=" flex-1 flex flex-col gap-[6px]">
                  <Typography variant="Medium_H7" className="text-gray-800">
                     Uploading Profile Image
                  </Typography>
                  <Progress
                     value={45}
                     className="bg-gray-100  [&_.progress]:bg-success-300"
                  />

                  <div className="gap-[2px] flex  flex-col sm:flex-row  items-row sm:items-center">
                     <Typography
                        variant="Regular_H7"
                        className="text-oneTime-100 text-[10px]  md:text-[11px]"
                     >
                        Profilepic2.PNG
                     </Typography>
                     <Typography
                        variant="Regular_H7"
                        className="text-oneTime-0 text-[10px] md:text-[11px]"
                     >
                        <span className="hidden sm:inline-block mr-1">|</span>
                        45% Completed
                     </Typography>
                  </div>
               </div>
               <IoCloseSharp
                  size={20}
                  className="text-gray-300 hover:text-red-500"
               />
            </div>
         </label>
      </div>
   );
};

export default FileUpload;
