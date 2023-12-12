import { TH3 } from "../../types";

const H3 = ({ text, elementStyles }: TH3) => {
   return (
      <h3 className={`text-lg font-semibold  uppercase mb-5 ${elementStyles}`}>
         {text}
      </h3>
   );
};

export default H3;
