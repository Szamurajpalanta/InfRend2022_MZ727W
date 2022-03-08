export interface Object {
    id: number;
    name: String;
    description: String;
    amount: number;
}

export const objects: Object[] = [
    {
        id: 0,
        name: "Teszt",
        description: "Teszt vagyok.",
        amount: 10
    },
    {
        id: 1,
        name: "Szintén teszt",
        description: "Én is.",
        amount: 0
    },
    {
        id: 2,
        name: "Objektum",
        description: "Én nem.",
        amount: 5
    }
];