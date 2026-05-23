import PageHero from "@/components/basic-ui/PageHero";
import ServiceDevProcess from "../_components/ServiceDevProcess";
import ServiceWhyUs from "../_components/ServiceWhyUs";
import ServiceLetsConnect from "../_components/ServiceLetsConnect";
import {
    servicesWhyForSeo,
    serviceDevProcessSeo,
    serviceSolutionsSeo,
    serviceSandMSeo,
} from "@/content/services-data";
import ServiceWhatSolutions from "../_components/ServiceWhatSolutions";
import ServiceSandM from "../_components/ServiceSandM";

export default function page() {
    return (
        <main>
            <PageHero
                eyebrow="Services"
                title="SEO & Marketing Services"
                highlight="Services"
                description="Struggling to get found on Google? Our SEO specialists help businesses rank higher, drive quality organic traffic, and grow their online visibility. From technical fixes to content optimisation and link building, we build data-driven strategies that deliver measurable, long-term results."
            />
            <ServiceWhatSolutions data={serviceSolutionsSeo} />
            <ServiceDevProcess data={serviceDevProcessSeo} />
            <ServiceWhyUs data={servicesWhyForSeo} />
            <ServiceSandM data={serviceSandMSeo} />
            <ServiceLetsConnect />
        </main>
    );
}
