import Image from "@/components/BpImage";

const logos = [
    "/images/GELogo.png",
    "/images/EatonLogo.png",
    "/images/RHCLogo.png",
];

export function SponsorMarquee() {
    return (
        <div className="p-3 mt-6 marquee rounded-xl border-soft bg-black/15">
            <div className="marquee-track">
                {[...logos, ...logos].map((src, i) => (
                    <div key={i} className="h-10 w-[140px] relative shrink-0 opacity-80 hover:opacity-100 transition-opacity">
                        <Image src={src} alt="" fill sizes="140px" className="object-contain logo-img" priority />
                    </div>
                ))}
            </div>
        </div>
    );
}
