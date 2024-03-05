import { OnboardingItemGroup } from "@Pages/Onboarding/OnboardingItemGroup/OnboardingItemGroup";
import { OnboardingItemProps } from "@Pages/Onboarding/OnboardingItemGroup/OnboardingItem/OnboardingItem";
import { BsBriefcaseFill, BsFillPeopleFill, BsQuestion } from "react-icons/bs";
import { FC, useState } from "react";
import { Text, VStack } from "@chakra-ui/react";

const item1: OnboardingItemProps = {
    title: "A business owner/company employee",
    desc: "Either a social media manager, a marketing executive, or anyone in between.",
    icon: BsBriefcaseFill,
    itemId: 1
}
const item2: OnboardingItemProps = {
    title: "An influencer/social media guru",
    desc: "Your follower count is your resume, and your content speaks for itself.",
    icon: BsFillPeopleFill,
    itemId: 2
}
const item3: OnboardingItemProps = {
    title: "Just some person",
    desc: "Curious eh? No worries, we’ve got content for you too! Thanks for checking us out.",
    icon: BsQuestion,
    itemId: 3
}

const innerProps: OnboardingItemProps[] = [
    item1,
    item2,
    item3
]

export const Page1: FC = () => {    
    return (
        <VStack>
            <Text fontSize={"xl"}>Who are you?</Text>
            <Text fontSize={"md"}>Please select one.</Text>
            <OnboardingItemGroup innerProps={innerProps}/>
        </VStack>
    );
};