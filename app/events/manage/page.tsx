import { redirect } from "next/navigation";
import { getSessionUser } from "@/lib/session";
import EventForm from "./EventForm";
import EventList from "./EventList";

export default async function ManageEventsPage() {
    const user = await getSessionUser();

    if (!user || (user.role !== "eboard" && user.role !== "admin")) {
        redirect("/login");
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-2xl font-semibold">Manage Events</h1>
            <EventForm />
            <EventList />
        </div>
    );
}
