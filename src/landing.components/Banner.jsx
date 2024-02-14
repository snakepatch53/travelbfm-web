import Title from "./Title";

export default function Banner({ title, src = "/image/food3.jpg" }) {
    return (
        <section className="relative w-full">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70" />
            <img src={src} className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-10 px-[--pdd] py-44">
                <Title text={title} dark big />
            </div>
        </section>
    );
}
