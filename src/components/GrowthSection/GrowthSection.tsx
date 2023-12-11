import { features } from "../../constants/features";
import { IFeature } from "../../types";
import AccountingSoftwareCard from "../AccountingSoftwareCard/AccountingSoftwareCard";
import FeatureCard from "../FeatureCard/FeatureCard";
import styles from "./GrowthSection.module.css";
const GrowthSection = () => {
   return (
      <section className={`grid  grid-cols-1 md:grid-cols-3 gap-10 pt-10 `}>
         <div
            className={` md:col-span-2 relative md:before:w-[500px]  before:w-[300px] md:before:h-[500px] before:h-[300px] before:bg-cover before:absolute before:block  before:bottom-0 before:left-0 md:before:translate-x-[25%]  md:before:translate-y-[50%] before:translate-x-0 before:translate-y-[50%] before:-z-30  md:after:w-[500px] md:after:h-[500px] after:w-[300px] after:h-[300px] after:bg-cover after:absolute after:block after:bottom-0 after:left-0 md:after:translate-x-[80%] md:after:translate-y-[50%]  after:translate-x-[50%] after:translate-y-[50%] after:-z-30 ${styles.accountingSoftware}`}
         >
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
      </section>
   );
};

export default GrowthSection;

// font weight :
700;
400;
500;
