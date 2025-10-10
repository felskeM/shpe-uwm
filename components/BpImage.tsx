'use client';

import NextImage, { type ImageProps } from 'next/image';
import { withBasePath } from '@/lib/basePath';

// Drop-in replacement for next/image that is basePath-aware for local /public assets
export default function BpImage(props: ImageProps) {
    const { src, ...rest } = props;
    let finalSrc = src as string;

    if (typeof src === 'string' && src.startsWith('/')) {
        finalSrc = withBasePath(src);
    }
    // Next/Image is fine with a string URL here
    return <NextImage src={finalSrc as any} {...rest} />;
}
