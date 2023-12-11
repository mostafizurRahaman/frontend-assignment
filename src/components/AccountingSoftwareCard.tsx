import Button from "./Button";

const AccountingSoftwareCard = () => {
   return (
      <div className="bg-secondary  h-full p-10  rounded-3xl flex justify-start flex-col gap-7">
         <h1 className=" text-3xl  md:text-5xl   text-primary  font-bold text-start  ">
            Accounting software <br />
            <span className="italic text-info text-[90%]">
               that handles it's all.
            </span>
         </h1>
         <div>
            <Button text="See All Features"></Button>
         </div>
      </div>
   );
};

export default AccountingSoftwareCard;
