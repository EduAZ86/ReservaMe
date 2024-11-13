import { FC } from "react";
import { ISocialSingUpProps } from "./types";

import { SocialButton } from "./SocialButton/SocialButton";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Caption } from "@/ui/components/common";

export const SocialSingUp: FC<ISocialSingUpProps> = ({

}) => {
    return (
        <div
            className={`                
                w-full h-fit 
                flex flex-col gap-4 
                justify-center items-center
                py-6
                border-t-[1px] border-solid
                 border-light-acent dark:border-dark-acent 
                 border-opacity-25 dark:border-opacity-25
                `}
        >
            <Caption
                text="o registrate con una cuenta de google o facebook"
            />

            <div className={`
            w-full h-fit 
            flex flex-row 
            justify-center items-center gap-4`
            }>
                <SocialButton
                    icon={faGoogle}
                    iconColor="text-[#DB4437]"
                />
                <SocialButton
                    icon={faFacebook}
                    iconColor="text-[#4267B2]"
                />

            </div>
        </div>
    )
}