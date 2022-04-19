import { Repository } from "./repo";

export interface RepoSearchResults {
    total_count: number;
    incomplete_results: boolean;
    items: Repository[];
}