// ** import sub / section :
import ProfileLeft from "./ProfileLeft";
import ProfileRight from "./ProfileRight";

interface Props {}

const ProfileTab = ({}) => {
   return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-4 ">
         <ProfileLeft></ProfileLeft>
         <div className="bg-transparent">
            <ProfileRight></ProfileRight>
         </div>
      </div>
   );
};

export default ProfileTab;
