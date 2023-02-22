export interface MenuItemProps {
  icon?: any;
  content?: string;
  onClick?: () => void;
}
export const MenuItem = (props: MenuItemProps) => {
  const { icon, content, onClick } = props;
  return (
    <div className="flex flex-row space-x-2 py-5 " onClick={onClick}>
      <div className="">{icon}</div>
      <div className="">
        <p className="text-black hover:font-bold">{content}</p>
      </div>
    </div>
  );
};
