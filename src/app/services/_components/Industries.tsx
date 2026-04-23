import BrandBtn from "@/components/basic-ui/BrandBtn";
import SectionHeader from "@/components/basic-ui/SectionHeader";

function Industries() {
    return (
        <section className="h-breathing-468 v-breathing-20">
            <div className="section-vlex-gap mx-auto max-w-7xl">
                <SectionHeader
                    eyebrow="Industries"
                    heading="Wide Expertise of Industries"
                    highlight="Industries"
                    support="sadghfpashdgkka asldgkjbaksdg asgkljbadfsg sgbaj"
                />

                <div className=""></div>

                <div className="mx-auto">
                    <BrandBtn href="/contact" variant="secondary">
                        Start Your Project
                    </BrandBtn>
                </div>
            </div>
        </section>
    );
}

export default Industries;
