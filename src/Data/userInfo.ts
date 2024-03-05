import { UserInfo, UserRole, UserStatus } from "@Landing/types";

export const defaultInfo: UserInfo = {
    status: UserStatus.NEW,
    role: UserRole.NEW,
}