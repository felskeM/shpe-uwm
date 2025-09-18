import { Section } from "@/components/section";
import { CalendarMonth } from "@/components/calendar-month";

const events = [
    {
        id: "gbm-1",
        title: "First General Body Meeting",
        start: "2025-09-17T16:00:00",
        end: "2025-09-17T19:00:00",
        location: "LECWC 203",
        description: "Tomorrow, we have our first general body meeting, it's a more lowkey event just to get to know people in the chapter and see what events we have planning this year.",
    },
    {
        id: "ceas-involvement-fair",
        title: "CEAS Involvement Fair",
        start: "2025-09-18T11:30:00",
        end: "2025-09-18T13:00:00",
        location: "Outside of the EMS building",
        description: "Come and see us at the CEAS involvement fair to get to know other STEM orgs on campus. If you went to the Involvement fair last week, it's going to pretty much the same thing except STEM related.",
    },
    {
        id: "speed-dating",
        title: "Speed Dating",
        start: "2025-09-18T17:30:00",
        end: "2025-09-18T18:30:00",
        location: "Union 381",
        description: "Lastly, join us for our Speed Dating (career-wise, not the actual kind).",
    },
];


export default function Page() {
    return (
        <Section title="Events" subtitle="See the calendar and add events to your own.">
            <div className="mt-4">
                <CalendarMonth events={events} />
            </div>
        </Section>
    );
}