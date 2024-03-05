import { StatusBar } from 'expo-status-bar';
import { Landing } from "@Landing/Landing";
import { UserInfo } from "@Landing/types";
import { defaultInfo } from "./src/Data/userInfo";
import AsyncStorage from "@react-native-async-storage/async-storage/lib/typescript/AsyncStorage.native";

export default async function App() {
    const storedInfo = JSON.parse(await AsyncStorage.getItem("userInfo")) as UserInfo;
    const userInfo = storedInfo ? defaultInfo : storedInfo;
    return (
        <Landing userInfo={userInfo}/>
    );
}
