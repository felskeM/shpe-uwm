type SearchParams = { error?: string };

function errorMessage(code: string | undefined): string | null {
    if (!code) return null;
    if (code === "missing") return "Please enter both email and password.";
    if (code === "invalid") return "Invalid email or password.";
    return "Something went wrong. Please try again.";
}

export default async function LoginPage({
    searchParams,
}: {
    searchParams: Promise<SearchParams>;
}) {
    const { error } = await searchParams;
    const message = errorMessage(error);

    return (
        <div className="max-w-md mx-auto mt-16 rounded-2xl border border-(--line) p-6 bg-[color-mix(in_oklab,var(--background)_85%,black_15%)]">
            <h1 className="text-2xl font-semibold mb-4">E-Board Login</h1>
            <p className="text-sm text-white/70 mb-4">
                SHPE UWM executive board access only.
            </p>

            {message && (
                <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/40 px-3 py-2 text-sm text-red-200">
                    {message}
                </div>
            )}

            <form method="POST" action="/api/login" className="space-y-4">
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-white/80 mb-1"
                    >
                        UWM Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full rounded-md border border-(--line) bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color-mix(in_oklab,var(--shpe-accent)_80%,transparent)]"
                    />
                </div>

                <div>
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-white/80 mb-1"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="current-password"
                        className="w-full rounded-md border border-(--line) bg-black/30 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[color-mix(in_oklab,var(--shpe-accent)_80%,transparent)]"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full mt-2 rounded-md bg-[color-mix(in_oklab,var(--shpe-accent)_85%,black_15%)] px-4 py-2 text-sm font-medium text-white hover:bg-[color-mix(in_oklab,var(--shpe-accent)_95%,black_5%)] transition"
                >
                    Sign in
                </button>
            </form>
        </div>
    );
}
