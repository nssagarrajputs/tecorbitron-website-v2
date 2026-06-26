import { SectionHeaderCentered } from "@/components/ui/SectionHeaderType";
import { Phone, MessageCircleCode, Send, MapPin } from "lucide-react";

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
        icon: Send,
        title: "Email",
        subtitle: "contact@tecorbitron.com",
        label: "Drop an Email",
        href: "mailto:contact@tecorbitron.com",
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
        <section className="bg-canvas-white dark side-layout-spacing">
            <div className="bg-canvas mx-auto max-w-7xl">
                <div className="edge-dark border-x">
                    <SectionHeaderCentered
                        eyebrow="We're easy to reach"
                        heading="Select the channel that works for you"
                    />
                </div>
                <div className="edge-dark grid grid-cols-1 border-l sm:grid-cols-2 xl:grid-cols-4">
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
                                className="edge-dark flex-vertical items-center gap-6 border-t border-r px-2 py-16 text-center"
                            >
                                <Icon size={30} className="text-malachite" />

                                {/* Text */}
                                <div className="">
                                    <h3 className="card-title mb-2 ">
                                        {title}
                                    </h3>
                                    <p className="card-caption">
                                        {subtitle}
                                    </p>
                                </div>

                                {/* Action */}
                                <a
                                    href={href}
                                    target={external ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className="button-secondary"
                                >
                                    {label}
                                </a>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}
