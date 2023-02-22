import { CardConnect } from "@/common/CardConnect";
import { CardSelected } from "@/common/CardSelected";
import TabSelected from "@/common/TabSelected";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Hoctructuyen from "../../assets/png/hoctructuyen.png";
import Lichcongtac from "../../assets/png/lichcongtac.png";
import MegaPhoneIcon from "../../assets/png/megaphone.png";
import Nhiemvucongtac from "../../assets/png/nhiemvucongtac.png";
import SoTay from "../../assets/png/sotaydangvien.png";
import Thudientu from "../../assets/png/thudientu.png";
import Trithucmo from "../../assets/png/trithucmo.png";
import Tusachdientu from "../../assets/png/tusachdientu.png";
import Image from "../Image";
const ContentDashboard = () => {
  const listAll = [
    { icon: SoTay, content: "Sổ tay Đảng viên điện tử" },
    { icon: Lichcongtac, content: "Lịch công tác" },
    { icon: Nhiemvucongtac, content: "Nhiệm vụ công tác" },
    { icon: SoTay, content: "Văn bản điện tử" },
    { icon: Thudientu, content: "Thư điện tử" },
    { icon: Hoctructuyen, content: "Học trực tuyến" },
    { icon: Trithucmo, content: "Tri thức mở" },
    { icon: Tusachdientu, content: "Tủ sách điện tử" },
  ];

  const listConnect = [
    { icon: SoTay, title: "Lịch công tác", content: "3 phút trước" },
    { icon: Lichcongtac, title: "Weekly_Data", content: "6mb" },
    { icon: Nhiemvucongtac, title: "Khoá học 1", content: "386mb" },
    { icon: SoTay, title: "Presentation 1", content: "12mb" },
  ];
  const [tabSelected, setTabSelected] = useState(0);
  return (
    <main className="flex-1">
      <div className="col-span-12">
        <div className="  bg-grey-300 p-10">
          <div className="flex flex-row rounded-lg bg-primary p-5">
            <Image
              src={MegaPhoneIcon}
              alt="logo"
              className="h-[100px] w-[90.98px]"
            />
            <div className="ml-5">
              <p className="text-[26px] font-bold text-white">
                Chào mừng trở lại với nền tảng làm việc số
              </p>
              <p className="text-[14px] font-thin text-white">
                Chúc anh, chị một ngày làm việc hứng khởi, tràn đầy năng lượng
                tích cực!!!
              </p>
            </div>
            <div
              className="ml-auto cursor-pointer"
              onClick={() => {
                console.log("CLOSED");
              }}
            >
              <XMarkIcon className="h-5 w-5  text-white" />
            </div>
          </div>
          <div className="my-5">
            <TabSelected
              tabSelected={tabSelected}
              tabs={["Tất cả", "Đảng vụ", "Công cụ", "Trợ giúp"]}
              onChange={(value: any) => {
                setTabSelected(value);
              }}
            />
            <div className="grid grid-cols-1 gap-x-8  md:grid-cols-2 lg:grid-cols-4 ">
              {listAll.map((item, index) => {
                return (
                  <div
                    className="justify-content-between flex items-center"
                    key={index}
                  >
                    <CardSelected {...item} />
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className="font-bold">Truy cập nhanh</p>
          </div>

          <div className="m-3 flex flex-col md:flex-row md:space-x-4 ">
            {listConnect.map((item, index) => {
              return (
                <div className="p-3" key={index}>
                  <CardConnect {...item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
export default ContentDashboard;
