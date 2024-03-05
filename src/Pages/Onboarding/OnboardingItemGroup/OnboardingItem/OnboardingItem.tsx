import { FC, useState } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { HStack, Icon, VStack, Text } from "@chakra-ui/react";
import { BsBriefcaseFill } from "react-icons/bs";
import { IconType } from "react-icons";

export interface OnboardingItemProps {
    title: string,
    desc: string,
    icon: IconType,
    onSelect?: Function,
    itemId?: number,
    selected?: boolean,
}

const [ selected, setSelected ] = useState(false)

export const OnboardingItem: FC<OnboardingItemProps> = ({
    title,
    desc,
    icon,
    onSelect,
    itemId= 0,
    selected= false,
    }) => {
    return (
        <HStack onClick={(e) => {
            onSelect(itemId);
            handleSelection();
        }} outline={selected ? 0 : 3}>
            <VStack>
                <Text fontSize={"lg"}>{title}</Text>
                <Text fontSize={"sm"}>{desc}</Text>
            </VStack>
            <Icon as={icon}/>
        </HStack>
    );
};

const handleSelection = () => {
    setSelected(!selected);
}