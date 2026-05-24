import PageHero from "@/components/basic-ui/PageHero";
import ServiceDevProcess from "../_components/ServiceDevProcess";
import ServiceWhyUs from "../_components/ServiceWhyUs";
import ServiceLetsConnect from "../_components/ServiceLetsConnect";
import {
    servicesWhyForWeb,
    serviceDevProcessWeb,
    serviceSolutionsWeb,
    serviceSandMWeb,
    serviceIntroWeb,
} from "@/content/services-data";
import ServiceWhatSolutions from "../_components/ServiceWhatSolutions";
import ServiceSandM from "../_components/ServiceSandM";
import ServiceIntro from "../_components/ServiceIntro";

export default function page() {
    return (
        <main>
            <PageHero
                width="lg"
                eyebrow="Services"
                title="Web Development Services"
                highlight="Services"
                description="Are you looking to build a powerful online presence? Our web developers specialise in crafting custom, responsive, and SEO-optimised websites. From landing pages to full-scale web applications, we deliver end-to-end development using modern tech stacks — built to perform, designed to convert."
            />
            <ServiceIntro data={serviceIntroWeb} />
            <ServiceWhatSolutions data={serviceSolutionsWeb} />
            <ServiceDevProcess data={serviceDevProcessWeb} />
            <ServiceWhyUs data={servicesWhyForWeb} />
            <ServiceSandM data={serviceSandMWeb} />
            <ServiceLetsConnect />
        </main>
    );
}
