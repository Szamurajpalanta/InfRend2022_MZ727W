export interface Joke {
    user: string;
    text: string;
    upvotes: number;
    downvotes: number;
}

export const jokes: Joke[] = [
    {
        user: "Aunt Arctic",
        text: "Why don't you see a penguin in the U.K.? Because they're afraid of Wales!",
        upvotes: 20,
        downvotes: 10
    },
    {
        user: "Rockhopper",
        text: "What bird can write underwater? A ball point PENguin!",
        upvotes: 10,
        downvotes: 100
    },
    {
        user: "Sensei",
        text: "What do you call a penguin in the desert? Lost.",
        upvotes: 200,
        downvotes: 20
    }
]