import { Landing } from "@Landing/Landing";
import { UserInfo } from "@Landing/types";
import { defaultInfo } from "./src/Data/userInfo";
import AsyncStorage from "@react-native-async-storage/async-storage/lib/typescript/AsyncStorage.native";
import { ChakraProvider } from "@chakra-ui/react";

export default async function App() {
    const storedInfo = JSON.parse(await AsyncStorage.getItem("userInfo")) as UserInfo;
    const userInfo = storedInfo ? defaultInfo : storedInfo;
    
    return (
        <ChakraProvider>
            <head>
                <title>The Social Helper</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"anonymous"}/>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
            </head>
            <Landing userInfo={userInfo}/>
        </ChakraProvider>
        
    );
}
