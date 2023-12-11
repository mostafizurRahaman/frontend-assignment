import cardImage from "../../assets/cardImage.png";
import { benefits } from "../../constants/benifits";
import Button from "../Buttons/Button";
import ListItem from "../ListItem/ListItem";
import styles from "./ManageCardSection.module.css";

const ManageCardSection = () => {
   return (
      <section className="flex md:flex-row flex-col items-start  gap-3 md:gap-5 justify-between mt-10  px-10">
         <div
            className={`flex items-start  relative justify-start md:w-1/2 before:min-w-full before:h-[200px]    before:translate-y-[-20%]  before:block  before:bg-cover  before:absolute before:bottom-0 before:left-0  ${styles.image}   `}
         >
            <img
               src={cardImage}
               className={`object-cover relative md:w-[90%]   `}
               alt=""
            />
         </div>
         <div className="text-start w-full md:w-1/2   flex flex-col  gap-7  justify-between ">
            <h2 className="  text-4xl md:text-5xl font-bold mt-5 ">
               Manage{" "}
               <span className="italic ">
                  all your <br />
                  cards
               </span>{" "}
               in one place
            </h2>
            <p className=" text-secondary   md:text-xl">
               Centralize and simplify payments, and get comprehensive insights
               on your financials. Connect your bank account and your card to
               Milestone.
            </p>
            <ul className="flex flex-col  gap-3 font-semibold">
               {benefits.map((el: string, idx: number) => (
                  <ListItem key={idx} text={el}></ListItem>
               ))}
            </ul>
            <div>
               <Button text="See all features"></Button>
            </div>
         </div>
      </section>
   );
};

export default ManageCardSection;
