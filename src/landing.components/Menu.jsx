import Button from "./Button";
import Title from "./Title";

export default function Menu() {
    return (
        <div className="flex flex-col items-center">
            <Title text="Menú" />
            <div className="flex flex-col sm:flex-row gap-2 pt-5">
                <Button text="TODOS LOS PLATOS" tag="button" style="2" />
                <Button text="DESAYUNO" tag="button" style="2" />
                <Button text="ALMUERZO" tag="button" style="2" />
                <Button text="CENA" tag="button" style="2" />
                <Button text="APERITIVOS" tag="button" style="2" />
            </div>
            <div className="flex flex-col sm:grid sm:grid-cols-2 p-5 md:p-10 lg:p-20">
                <Item title="Papas con cuy" />
                <Item title="Papas con cuy" />
                <Item title="Papas con cuy" />
                <Item title="Papas con cuy" />
                <Item title="Papas con cuy" />
                <Item title="Papas con cuy" />
            </div>
        </div>
    );
}

function Item({ title }) {
    return (
        <div className="flex flex-row items-center gap-5 p-3 font-content">
            <img
                src="/image/food1.jpg"
                alt=""
                className="w-20 rounded-full aspect-square border-solid border-4 border-gray-300"
            />
            <div className="flex flex-col gap-1">
                <h3 className="flex font-title text-sm">{title}</h3>
                <p className="text-sm leading-4 max-h-8 overflow-hidden opacity-70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aspernatur
                    delectus, impedit vitae minima quia. Modi tenetur hic repellendus repudiandae.
                </p>
                <div className="flex items-center gap-[1px]">
                    <span className="font-title text-[0.8rem] opacity-70">Musap</span>
                    <svg viewBox="0 0 24 24" className="w-[12px] fill-blue-500 pt-[1.5px]">
                        <path d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
