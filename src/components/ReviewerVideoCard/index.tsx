import playButton from "../../assets/playButton.png";

const ReviewerVideoCard = () => {
   return (
      <div className="   w-[300px] h-[300px]   md:w-full md:h-auto lg:min-w-[300px] mx-auto  lg:w-[300px] lg:h-[300px] relative">
         <video
            className="   w-[300px] h-[300px] md:w-full md:h-auto lg:w-min-[300px] lg:h-[300px] rounded-2xl"
            width="300"
            height="338"
            controls
         >
            <source
               src="https://youtu.be/fiQ4QlJTJO4?si=ivcrR19AWMUJbA1K"
               type="video/mp4"
            />
            <source
               src="https://youtu.be/fiQ4QlJTJO4?si=ivcrR19AWMUJbA1K"
               type="video/ogg"
            />
         </video>
         <img
            src={playButton}
            alt="palyButton"
            className=" w-[80px]  cursor-pointer h-auto absolute top-[50%] left-1/2 translate-x-[-50%] translate-y-[-50%]"
         />
      </div>
   );
};

export default ReviewerVideoCard;
