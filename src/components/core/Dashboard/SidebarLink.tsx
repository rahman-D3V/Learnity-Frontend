import type { NavigateFunction } from "react-router-dom";

const SidebarLink = ({
  iconPath,
  navigate,
  path,
  Icon,
  name,
}: SidebarLinkProps) => {
  return (
    <div
      onClick={() => navigate(iconPath)}
      className={`w-full py-2 px-6 flex gap-3 items-center text-richblack-300 font-inter font-medium text-[14px] hover:bg-richblack-700  ${path == iconPath ? "bg-yellow-800 cursor-default border-l-2 border-yellow-50 text-yellow-50 hover:bg-yellow-800" : "cursor-pointer"} `}
    >
      <Icon size={16} />
      <p>{name}</p>
    </div>
  );
};

export default SidebarLink;

type SidebarLinkProps = {
  iconPath: string;
  path: string;
  Icon: React.ElementType;
  name: string;
  navigate: NavigateFunction;
};
