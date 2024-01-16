import { ReactNode } from "react";
import Typography from "../typography";

interface IInputBoxProps {
   label: string;
   labelClassName?: string;
   inputClassName?: string;
   className?: string;
   prefixClassName?: string;
   prefix: ReactNode;
   placeholder: string;
   name: string;
   type: string;
}

const InputBox = ({
   label,
   labelClassName,
   inputClassName,
   className,
   prefixClassName,
   prefix,
   name,
   type,
   placeholder,
}: IInputBoxProps) => {
   return (
      <div className={`flex flex-col gap-1 ${className}`}>
         <label
            className={` ${labelClassName} text-gray-900 capitalize`}
            htmlFor={name}
         >
            <Typography variant="Medium_H7">{label}</Typography>
         </label>
         <div className="w-full relative">
            <input
               type={type}
               placeholder={placeholder}
               className={`p-4 h-full w-full border pl-[44px] text-black placeholder:text-oneTime-100 border-gray-300 focus:border-primary-200 placeholder:capitalize  rounded-md focus:outline-primary-200 bg-transparent ${inputClassName} `}
            />
            <div
               className={`left-3 absolute top-1/2  -translate-y-1/2 flex items-center justify-center ${prefixClassName} `}
            >
               {prefix}
            </div>
         </div>
      </div>
   );
};

export default InputBox;
