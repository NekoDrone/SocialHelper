export interface UserInfo {
    username?: string,
    email?: string,
    firstName?: string,
    lastName?: string,
    id?: number,
    status: UserStatus,
    role: UserRole,
}

export enum UserStatus {
    NEW,
    ACTIVE,
}

export enum UserRole {
    ADMIN,
    NEW,
    OWNER,
    USER,
    OBSERVER,
}