import Button from "@/common/Button";
import { MenuItem } from "@/common/MenuItem";
import {
  ArrowLeftOnRectangleIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Image from "../Image";
const DrawerDashboard = () => {
  const listItem = [
    {
      icon: <UserIcon className="h-6 w-6 text-black" />,
      content: "Hồ sơ",
    },
    {
      icon: <LockClosedIcon className="h-6 w-6 text-black" />,
      content: "Đổi mật khẩu",
    },
    {
      icon: <ArrowLeftOnRectangleIcon className="h-6 w-6 text-black" />,
      content: "Đăng xuất",
    },
  ];
  return (
    <div className=" flex flex-col bg-white ">
      <div className="mt-5 cursor-pointer md:w-60">
        <div className="m-3 flex items-center space-x-4">
          <div className="relative h-10 w-10 cursor-pointer ">
            <Image
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              className="rounded-full "
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="font-medium text-black">
            <div>Nguyễn Văn A</div>
          </div>
        </div>
        {listItem.map((item, index) => {
          return (
            <div className="px-5" key={index}>
              <MenuItem {...item} />
            </div>
          );
        })}
      </div>
      <div className="justify-between-center mt-auto flex h-[200px] w-full flex-col items-center rounded-lg bg-blue-500">
        <p className="py-5 text-center text-[16px] font-bold text-white">
          Kiki@ATTT
        </p>
        <p className="justify-content text-center  text-[14px] font-thin text-white">
          Trợ lý Kiki@ATTT hỗ trợ hỏi <br />
          đáp về an toàn thông tin
        </p>
        <Button variant="outlined" className="my-5">
          Chat với Kiki
        </Button>
      </div>
    </div>
  );
};
export default DrawerDashboard;
