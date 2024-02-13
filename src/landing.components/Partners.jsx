import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";

import partners from "../mook/partners.json";
import Item from "./PartnerItem";
export default function Partners() {
    return (
        <div className="relative flex flex-col gap-20 ">
            <div className="flex flex-col items-center">
                <h3 className="font-title2 text-center text-5xl text-[--c1-txt]">
                    Nuestros Restaurantes
                </h3>
                <img src="/image/title.png" className="invert brightness-0" />
            </div>
            <Swiper
                className="w-full h-full"
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 2000 }}
                speed={1000}
                loop={true}
                spaceBetween={40}
                slidesPerView={5}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 },
                }}
            >
                {partners.map((item) => (
                    <SwiperSlide key={item.id} className="relative w-full h-full">
                        <Item
                            img={item.img}
                            title={item.title}
                            text={item.subtitle}
                            href={item.to}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
