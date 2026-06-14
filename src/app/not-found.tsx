// import SectionHeader from "@/components/basic-ui/SectionHeader";
// import BrandBtn from "@/components/basic-ui/BrandBtn";

export const metadata = {
    title: "404 — Page Not Found",
    description: "The page you are looking for does not exist.",
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return (
        <main
            className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4"
            // style={{
            //     background:
            //         "linear-gradient(135deg, #071e2d 0%, #0c3146 50%, #164965 100%)",
            // }}
        >
            {/* Radial glow */}
            <div
                className="pointer-events-none absolute inset-0"
                // style={{
                //     background:
                //         "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(0,208,96,0.07) 0%, transparent 70%)",
                // }}
                // style={{
                //     background:
                //         "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,208,96,0.08) 0%, transparent 70%)",
                // }}
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,208,96,0.2) 0%, transparent 80%)",
                }}
            />

            {/* Grid */}
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.2]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(200,200,200,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,200,200,1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Giant 404 background text */}
            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
                aria-hidden
            >
                <span
                    className="text-malachite-dim leading-none font-black"
                    style={{ fontSize: "clamp(180px, 40vw, 420px)" }}
                >
                    404
                </span>
            </div>

            {/* Content */}
            <div className="relative z-10 flex max-w-xl flex-col items-center gap-6 text-center">
                {/* <SectionHeader
                    eyebrow="Error 404"
                    heading="Lost In Orbit"
                    highlight="Orbit"
                    support="The page you're looking for doesn't exist or has been moved. Lets get you back on track."
                /> */}

                {/* CTAs */}
                <div className="mt-2 flex items-center gap-6 max-sm:flex-col">
                    {/* <BrandBtn href="/" variant="primary">
                        Back To Home
                    </BrandBtn>
                    <BrandBtn href="/contact" variant="secondary">
                        Contact Us
                    </BrandBtn> */}
                </div>
            </div>
        </main>
    );
}
