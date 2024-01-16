import { ReactNode } from "react";

interface IOverviewProps {
   className?: string;
   children: ReactNode;
}

const OverviewCard = ({ className, children }: IOverviewProps) => {
   return (
      <div
         className={`px-5 py-4 rounded-xl border border-gray-200 bg-white ${className}`}
      >
         {children}
      </div>
   );
};

export default OverviewCard;
