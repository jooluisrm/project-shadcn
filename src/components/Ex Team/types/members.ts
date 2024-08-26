import { Role } from "./role";

export type Members = {
    id: number;
    avatar: string;
    name: string;
    email: string;
    role: Role;
};