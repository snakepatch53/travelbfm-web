import PageContent from "../component/PageContent";
import Banner from "../landing.components/Banner";
import PartnerItem from "../landing.components/PartnerItem";
import partners from "../mook/partners.json";

export default function Business() {
    return (
        <PageContent>
            <Banner title="Nuestros Socios" src="/image/food5.jpg" />
            <section className="px-[--pdd] py-20">
                <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {partners.map((item) => (
                        <PartnerItem
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            text={item.subtitle}
                            href={item.link}
                            tag="a"
                            classNameWrapper="group"
                            classNameImg="group-hover:scale-100 object-contain"
                            classNameTitle="group-hover:underline opacity-100 text-black/80"
                            classNameText="group-hover:underline text-black/80"
                        />
                    ))}
                </div>
            </section>
        </PageContent>
    );
}
