import DrawerDashboard from "@/components/Dashboard/AsideDashboard";
import ContentDashboard from "@/components/Dashboard/ContentDashboard";
import Modal from "@/common/Modal";
import ModalContent from "@/components/Dashboard/ModalContent";

import LogoAISIcon from "../../assets/png/logoAIS.png";

import Image from "../../components/Image";
import { useState } from "react";
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

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
      <Modal
        handleClose={() => setIsOpen(false)}
        isShow={isOpen}
        valueModal={<ModalContent isOpen={isOpen} setIsOpen={setIsOpen} />}
      />
    </div>
  );
};
export default Dashboard;
