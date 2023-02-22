import React from "react";
import Image from "next/image";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/solid";

import Slider from "react-slick";
import Input from "@/common/Input";

import aisLogo from "../assets/svg/ais-logo.svg";
import Link from "next/link";
import { quotes, texts } from "@/const";
import ContentText from "@/components/Auth/ContentText";
import ContentTextAndImage from "@/components/Auth/ContentTextAndImage";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  addaptiveHeight: true,
  dotsClass: "slick-dots absolute",
  className: "static",
};

const Auth = () => {
  return (
    <div className="h-screen overflow-hidden lg:grid lg:grid-cols-[44%_56%]">
      <div className="mx-auto px-10 pt-24 lg:pr-10 lg:pl-20 pb-7">
        <div className="mx-auto flex flex-col items-center lg:max-w-xl 2xl:max-w-2xl">
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
          <p className="mb-5 lg:mb-16 text-grey-500">
            Nền tảng là nơi giới thiệu, chia sẻ, lưu trữ tri thức của Cục An
            toàn thông tin; đồng thời cho phép cán bộ của Cục làm việc, trao
            đổi, học tập, rèn luyện trực tuyến mọi lúc, mọi nơi.
          </p>
          <form action="" className="flex w-full flex-col gap-4 xl:w-3/4">
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
            <Link href={"/dashboard"}>
              <Input
                id="password"
                name="password"
                value={"Đăng nhập"}
                type="submit"
                className="mt-5"
              />
            </Link>
          </form>
        </div>
      </div>
      <div className="hidden items-center bg-[url(../assets/images/onboarding.png)] text-white lg:flex">
        <div className="relative mx-auto min-h-[547px] flex-auto lg:max-w-[516px]">
          <Slider {...settings}>
            <ContentText quotes={quotes} />
            {texts.map((text, index) => (
              <div key={index}>
                <ContentTextAndImage
                  content={text.content}
                  title={text.title}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Auth;
