import { Phone, MessageCircleCode, Send, MapPin } from "lucide-react";

const channels = [
    {
        icon: Phone,
        title: "Phone",
        subtitle: "+91 908-480-0496",
        label: "Make a Call →",
        href: "tel:+919084800496",
        external: false,
    },
    {
        icon: Send,
        title: "Email",
        subtitle: "contact@tecorbitron.com",
        label: "Drop an Email →",
        href: "mailto:contact@tecorbitron.com",
        external: false,
    },
    {
        icon: MessageCircleCode,
        title: "WhatsApp",
        subtitle: "Live chat now",
        label: "Send Message →",
        href: "https://wa.me/919084800496",
        external: true,
    },

    {
        icon: MapPin,
        title: "Location",
        subtitle: "Ghaziabad, NCR, India",
        label: "Get Directions →",
        href: "https://maps.app.goo.gl/M21mRzbWubCJtyHe8",
        external: true,
    },
];

export default function WaysToConnect() {
    return (
        <section className="bg-canvas-white">
            <div className="bg-canvas mx-auto max-w-7xl">
                <div className="side-breathing edge-dark border-x py-12">
                    <h2 className="text-ink-dark-secondary text-body text-center font-mono">
                        {"We're"} easy to reach — choose the channel that works
                        best for you.
                    </h2>
                </div>
                <div className="edge-dark grid grid-cols-1 border-l sm:grid-cols-2 lg:grid-cols-4">
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
                                className="edge-dark flex-vertical items-center gap-6 border-t border-r p-6 py-16 text-center"
                            >
                                <Icon size={30} className="text-malachite" />

                                {/* Text */}
                                <div className="flex flex-col gap-1">
                                    <h3 className="text-ink-dark-primary text-body font-bold">
                                        {title}
                                    </h3>
                                    <p className="text-ink-dark-secondary text-small font-medium">
                                        {subtitle}
                                    </p>
                                </div>

                                {/* Action */}
                                <a
                                    href={href}
                                    target={external ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className="border-canvas-white text-16 w-fit border px-8 py-4 font-bold underline-offset-4 hover:underline active:underline"
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
