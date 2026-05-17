import SectionContainer from "@/components/basic-ui/SectionContainer";
import { LinkIcon } from "lucide-react";

const details = [
    { label: "Legal Name", value: "Tecorbitron Solutions Pvt. Ltd." },
    { label: "CIN Number", value: "U62011UP2024PTC207353" },
    { label: "Head Office", value: "Ghaziabad, NCR, INDIA" },
    { label: "Official Email", value: "info@tecorbitron.com" },
];

export default function Credibility() {
    return (
        <SectionContainer
            width="md"
            eyebrow="Credibility"
            heading="A Company You Can Trust"
            highlight="Trust"
            support="We are a fully registered Private Limited company — not
                        a freelancer or unregistered agency. Enterprise clients
                        and international partners can verify our credentials
                        through official channels."
        >
            <h3 className="text-body -mb-8 text-center font-bold">
                -: Key Information Details :-
            </h3>
            <div className="grid grid-cols-1 gap-4 lg:gap-8 md:grid-cols-2">
                {details.map((detail) => (
                    <div
                        key={detail.label}
                        className="cardbox hover:border-malachite transi-base flex flex-col gap-4 p-4 md:p-6"
                    >
                        <div className="flex items-center gap-2">
                            <LinkIcon
                                size={18}
                                className="text-malachite shrink-0"
                            />
                            <p className="text-body font-bold uppercase">
                                {detail.label}
                            </p>
                        </div>

                        <span className="text-typocolor-secondary text-small px-6 font-semibold">
                            {detail.value}
                        </span>
                    </div>
                ))}
            </div>
            <p className="text-typocolor-muted text-center">
                MCA Approved | MSME Certified | GST Registered
            </p>
        </SectionContainer>
    );
}
