import Link from "next/link";

export function SectionHeaderLeftRight() {
    return (
        <div className="edge-light section-header-spacing grid grid-cols-1 border-x lg:grid-cols-2">
            <div className="">
                <span className="eyebrow">We Build Bold</span>
                <h2 className="section-heading">
                    Digital Services Designed to Grow Your Business
                </h2>
            </div>
            <div className="flex-vertical justify-end md:items-end">
                {/* childred */}
            </div>
        </div>
    );
}

export function SectionHeaderLeftHanded() {
    return <div>SectionHeaderType</div>;
}

export function SectionHeaderCentered() {
    return <div>SectionHeaderType</div>;
}
