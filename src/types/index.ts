import { MouseEvent } from "react";

export type IOnClick = (e: MouseEvent<HTMLButtonElement>) => void;

export interface IButton {
   containerStyles?: string;
   text: string;
   isDisabled?: boolean;
   action?: IOnClick;
}

export interface ISliderItem {
   logo: string;
}

export interface IReviewCard {
   stars: number;
   message: string;
   name: string;
   designation: string;
}

export interface IFeature {
   icon: string;
   title: string;
   description: string;
}

export type TBenefits = string[];

export interface IInputBox {
   type: string;
   name: string;
   label?: string;
   placeholder: string;
   initialValue?: string | number;
   errorMsg?: string;
   containerStyles?: string;
}

export interface TH3 {
   text: string;
   elementStyles?: string;
}
