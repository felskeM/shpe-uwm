"use client";

import NextImage, { type ImageProps } from "next/image";
import { withBasePath } from "@/lib/basePath";

export default function BpImage(props: ImageProps) {
  const { src, ...rest } = props;
  let finalSrc: ImageProps["src"] = src;

  if (typeof src === "string" && src.startsWith("/")) {
    finalSrc = withBasePath(src) as ImageProps["src"];
  }
  return <NextImage src={finalSrc} {...rest} />;
}
