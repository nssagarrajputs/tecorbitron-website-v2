import PageHero from "@/components/basic-ui/PageHero";
import ServiceDevProcess from "../_components/ServiceDevProcess";
import ServiceWhyUs from "../_components/ServiceWhyUs";
import ServiceLetsConnect from "../_components/ServiceLetsConnect";
import {
    servicesWhyForEcomm,
    serviceDevProcessEcomm,
    serviceSolutionsEcomm,
    serviceSandMEcomm,
    serviceIntroEcomm,
} from "@/content/services-data";
import ServiceWhatSolutions from "../_components/ServiceWhatSolutions";
import ServiceSandM from "../_components/ServiceSandM";
import ServiceIntro from "../_components/ServiceIntro";

export default function page() {
    return (
        <main>
            <PageHero
                eyebrow="Services"
                title="E-Commerce Development Services"
                highlight="Services"
                description="Ready to sell online the right way? We build powerful, conversion-focused e-commerce stores on Shopify, WooCommerce, Headless, or fully custom platforms. From storefront design to payment integration, we deliver complete end-to-end solutions built to scale with your business."
            />
            <ServiceIntro data={serviceIntroEcomm} />
            <ServiceWhatSolutions data={serviceSolutionsEcomm} />
            <ServiceDevProcess data={serviceDevProcessEcomm} />
            <ServiceWhyUs data={servicesWhyForEcomm} />
            <ServiceSandM data={serviceSandMEcomm} />
            <ServiceLetsConnect />
        </main>
    );
}
