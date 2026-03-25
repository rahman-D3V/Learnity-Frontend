import { HiMiniArrowSmallRight } from "react-icons/hi2";

const Button = ({ color, content, arrow }: ButtonProps) => {
  return (
    <>
      {color === "yellow" ? (
        <button className="bg-[#FFD60A] shadow-[-2px_-2px_0px_0px_#FFFFFF82_inset] text-[#000814] rounded-lg px-6 py-3 font-inter font-medium text-[16px] cursor-pointer flex items-center gap-2">
          {content} {arrow && <HiMiniArrowSmallRight />}
        </button>
      ) : (
        <button className="bg-[#161D29] rounded-lg px-6 py-3 shadow-[-2px_-2px_0px_0px_#FFFFFF2E_inset] font-inter font-medium text-[16px] text-[#F1F2FF]  cursor-pointer flex items-center gap-2">
          {content} {arrow && <HiMiniArrowSmallRight />}
        </button>
      )}
    </>
  );
};

export default Button;

type ButtonProps = {
  color: "yellow" | "black";
  content: string;
  arrow: boolean;
  linkTo?: string;
};
