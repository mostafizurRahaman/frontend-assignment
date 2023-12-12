import { AiFillCheckCircle } from "react-icons/ai";

const ListItem = ({ text }: { text: string }) => {
   return (
      <li className="flex items-center gap-3">
         <AiFillCheckCircle size={18} />
         <span>{text}</span>
      </li>
   );
};

export default ListItem;
