/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

type Props = { params: { id: string } };

export default async function PostPage({ params }: Props) {
    const id = Number(params.id);
    if (!Number.isFinite(id)) return notFound();

    const post = await prisma.post.findUnique({
        where: { id },
        include: { author: true },
    });

    if (!post) return notFound();

    return (
        <article>
            <h1>{post.title}</h1>
            <p>By {post.author.email}</p>
            {post.content ? <p>{post.content}</p> : null}
        </article>
    );
}
