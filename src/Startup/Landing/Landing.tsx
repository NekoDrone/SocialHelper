import { FC } from "react";
import { UserInfo, UserStatus } from "./types";
import { Onboarding } from "@Pages/Onboarding/Onboarding";
import { HomePage } from "@Pages/HomePage/HomePage";

interface AppLandingProps {
    userInfo: UserInfo
}

export const Landing: FC<AppLandingProps> = ({
    userInfo
    }) => {
    if(userInfo.status == UserStatus.NEW) {
        return (
            <Onboarding/>
        )
    } else {
        return (
            <HomePage/>
        );
    }
};