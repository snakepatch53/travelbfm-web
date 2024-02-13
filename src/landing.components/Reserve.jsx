import Button from "./Button";

export default function Reserve() {
    return (
        <div className="relative">
            <img
                src="/image/food4.jpg"
                alt="imagen de vegetales"
                className="absolute w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div className=" relative z-10 flex flex-col items-center py-52 gap-10">
                <div className="flex flex-col items-center">
                    <h3 className="font-title2 text-center text-7xl text-white">
                        !Reservar ahora¡
                    </h3>
                    <img src="/image/title.png" className="opacity-80 invert brightness-0" />
                </div>
                <Button
                    text="Reservar"
                    to="/business"
                    classNameWrapper="border-[white] text-[white] hover:bg-white"
                />
            </div>
        </div>
    );
}
