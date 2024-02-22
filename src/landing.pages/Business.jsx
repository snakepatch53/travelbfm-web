import { useContext } from "react";
import PageContent from "../component/PageContent";
import Banner from "../landing.components/Banner";
import PartnerItem, { SkullItem } from "../landing.components/PartnerItem";
// import partners from "../mook/partners.json";
import { InfoContext } from "../context/info";

export default function Business() {
    const { businesses } = useContext(InfoContext);

    return (
        <PageContent>
            <Banner title="Nuestros Socios" src="/image/food5.jpg" />
            <section className="px-[--pdd] py-20">
                <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {businesses?.map((item) => (
                        <PartnerItem
                            key={item.id}
                            img={item.logo_url}
                            title={item.name}
                            text={item.description}
                            tag="link"
                            to="/login"
                            classNameWrapper="group"
                            classNameImg="group-hover:scale-100 object-contain"
                            classNameTitle="group-hover:underline opacity-100 text-black/80"
                            classNameText="group-hover:underline text-black/80"
                        />
                    ))}

                    {!businesses && (
                        <>
                            <SkullItem />
                            <SkullItem />
                            <SkullItem />
                            <SkullItem />
                            <SkullItem />
                        </>
                    )}
                </div>
            </section>
        </PageContent>
    );
}
