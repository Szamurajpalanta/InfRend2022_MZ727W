import { User } from "./user";

export interface UserSearchResults {
    total_count: number;
    incomplete_results: boolean;
    items: User[];
}