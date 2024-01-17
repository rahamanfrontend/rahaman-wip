// ** import core packages:
import { Dispatch, ReactNode, SetStateAction } from "react";

// ** import  assets:
import styles from "./HospitalinfoCard.module.css";
// ** import third party:
import { Button } from "@heathmont/moon-core-tw";
import Typography from "./typography";

type THospitalInfoCard = {
   name: string;
   icon: ReactNode;
   value: number;
   label: string;
   selected: string;
   setSelected: Dispatch<SetStateAction<string>>;
};
const HospitalInfoCard = ({
   name,
   icon,
   value,
   label,
   selected,
   setSelected,
}: THospitalInfoCard) => {
   return (
      <Button
         onClick={() => setSelected(label)}
         className={` hover:outline-primary-75 w-full sm:w-auto border group hover:bg-primary-50 ${
            selected === label
               ? `border-primary-75  bg-primary-50 ${styles.active}`
               : `border-gray-300  bg-gray-100 ${styles.menu}`
         }`}
      >
         {icon}
         <Typography
            variant="Medium_H7"
            className={`${
               label === selected
                  ? `text-gray-900  `
                  : `group-hover:text-gray-900 text-gray-700`
            }`}
         >
            {name}
         </Typography>
         <div
            className={` rounded-[10px] px-2
               ${
                  label === selected
                     ? `bg-primary-75`
                     : `bg-gray-200 group-hover:bg-primary-75`
               }`}
         >
            <Typography
               variant="Medium_H7"
               className={`${
                  label === selected
                     ? ` text-primary-700  `
                     : `text-gray-500 group-hover:text-primary-700`
               }`}
            >
               {value}
            </Typography>
         </div>
      </Button>
   );
};

export default HospitalInfoCard;
