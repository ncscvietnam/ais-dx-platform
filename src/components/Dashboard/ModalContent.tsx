import { modalOptions } from "@/const";
import Image from "next/image";
import React, { useState } from "react";

import aisLogo from "../../assets/svg/ais-logo.svg";

const ModalContent = ({ setIsOpen, isOpen }) => {
  const [selected, setSelected] = useState<null | number>(null);
  return (
    <div className="flex flex-col px-32 pb-11">
      <Image
        src={aisLogo}
        alt="AIS Logo"
        width={243}
        style={{
          maxWidth: "100%",
          height: "auto",
          margin: "0 auto",
        }}
      />
      <div className="lg:w-[485px]">
        <h1 className="mt-14 mb-2 text-2xl font-semibold">
          Thế nào là chuyển đổi số
        </h1>
        <p className="mb-5 text-xs text-dark">
          Hãy trả lời câu hỏi sau để có thể đăng nhập vào tài khoản của bạn
        </p>
        <div className="mb-8 flex flex-col gap-2 text-grey-500">
          {modalOptions.map((item, index) => {
            return (
              <div
                className={`flex h-12 w-full cursor-pointer items-center rounded-xl border border-grey-300 bg-grey-100 pl-4 hover:bg-grey-300 ${
                  selected && "border-blue-500 bg-[#3F8CFF99]"
                }`}
                key={index}
                onClick={() => setSelected(index)}
              >
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
        <button className="sm:text-md block w-full flex-1 rounded-lg border border-[#6554d518] bg-blue-500 p-3.5 text-white outline-none" onClick={() => setIsOpen(false)}>
          Xác nhận
        </button>
      </div>
    </div>
  );
};

export default ModalContent;
