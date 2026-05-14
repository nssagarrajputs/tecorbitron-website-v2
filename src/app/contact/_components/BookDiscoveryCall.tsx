"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import SectionContainer from "@/components/basic-ui/SectionContainer";

export default function BookDiscoveryCall() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "discovery-call" });
            cal("ui", {
                theme: "light",
                cssVarsPerTheme: {
                    light: { "cal-brand": "#00d060" },
                    dark: { "cal-brand": "#00d060" },
                },
                hideEventTypeDetails: false,
                layout: "month_view",
            });
        })();
    }, []);

    return (
        <SectionContainer
            eyebrow="Prefer to Talk First"
            heading="Or Book a Discovery Call"
            highlight="Discovery Call"
            support="Pick a time that works for you — we'll discuss your project, understand your goals, and map out the clearest path forward."
        >
            <div className="flex-center *:text-small flex-wrap gap-4 *:rounded-full *:px-4 *:py-1 *:font-semibold">
                <span className="bg-malachite-dim text-malachite">
                    30-minute intro call
                </span>
                <span className="bg-deepspace-dim text-deepspace">
                    Scope & next steps
                </span>
                <span className="bg-deepspace-dim text-deepspace">
                    No obligation
                </span>
            </div>

            <Cal
                namespace="discovery-call"
                calLink="tecorbitron/discovery-call"
                style={{
                    width: "100%",
                    height: "100%",
                    overflow: "scroll",
                }}
                config={{
                    layout: "month_view",
                    useSlotsViewOnSmallScreen: "true",
                    theme: "light",
                }}
            />
        </SectionContainer>
    );
}
