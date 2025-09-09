export function StatBar() {
    const items = [
        { label: "Members", value: "120+" },
        { label: "Partner Orgs", value: "15" },
        { label: "Events / Semester", value: "10+" },
    ];


    return (
        <div className="border-y border-zinc-200/70 bg-zinc-50/60 py-6 dark:border-zinc-800/60 dark:bg-zinc-900/40">
            <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 px-4 text-center text-sm sm:text-base">
                {items.map((i) => (
                    <div key={i.label} className="">
                        <div className="text-2xl font-bold tracking-tight">{i.value}</div>
                        <div className="mt-1 text-zinc-600 dark:text-zinc-400">{i.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}