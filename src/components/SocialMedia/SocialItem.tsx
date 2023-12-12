const SocialItem = ({ children }: { children: React.ReactNode }) => {
   return (
      <li className="rounded-full bg-[#F4F4F4] w-10 h-10  flex items-center justify-center">
         {children}
      </li>
   );
};

export default SocialItem;
