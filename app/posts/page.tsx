/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/jsx-no-comment-textnodes */
import { prisma } from "@/lib/prisma";
import type { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default async function PostsPage() {
    const posts = await prisma.post.findMany({
        include: { author: true },
        orderBy: { id: "desc" },
    });

    return (
        <div>
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
            {posts.map((p: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; author: { email: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }; }) => (
                <div key={p.id}>
                    <h2>{p.title}</h2>
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-member-access
                    <p>{p.author.email}</p>
                </div>
            ))}
        </div>
    );
}
