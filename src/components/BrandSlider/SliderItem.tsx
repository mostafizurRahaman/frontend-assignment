import { ISliderItem } from "../../types";

const SliderItem = ({ logo }: ISliderItem) => {
   return (
      <div className="">
         <img src={logo} className="opacity-50 hover:opacity-100" alt="" />
      </div>
   );
};

export default SliderItem;
