import { IReviewCard } from "../../types";
import { FaStar } from "react-icons/fa";
import { SlStar } from "react-icons/sl";
const ReviewCard = ({ stars, message, name, designation }: IReviewCard) => {
   return (
      <article className=" md:col-span-3 bg-secondary flex gap-5 flex-col items-start p-8 rounded-3xl">
         <div className="flex items-center gap-2 text-orange-500 ">
            {[...Array(stars).keys()]?.map((star: number) => (
               <FaStar key={star} size={20}></FaStar>
            ))}
            {[...Array(5 - stars).keys()]?.map((star: number) => (
               <SlStar key={star} size={20}></SlStar>
            ))}
         </div>
         <p className="text-lg text-info">
            <span className="text-primary">{message.split(".")[0]}</span>{" "}
            {message.replace(message.split(".")[0], "")}{" "}
         </p>

         <div className="text-info  capitalize font-bold mt-5">
            <h4 className="text-lg ">{name}</h4>
            <h5 className="text-sm">{designation}</h5>
         </div>
      </article>
   );
};

export default ReviewCard;
