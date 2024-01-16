import Typography from "./typography";

interface IProfileCardProps {
   title: string;
   subTitle: string;
   className?: string;
}

const TitleGroup = ({ title, subTitle, className }: IProfileCardProps) => {
   return (
      <div className={`flex flex-col ${className}`}>
         <Typography variant="SemiBold_H6" className="text-gray-900 capitalize">
            {title}
         </Typography>
         <Typography variant="Regular_H6" className="text-gray-600 capitalize">
            {subTitle}
         </Typography>
      </div>
   );
};

export default TitleGroup;
