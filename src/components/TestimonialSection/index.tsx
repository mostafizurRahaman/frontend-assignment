import ModalVideo from "react-modal-video";
import BrandSlider from "../BrandSlider";
import ReviewerVideoCard from "../ReviewerVideoCard";
import ReviewCard from "../reviewCard";
import { useState } from "react";
import "react-modal-video/css/modal-video.min.css";
const TestimonialSection = () => {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   return (
      <section className=" mt-20 p-5 md:p-20 bg-secondary w-full ">
         <div className="max-w-7xl mx-auto  bg-warn p-6 md:p-12 rounded-3xl flex flex-col gap-10">
            <div className="">
               <h2 className="  text-3xl md:text-4xl font-bold mt-5 text-primary ">
                  <span className="text-info italic">Kind words </span> from our
                  <br className=" hidden  md:block" />
                  <span className="ml-1 md:ml-0"> customers</span>
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

               <ReviewerVideoCard setIsOpen={setIsOpen} />
            </div>
            <div>
               <ModalVideo
                  channel="youtube"
                  youtube={{ mute: 0, autoplay: 0 }}
                  allowFullScreen={true}
                  isOpen={isOpen}
                  videoId="fiQ4QlJTJO4"
                  onClose={() => setIsOpen(false)}
               />
            </div>
            <BrandSlider></BrandSlider>
         </div>
      </section>
   );
};

export default TestimonialSection;
