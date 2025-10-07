// components/event-card.tsx (only the type is important here if you still use EventCard elsewhere)
export type Category = "Workshop" | "Career" | "Social" | "Outreach";

export type EventItem = {
    id: string;
    title: string;
    start: string; // ISO with offset, e.g. "2025-10-15T17:00:00-05:00"
    end: string;   // ISO with offset
    location: string;
    description?: string;
    category: Category;
};
