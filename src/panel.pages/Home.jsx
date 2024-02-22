import PageContent from "../component/PageContent";
import CrudBackground from "../panel.components/CrudBackground";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useEffect, useState } from "react";
import { getBusinesses } from "../services/businesses";
import { getProductsWithCategory } from "../services/products";

export default function Home() {
    const [business, setBusiness] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getBusinesses().then((data) => setBusiness(data));
        getProductsWithCategory().then((data) => setProducts(data));
    }, []);

    return (
        <PageContent className="relative w-full">
            <CrudBackground src="/image/food4.jpg" withBlur={false} />
            <div className="relative z-10 gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-2">
                {business?.map((item) => (
                    <div key={item.id} className="relative w-full h-full">
                        <Item
                            to={"/panel/shop/" + item.id}
                            {...item}
                            products={products.filter(
                                (product) => product?.category?.business_id == item.id
                            )}
                        />
                    </div>
                ))}

                {!business && (
                    <>
                        <SkullItem />
                        <SkullItem />
                        <SkullItem />
                        <SkullItem />
                        <SkullItem />
                        <SkullItem />
                    </>
                )}
            </div>
        </PageContent>
    );
}

function Item({ to, products, ...business }) {
    return (
        <Link
            to={to}
            className=" flex flex-col items-center w-full h-full bg-[--c5-bg]  pb-5 rounded-lg font-content shadow-xl overflow-hidden hover:scale-105"
        >
            {/* En caso de tener varios productos ponemos un slider para que se puedan ver */}
            {products?.length >= 2 && (
                <Swiper
                    className="w-full "
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    autoplay={{ delay: 3000 }}
                    speed={3000}
                    loop={true}
                    slidesPerView={1}
                >
                    {products.map((item) => (
                        <SwiperSlide key={item.id} className="relative w-full h-full">
                            <img
                                src={item.photo_url}
                                className=" w-full aspect-video object-cover "
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}
            {/* En caso de que solo tenga 1 producto ponemos sin el slider */}
            {products.length == 1 && (
                <img src={products[0].photo_url} className=" w-full aspect-video object-cover " />
            )}
            {/* En caso de que no tenga productos ponemos una imagen por defecto */}
            {products.length == 0 && (
                <img src="/image/food2.jpg" className=" w-full aspect-video object-cover " />
            )}
            <div className="flex flex-row w-full p-2 items-start  gap-5 ">
                <img src={business.logo_url} className="max-w-10 rounded-full aspect-square " />
                <div className="flex flex-col w-full h-full">
                    <h3 className="font-link text-xl text-[--c1-txt]">{business.name}</h3>
                    <span className="font-content text-xs opacity-60 text-[--c1-txt]">
                        {business.description}
                    </span>
                </div>
            </div>
        </Link>
    );
}
function SkullItem() {
    return (
        <div className="flex flex-col items-center w-full h-full bg-[--c5-bg] p-2 rounded-lg animate-pulse">
            <div className="w-full aspect-video object-cover bg-black/20 rounded-md" />
            <div className="flex flex-row w-full p-2 items-start gap-5 ">
                <div className="w-11 rounded-full aspect-square bg-black/20" />
                <div className="flex flex-col w-full h-full gap-2">
                    <div className="block w-1/2 h-5 rounded-full bg-black/20" />
                    <div className="block w-2/2 h-3 rounded-full bg-black/20" />
                </div>
            </div>
        </div>
    );
}
