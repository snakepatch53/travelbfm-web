import PageContent from "../component/PageContent";
import Slider from "../landing.components/Slider";
import History from "../landing.components/History";
import Menu from "../landing.components/Menu";
import Reserve from "../landing.components/Reserve";
import Partners from "../landing.components/Partners";
import Form from "../landing.components/Form";

export default function Home() {
    return (
        <PageContent className="min-h-screen">
            <Slider />
            <section>
                <History />
            </section>
            <section>
                <Reserve />
            </section>
            <section className="relative z-10 p-[--pdd]">
                <div className="container">
                    <Menu />
                </div>
            </section>
            <section className="relative bg-[--c1-bg] mt-20">
                <svg
                    viewBox="0 0 1440 320"
                    className="absolute left-0 w-full bottom-full fill-[--c1-bg] translate-y-1"
                >
                    <path d="M0,224L120,229.3C240,235,480,245,720,208C960,171,1200,85,1320,42.7L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z" />
                </svg>
                <div className="px-[--pdd] pb-32 pt-16">
                    <Partners />
                </div>
            </section>
            <section>
                <Form />
            </section>
        </PageContent>
    );
}
