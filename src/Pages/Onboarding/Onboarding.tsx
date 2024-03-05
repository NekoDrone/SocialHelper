import { useState } from "react";
import { Page0 } from "@Pages/Onboarding/OnboardingItemGroup/Pages/Page0";
import { Page1 } from "@Pages/Onboarding/OnboardingItemGroup/Pages/Page1";
import { Page2 } from "@Pages/Onboarding/OnboardingItemGroup/Pages/Page2";
import { Page3 } from "@Pages/Onboarding/OnboardingItemGroup/Pages/Page3";

export const Onboarding = () => {
    
    const [ page, setPage ] = useState(1);
    
    switch(page) {
        case 0:
            return (
                <Page0/>
            );
        case 1: 
            return (
                <Page1/>
            );
        case 2:
            return (
                <Page2/>
            );
        case 3:
            return (
                <Page3/>
            );
        default:
            return (
                <></>
            )
    }
};