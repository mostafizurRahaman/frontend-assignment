import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { pages, utilityPages } from "../../constants/pages";
import InputBox from "../InputFields";
import SocialMedia from "../SocialMedia/SocialMedia";
import H3 from "../Headings/H3";
import styles from "./footer.module.css";
const Footer = () => {
   return (
      <footer className="flex flex-col">
         <div className="bg-primary py-20 px-5 grid grid-cols-1   md:grid-cols-12 gap-5 w-full">
            <div className="md:col-span-4">
               <img src={logo} className="object-contain mb-3" alt="" />
               <p>
                  Faster payments, Expense reports done right. Budgeting made
                  easy.
               </p>
            </div>
            <div className="md:col-span-2">
               <H3 text="pages"></H3>
               <ul className="flex flex-col justify-start  gap-3 capitalize">
                  {pages.map((page: string, idx: number) => (
                     <li key={idx}>
                        <Link to="/path">{page}</Link>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="md:col-span-2 ">
               <H3 text="utility pages"></H3>
               <ul className="flex flex-col justify-start  gap-3 capitalize">
                  {utilityPages.map((page: string, idx: number) => (
                     <li key={idx}>
                        <Link to="/path">{page}</Link>
                     </li>
                  ))}
               </ul>
            </div>

            <div className="md:col-span-3 flex flex-col gap-3 w-full">
               <H3 text="Subscribe to our newsLetter"></H3>
               <p>*Only valuable resource no bullshit</p>
               <InputBox
                  type="email"
                  name="email"
                  placeholder="Enter your e-mail"
                  containerStyles={`before:absolute  before:w-10 before:h-10 before:top-1/3 before:right-0 before:block ${styles.footerInput}`}
               ></InputBox>
               <SocialMedia></SocialMedia>
            </div>
         </div>
         <div className="py-3 px-10 bg-[#F2F4F7]">
            <p className="text-base  text-center">
               {" "}
               &copy; All rights reserved by <b>Conversion Flow</b>. Powered by{" "}
               <b>Webflow.</b>
            </p>
         </div>
      </footer>
   );
};

export default Footer;
