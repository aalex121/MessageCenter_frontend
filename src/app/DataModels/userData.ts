import { UserRole } from '../Enums/userRole';

export interface UserData {
    id: number;
    name: string;
    paswword: string;
    roleId: UserRole;
}