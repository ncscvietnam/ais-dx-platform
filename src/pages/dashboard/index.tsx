import DrawerDashboard from "@/components/Dashboard/AsideDashboard";
import ContentDashboard from "@/components/Dashboard/ContentDashboard";
import LogoAISIcon from "../../assets/png/logoAIS.png";

import Image from "../../components/Image";
const Dashboard = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className=" bg-white font-semibold uppercase ">
        <div className="sticky top-0 flex  h-24 w-48 justify-items-start  ">
          <Image
            src={LogoAISIcon}
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </header>
      <div className="flex flex-col md:flex-row">
        <DrawerDashboard />

        <ContentDashboard />
      </div>
    </div>
  );
};
export default Dashboard;
