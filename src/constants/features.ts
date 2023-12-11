import { IFeature } from "../types";

import easyInvoice from "../assets/easy-invoicing.png";
import manageExpense from "../assets/manage-expenses.png";
import streamlinePayroll from "../assets/streamline-payroll.png";
import completeVisibility from "../assets/complete-visibility.png";

export const features: IFeature[] = [
   {
      icon: easyInvoice,
      title: "Easy Invoicing",
      description:
         "Automate recurring invoices and save time by using pre-built templates. Get paid on time.",
   },
   {
      icon: manageExpense,
      title: "Manage expenses",
      description:
         "Snap and categorize receipts in seconds and link your bank account.",
   },
   {
      icon: streamlinePayroll,
      title: "Streamline payroll",
      description:
         "Set up payroll and bonuses for all your employees, and never be late on salaries.",
   },
   {
      icon: completeVisibility,
      title: "Complete Visibility",
      description:
         "Get real-time visibility into every expense and payment, with a neat dashboard.",
   },
];
