import PageContent from "../component/PageContent";
import Banner from "../landing.components/Banner";
import Form from "../landing.components/Form";

export default function Contact({ info }) {
    return (
        <PageContent>
            <Banner title="¿Como Contactarnos?" src="/image/food6.jpg" />
            <section className="px-[--pdd] py-20">
                <div className="container">
                    <Form info={info} />
                </div>
            </section>
        </PageContent>
    );
}
