import PageContent from "../component/PageContent";
import Banner from "../landing.components/Banner";
import Item from "../landing.components/PartnerItem";
import partners from "../mook/partners.json";

export default function Business() {
    return (
        <PageContent>
            <Banner title="Nuestros Restaurantes" />
            <section className="px-[--pdd] py-20">
                <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {partners.map((item) => (
                        <Item
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            text={item.subtitle}
                            href={item.to}
                            classNameWrapper="text-black gap-0"
                            classNameTitle="mt-3"
                        />
                    ))}
                </div>
            </section>
        </PageContent>
    );
}
