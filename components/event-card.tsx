export type Category = "Workshop" | "Career" | "Social" | "Outreach";

export type EventItem = {
    id: string;
    title: string;
    start: string; // "2025-10-15T17:00:00"
    end: string;
    location: string;
    description?: string;
    category: Category;
};
