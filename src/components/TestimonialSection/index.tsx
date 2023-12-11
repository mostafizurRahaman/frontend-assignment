import BrandSlider from "../BrandSlider";
import ReviewerVideoCard from "../ReviewerVideoCard";
import ReviewCard from "../reviewCard";

const TestimonialSection = () => {
   return (
      <section className=" mt-20 p-10 md:p-20 bg-secondary w-full ">
         <div className="bg-warn p-12 rounded-3xl flex flex-col gap-10">
            <div className="">
               <h2 className="  text-3xl md:text-4xl font-bold mt-5 text-primary ">
                  <span className="text-info italic">Kind words </span> from our{" "}
                  <br />
                  customers
               </h2>
            </div>
            <div className="flex flex-col  lg:flex-row gap-20">
               <ReviewCard
                  stars={3}
                  message="“Milestone helps me keep a clean, organized
                        ledger that I can access anywhere. The UI is so
                        intuitive that anyone can use it, without any
                        knowledge on the system. I also love the financial
                        reports!"
                  name="Wade Warren"
                  designation="Founder & CEO, Thunder"
               ></ReviewCard>

               <ReviewerVideoCard />
            </div>
            <BrandSlider></BrandSlider>
         </div>
      </section>
   );
};

export default TestimonialSection;
