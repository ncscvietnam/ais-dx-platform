const TabSelected = (props: any) => {
  const { tabs, icons = false, tabSelected, onChange } = props;
  return (
    tabs &&
    tabs.length > 0 && (
      <div className=" grid w-96 grid-cols-4 gap-2 ">
        {tabs.map((tab: any, index: any) => {
          return (
            <div
              onClick={() => {
                onChange(index);
              }}
              key={index}
              className={`cursor-pointer items-center  p-2  text-sm font-medium  
            ${
              tabSelected === index
                ? " border-b border-black text-black "
                : ` text-[#a1a5b7]`
            }
          `}
            >
              <span className="font-bold md:text-[16px]">{tab}</span>
            </div>
          );
        })}
      </div>
    )
  );
};

export default TabSelected;
