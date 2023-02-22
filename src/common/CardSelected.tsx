import Image from "../components/Image";
export interface CardSelectedProps {
  icon?: any;
  content?: string;
}
export const CardSelected = (props: CardSelectedProps) => {
  const { icon, content } = props;
  return (
    <div className="my-5 flex w-full flex-col items-center justify-between rounded-lg bg-white p-5 md:h-[200px] md:w-[264px]">
      <div className="relative h-20 w-20 cursor-pointer ">
        <Image src={icon} alt="logo" layout="fill" objectFit="contain" />
      </div>

      <div>
        <p className="font-bold">{content}</p>
      </div>
    </div>
  );
};
