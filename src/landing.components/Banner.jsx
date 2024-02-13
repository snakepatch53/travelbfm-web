export default function Banner({ title }) {
    return (
        <section className="relative w-full">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/50 to-transparent" />
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70" />
            <img src="/image/food3.jpg" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-10 px-[--pdd] py-44">
                <div className="container flex flex-col justify-center items-center">
                    <h2 className="font-title2 text-center text-5xl text-[--c1-txt]">{title}</h2>
                    <img src="/image/title.png" className="invert brightness-0" />
                </div>
            </div>
        </section>
    );
}
