import { IButton } from "../types";
import { GoArrowUpRight } from "react-icons/go";

const Button = ({ containerStyles, text, isDisabled, action }: IButton) => {
   return (
      <button
         className={`bg-accent text-black px-6 py-3 flex items-center justify-center gap-2 uppercase  rounded-3xl font-medium   ${containerStyles}`}
         disabled={isDisabled}
         onClick={action}
      >
         {text} <GoArrowUpRight size={20} />
      </button>
   );
};

export default Button;
