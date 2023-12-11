import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { pages, utilityPages } from "../../constants/pages";

const Footer = () => {
   return (
      <footer className="bg-primary py-20 px-10">
         <div>
            <img src={logo} className="object-contain" alt="" />
            <p>
               Faster payments, Expense reports done right. Budgeting made easy.
            </p>
         </div>
         <div>
            <h3>pages</h3>
            <ul className="flex flex-col justify-start  gap-3 capitalize">
               {pages.map((page: string, idx: number) => (
                  <li key={idx}>
                     <Link to="/path">{page}</Link>
                  </li>
               ))}
            </ul>
         </div>
         <div>
            <h3>utility pages</h3>
            <ul className="flex flex-col justify-start  gap-3 capitalize">
               {utilityPages.map((page: string, idx: number) => (
                  <li key={idx}>
                     <Link to="/path">{page}</Link>
                  </li>
               ))}
            </ul>
         </div>

         <div>
            <h3>Subscribe to our newsLetter</h3>
         </div>
      </footer>
   );
};

export default Footer;
