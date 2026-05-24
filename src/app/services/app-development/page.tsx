import PageHero from "@/components/basic-ui/PageHero";
import ServiceDevProcess from "../_components/ServiceDevProcess";
import ServiceWhyUs from "../_components/ServiceWhyUs";
import ServiceLetsConnect from "../_components/ServiceLetsConnect";
import {
    servicesWhyForApp,
    serviceDevProcessApp,
    serviceSolutionsApp,
    serviceSandMApp,
    serviceIntroApp,
} from "@/content/services-data";
import ServiceWhatSolutions from "../_components/ServiceWhatSolutions";
import ServiceSandM from "../_components/ServiceSandM";
import ServiceIntro from "../_components/ServiceIntro";

export default function page() {
    return (
        <main>
            <PageHero
                eyebrow="Services"
                title="Application Development Services"
                highlight="Services"
                description="Got an app idea ready to bring to life? Our app developers build high-performance, user-friendly mobile applications for iOS, Android, and cross-platform. From concept to deployment, we handle everything — delivering scalable, feature-rich apps that your users will actually enjoy using."
            />
            <ServiceIntro data={serviceIntroApp} />
            <ServiceWhatSolutions data={serviceSolutionsApp} />
            <ServiceDevProcess data={serviceDevProcessApp} />
            <ServiceWhyUs data={servicesWhyForApp} />
            <ServiceSandM data={serviceSandMApp} />
            <ServiceLetsConnect />
        </main>
    );
}
