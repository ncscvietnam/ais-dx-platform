import React from "react";

const ContentText = ({ quotes }: { quotes: string[] }) => {
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

export default ContentText;
