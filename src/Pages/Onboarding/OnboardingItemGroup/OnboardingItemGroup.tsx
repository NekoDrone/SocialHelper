import { OnboardingItem, OnboardingItemProps } from "./OnboardingItem/OnboardingItem";
import { FC, useState } from "react";

export interface OnboardingItemGroupProps {
    innerProps: OnboardingItemProps[]
}

export const OnboardingItemGroup: FC<OnboardingItemGroupProps> = ({
    innerProps,
    }) => {

    const [ selected, setSelected ] = useState(undefined)
    
    const handleSelection = (itemId: number) => {
        setSelected(itemId);
    }
    
    return (
        <>
            {innerProps.map((innerProp) => (
                <OnboardingItem
                    title={innerProp.title}
                    desc={innerProp.desc}
                    icon={innerProp.icon}
                    onSelect={handleSelection}
                    selected={selected === innerProp.itemId}
                    itemId={innerProp.itemId}
                />
            ))}
        </>
    );
};