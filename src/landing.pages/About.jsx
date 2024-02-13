import PageContent from "../component/PageContent";
import Banner from "../landing.components/Banner";
import History from "../landing.components/History";

export default function About() {
    return (
        <PageContent>
            <Banner title="Acerca de Nosotros" />
            <section>
                <History />
            </section>
        </PageContent>
    );
}
