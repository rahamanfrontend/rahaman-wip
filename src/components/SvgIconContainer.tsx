import { ReactNode } from "react";

interface ISvgIconContainerProps {
   className?: string;
   icon: ReactNode;
}
const SvgIconContainer = ({ className, icon }: ISvgIconContainerProps) => {
   return (
      <div
         className={`w-10 h-10 rounded-full flex items-center justify-center ${className}`}
      >
         <>{icon}</>
      </div>
   );
};

export default SvgIconContainer;
