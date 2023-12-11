import { features } from "../constants/features";
import { IFeature } from "../types";
import AccountingSoftwareCard from "./AccountingSoftwareCard";
import FeatureCard from "./FeatureCard";

const GrowthSection = () => {
   return (
      <div className="grid grid-cols-3 gap-10">
         <div className="col-span-2 h-full">
            <AccountingSoftwareCard></AccountingSoftwareCard>
         </div>
         {features.map((features: IFeature, idx: number) => (
            <FeatureCard
               key={idx}
               icon={features.icon}
               title={features.title}
               description={features.description}
            ></FeatureCard>
         ))}
      </div>
   );
};

export default GrowthSection;

// font weight :
700;
400;
500;
