import PageContent from "../component/PageContent";
import Banner from "../landing.components/Banner";
import Form from "../landing.components/Form";

export default function Contact() {
    return (
        <PageContent>
            <Banner title="¿Como Contactarnos?" />
            <section className="px-[--pdd] py-20">
                <div className="container">
                    <Form />
                </div>
            </section>
        </PageContent>
    );
}
