import Image from "../components/Image";

export interface CardConnectProps {
  icon?: any;
  title?: string;
  content?: string;
}

export const CardConnect = (props: CardConnectProps) => {
  const { icon, title, content } = props;

  return (
    <div className="flex w-full items-center space-x-2 rounded-lg border border-grey-500 p-5 md:w-[196px]">
      <div className="relative h-10 w-10 cursor-pointer ">
        <Image src={icon} alt="logo" layout="fill" objectFit="contain" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-black ">{title}</p>
        <p className="truncate  text-sm text-grey-500">{content}</p>
      </div>
    </div>
  );
};
