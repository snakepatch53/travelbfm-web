import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import clientes from "../mook/clientes.json";
import Title from "./Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

export default function Review({ info }) {
    return (
        <div>
            <div className="flex flex-col items-center ">
                <Title text="Nuestros Clientes" big />
                <p className="text-base sm:px-20 lg:px-60 text-center font-content opacity-80 mt-5">
                    Lee las reseñas de nuestros clientes y descubre por qué eligen nuestra empresa
                    para sus necesidades.
                </p>
            </div>
            <div className="max-w-[900px] mx-auto">
                <Swiper
                    className="w-full h-full py-20"
                    loop={true}
                    spaceBetween={40}
                    slidesPerView={3}
                    grabCursor={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        320: { slidesPerView: 1 },
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                    }}
                >
                    {clientes.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className="group relative w-full aspect-video rounded-lg shadow-xl overflow-hidden bg-[--c2-bg] cursor-pointer"
                            onClick={(e) => {
                                console.log(e);
                            }}
                        >
                            <img
                                src={item.img}
                                className="w-full h-full object-contain object-bottom group-hover:scale-125 transition-transform duration-200"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <ItemReview
                    text={`¡Increíble experiencia con ${info.name}! Su calidad, funcionalidad y atención al cliente son excepcionales. Recomiendo totalmente ${info.name} a todos.`}
                    src="/img/happygirld.png"
                    name="Alexandra"
                />
            </div>
        </div>
    );
}
// img/happygirld.png

function ItemReview({ src, text, name }) {
    return (
        <div className="relative flex flex-col font-content items-center shadow-xl p-3 sm:p-10">
            <img
                src={src}
                className=" absolute -z-10 h-full opacity-50 object-contain object-bottom"
            />
            <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-3xl text-[--c3-txt2]"
            ></FontAwesomeIcon>
            <p
                className="text-sm text-center p-5 opacity-80"
                style={{
                    textShadow: "0 0 10px rgba(0,0,0,0.5)",
                }}
            >
                {text}
            </p>
            <h3 className="font-title text-xl text-[--c3-txt2] ">{name}</h3>
        </div>
    );
}
