import Button from "./Button";
import Title from "./Title";

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
                <Title text="Reserva Ahora" dark big />
                <Button
                    text="Reservar"
                    to="/business"
                    classNameWrapper="border-[white] text-[white] hover:bg-white"
                />
            </div>
        </div>
    );
}
