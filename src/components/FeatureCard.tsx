import { IFeature } from "../types";

const FeatureCard = ({ icon, title, description }: IFeature) => {
   return (
      <article className="bg-primary  rounded-3xl p-10 shadow-[5px_5px_10px_10px_#dddddd]  flex flex-col gap-3 items-start justify-start text-start">
         <img src={icon} className="object-contain w-auto  h-auto" alt="" />
         <h2 className="text-2xl font-bold capitalize "> {title}</h2>
         <p>{description}</p>
      </article>
   );
};

export default FeatureCard;
