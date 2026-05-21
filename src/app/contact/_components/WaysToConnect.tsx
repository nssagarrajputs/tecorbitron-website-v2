import Link from "next/link";
import {
    Phone,
    MessageCircleCode,
    Send,
    MapPin,
    ArrowRight,
} from "lucide-react";
import SectionContainer from "@/components/basic-ui/SectionContainer";

const channels = [
    {
        icon: Phone,
        title: "Phone",
        subtitle: "+91 908-480-0496",
        label: "Make a Call",
        href: "tel:+919084800496",
        external: false,
    },
    {
        icon: MessageCircleCode,
        title: "WhatsApp",
        subtitle: "Live chat now",
        label: "Send Message",
        href: "https://wa.me/919084800496",
        external: true,
    },
    {
        icon: Send,
        title: "Email",
        subtitle: "contact@tecorbitron.com",
        label: "Send an Email",
        href: "mailto:contact@tecorbitron.com",
        external: false,
    },
    {
        icon: MapPin,
        title: "Location",
        subtitle: "Ghaziabad, NCR, India",
        label: "Get Directions",
        href: "https://maps.app.goo.gl/M21mRzbWubCJtyHe8",
        external: true,
    },
];

export default function WaysToConnect() {
    return (
        <SectionContainer width="lg">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
                {channels.map(
                    ({
                        icon: Icon,
                        title,
                        subtitle,
                        label,
                        href,
                        external,
                    }) => (
                        <div
                            key={title}
                            className="cardbox transi-base hover:border-malachite group flex flex-col gap-4 p-6"
                        >
                            {/* Icon */}
                            <div className="bg-malachite-dim transi-base group-hover:bg-malachite rounded-2 flex h-10 w-10 items-center justify-center">
                                <Icon
                                    size={20}
                                    className="text-malachite transi-base group-hover:text-white"
                                />
                            </div>

                            {/* Text */}
                            <div className="flex flex-col gap-1">
                                <h3 className="text-typocolor-primary text-body font-bold">
                                    {title}
                                </h3>
                                <p className="text-typocolor-muted text-small font-medium">
                                    {subtitle}
                                </p>
                            </div>

                            {/* Action */}
                            <Link
                                href={href}
                                target={external ? "_blank" : "_self"}
                                rel="noopener noreferrer"
                                className="action-btn"
                            >
                                {label}
                            </Link>
                        </div>
                    ),
                )}
            </div>
        </SectionContainer>
    );
}
