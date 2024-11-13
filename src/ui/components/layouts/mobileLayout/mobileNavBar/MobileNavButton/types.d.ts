import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface IMobileNavButtonProps {
    title: string;
    href: string;
    icon: IconProp;
    isSelected: boolean;
}