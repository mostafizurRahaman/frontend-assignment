import {
   FaFacebookF,
   FaInstagram,
   FaLinkedinIn,
   FaTwitter,
} from "react-icons/fa";
import SocialItem from "./SocialItem";
import H3 from "../Headings/H3";

const socialMediaIcons: JSX.Element[] = [
   <FaFacebookF size={20}></FaFacebookF>,
   <FaInstagram size={20}></FaInstagram>,
   <FaLinkedinIn size={20}></FaLinkedinIn>,
   <FaTwitter size={20}></FaTwitter>,
];

const SocialMedia = () => {
   return (
      <div className="flex flex-col gap-5">
         <H3 text="Social Media" elementStyles="mt-5"></H3>
         <ul className="flex items-center  gap-3 -mt-5">
            {socialMediaIcons.map((el) => (
               <SocialItem children={el}></SocialItem>
            ))}
         </ul>
      </div>
   );
};

export default SocialMedia;
