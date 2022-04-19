import { User } from "./user";

export interface Repository {
    id: number;
    name: string;
    description: string;
    owner_login: string;
    avatar_url: string;
    language: string;
    size: number;
    html_url: string;
    owner: User;
    stargazers_count: number;
}