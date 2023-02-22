import React from "react";
import Image from "next/image";
import { LockClosedIcon, UserIcon } from "@heroicons/react/24/solid";

import Slider from "react-slick";
import Input from "@/common/Input";

import aisLogo from "../assets/svg/ais-logo.svg";
import bitmap from "../assets/images/bitmap.png";

const quotes = [
  "Những gì anh, chị còn chưa biết, chưa rõ.",
  "Những điều anh, chị muốn chia sẻ, trao đổi.",
  "Những thứ anh, chị muốn học tập, rèn luyện.",
  "Những việc anh, chị muốn làm ngày hôm nay.",
  "Những giá trị mới anh, chị muốn và sẽ tạo ra.",
];

const texts: { title: string; content: string }[] = [
  {
    title: "Đảng vụ",
    content: "Quản lý sổ tay Đảng viên điện tử",
  },
  {
    title: "Công vụ",
    content: "Lịch công tác, Nhiệm vụ công tác, Văn bản điẹn tử, Thư điện tử",
  },
  {
    title: "Trợ giúp",
    content: "Học trực tuyến, Tri thức mở, Tủ sách điện tử",
  },
];

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

const ContentText = () => {
  return (
    <div className="mx-5">
      <h1 className="mb-6 text-3xl font-bold leading-[50px] xl:mb-12 xl:text-[40px]">
        Với mục tiêu chuyển đổi số tổng thể và toàn diện
      </h1>
      <p className="mb-6 text-sm font-normal">
        Nền tảng được xây dựng nhằm đào tạo, phổ biến, đồng bộ tri thức và giảm
        khoảng cách về trình độ năng lực, giảm sự vất vả, giảm rủi ro, rút ngắn
        thời gian, nâng cao chất lượng công việc của toàn thể cán bộ Cục An toàn
        thông tin.
      </p>
      <ul>
        {quotes.map((quote, index) => (
          <li key={index} className="relative pl-3 text-sm font-normal">
            <div className="absolute top-1/2 left-0 h-1 w-1 rounded-full bg-white"></div>
            {quote}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ContentTextAndImage = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <div className="mx-5">
      <Image
        src={bitmap}
        alt="AIS Logo"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
      <div className="text-center">
        <h1 className="mt-10 text-[40px] font-bold leading-10 xl:mt-20">
          {title}
        </h1>
        <p className="mt-5 text-sm">{content}</p>
      </div>
    </div>
  );
};

const Auth = () => {
  return (
    <div className="h-screen overflow-hidden lg:grid lg:grid-cols-[44%_56%]">
      <div className="mx-auto px-10 pt-24 lg:pr-10 lg:pl-20 ">
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
          <p className="mb-16 text-grey-500">
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
            <Input
              id="password"
              name="password"
              value={"Đăng nhập"}
              type="submit"
              className="mt-5"
            />
          </form>
        </div>
      </div>
      <div className="hidden items-center bg-[url(../assets/images/onboarding.png)] text-white lg:flex">
        <div className="relative mx-auto min-h-[547px] flex-auto lg:max-w-[516px]">
          <Slider {...settings}>
            <ContentText />
            {texts.map((text, index) => (
              <div key={index}>{ContentTextAndImage(text)}</div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Auth;
