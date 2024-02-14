import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import slider from "../mook/slider.json";
import Button from "./Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Slider() {
    return (
        <div className="relative w-full h-screen">
            <Swiper
                className="w-full h-full"
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                autoplay={{ delay: 5000 }}
                speed={1000}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
            >
                {slider.map((item) => (
                    <SwiperSlide key={item.id} className="relative w-full h-full">
                        <div className="w-full h-full">
                            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/50 to-transparent" />
                            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50" />
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="px-[--pdd] absolute inset-0 z-50 flex flex-col items-center justify-center">
                                <h2
                                    style={{ textShadow: styles.textShadow }}
                                    className="text-5xl md:text-8xl font-title2 text-center text-balance text-[--c2-bg] leading-9"
                                >
                                    {item.title}
                                </h2>
                                <p
                                    style={{ textShadow: styles.textShadow }}
                                    className="text-white text-xl md:text-2xl text-balance leading-7 font-content text-center w-3/4 tracking-wider md:mt-2"
                                >
                                    {item.subtitle}
                                </p>
                                <Button
                                    text={item.button}
                                    to={item.to}
                                    icon={faArrowRight}
                                    classNameWrapper="mt-16"
                                    classNameIcon="group-hover/button:translate-x-1 transition-translate duration-100"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

const styles = {
    textShadow: "1px 0px 1px #000, -1px 0px 1px #000, 0px 1px 1px #000, 0 -1px 1px #000",
};
