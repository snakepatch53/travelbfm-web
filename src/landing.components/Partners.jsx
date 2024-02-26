import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import { InfoContext } from "../context/info";
import { useContext } from "react";
import PartnerItem, { SkullItem } from "./PartnerItem";
import Title from "./Title";

export default function Partners() {
    const { businesses } = useContext(InfoContext);

    return (
        <div className="relative flex flex-col gap-20 ">
            <Title text="Nuestros Asociados" dark big />

            <Swiper
                className="w-full h-full"
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 2000 }}
                speed={1000}
                loop={true}
                spaceBetween={40}
                slidesPerView={5}
                breakpoints={{
                    0: { slidesPerView: 1 },
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 },
                }}
            >
                {businesses?.map((item) => (
                    <SwiperSlide key={item.id} className="relative w-full h-full">
                        <PartnerItem
                            img={item.logo_url}
                            title={item.name}
                            text={item.description}
                            href={item.link}
                            tag="link"
                            to="/business"
                            classNameWrapper="group"
                            classNameImg="group-hover:scale-100 object-contain"
                            classNameTitle="group-hover:underline"
                            classNameText="group-hover:underline"
                        />
                    </SwiperSlide>
                ))}
                {!businesses && (
                    <>
                        <SwiperSlide>
                            <SkullItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SkullItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SkullItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SkullItem />
                        </SwiperSlide>
                        <SwiperSlide>
                            <SkullItem />
                        </SwiperSlide>
                    </>
                )}
            </Swiper>
        </div>
    );
}
