import { withBasePath } from "@/lib/basePath";
export default function Head() {
  return (
    <>
      <title>SHPE UWM | Empowering Hispanic STEM Leaders</title>
      <meta
      name="description"
      content="SHPE chapter at UWM—events, programs, & community."
      />
      <meta name="theme-color" content="#CF371B" />
      <meta name="author" content="SHPE UWM Chapter" />
      <meta name="keywords" content="SHPE, UWM, Hispanic, STEM, engineering" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://shpeuwm.org" />
      <link rel="apple-touch-icon" href={`${withBasePath}/apple-touch-icon.png`} />
      <meta name="application-name" content="SHPE UWM" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
      />
    </>
  );
}
