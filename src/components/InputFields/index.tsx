import { IInputBox } from "../../types";
import { MdKeyboardArrowRight } from "react-icons/md";

const InputBox = ({
   type,
   name,
   label,
   placeholder,
   initialValue,
   containerStyles,
}: IInputBox) => {
   return (
      <div>
         <div className="flex gap-2 items-center flex-grow w-full">
            <div
               className={`flex  gap-3 flex-col relative ${containerStyles}  `}
            >
               {label && <label htmlFor={name}>{label}</label>}
               <input
                  type={type}
                  name={name}
                  id={name}
                  placeholder={placeholder}
                  className={`text-base  w-full placeholder:text-secondary text-secondary bg-[#F4F4F4] rounded-3xl px-7 py-3 `}
                  defaultValue={initialValue && initialValue}
               />
            </div>
            <div>
               <div className=" w-10 h-10 justify-center  rounded-full flex items-center bg-secondary">
                  <MdKeyboardArrowRight size={25} className="text-primary" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default InputBox;
