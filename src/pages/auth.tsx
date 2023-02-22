import Input from "@/common/Input";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import aisLogo from "../assets/svg/ais-logo.svg";

const Auth = () => {
  return (
    <div className="h-screen overflow-hidden lg:grid lg:grid-cols-[45%_55%]">
      <div className="mx-auto flex max-w-xl flex-col items-center px-10 pt-24 lg:pr-10 lg:pl-20 2xl:max-w-2xl">
        <div className="mb-[70px]">
          <Image
            src={aisLogo}
            alt="AIS Logo"
            width={320}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </div>
        <h1 className="mb-5 self-start text-3xl font-bold text-dark/90">
          Chào mừng <br /> đến nền tảng làm việc số
        </h1>
        <p className="mb-16 text-grey-500">
          Nền tảng là nơi giới thiệu, chia sẻ, lưu trữ tri thức của Cục An toàn
          thông tin; đồng thời cho phép cán bộ của Cục làm việc, trao đổi, học
          tập, rèn luyện trực tuyến mọi lúc, mọi nơi.
        </p>
        <form action="" className="flex w-full flex-col gap-4 lg:w-3/4">
          <Input
            label="Tên đăng nhập"
            id="username"
            name="username"
            type={"text"}
            icon={<UserIcon className="h-6 w-6 text-blue-500" />}
          />
          <Input
            label="Mật khẩu"
            id="password"
            name="password"
            type={"password"}
            icon={<LockClosedIcon className="h-6 w-6 text-blue-500" />}
          />
          <Input
            id="password"
            name="password"
            value={"Đăng nhập"}
            type="submit"
            className="mt-5"
          />
        </form>
      </div>
      <div className="bg-[url(../assets/images/onboarding.png)]"></div>
    </div>
  );
};

export default Auth;
