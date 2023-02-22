import Image from "next/image";
import bitmap from "@/assets/images/bitmap.png";

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

export default ContentTextAndImage;
