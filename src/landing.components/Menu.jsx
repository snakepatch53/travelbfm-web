import { useContext, useState } from "react";
import Button from "./Button";
import Title from "./Title";
import { InfoContext } from "../context/info";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { cls } from "../utils/utils";

export default function Menu() {
    const { products, categories } = useContext(InfoContext);
    const [categorySelected, setCategorySelected] = useState(null);

    const getFiltreds = () => {
        if (products === null) return null;
        if (categorySelected === null) return products;
        return products?.filter((item) => item.category?.id === categorySelected);
    };

    const selectCategory = (category_id) => () => {
        setCategorySelected(category_id);
    };

    return (
        <div className="flex flex-col items-center">
            <Title text="Menú" />
            <div className="scroll-style flex flex-col sm:flex-row gap-2 pt-5 overflow-x-auto max-w-full pb-2">
                <Button
                    text="TODOS LOS PLATOS"
                    tag="button"
                    style="2"
                    classNameWrapper={cls("text-nowrap uppercase", {
                        "bg-[--c2-bg] text-[--c2-txt2]": categorySelected === null,
                    })}
                    onClick={selectCategory(null)}
                />
                {categories?.slice(0, categories.lenght).map((item) => (
                    <Button
                        key={item.id}
                        text={item.name}
                        tag="button"
                        style="2"
                        classNameWrapper={cls("text-nowrap uppercase", {
                            "bg-[--c2-bg] text-[--c2-txt2]": categorySelected === item.id,
                        })}
                        onClick={selectCategory(item.id)}
                    />
                ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 w-full p-5 md:p-10 lg:p-20">
                {getFiltreds()
                    ?.slice(0, 8)
                    .map((item) => (
                        <Item key={item.id} {...item} />
                    ))}
                {products && (
                    <Button
                        text="Ver más"
                        icon={faArrowRight}
                        style="2"
                        to="/login"
                        classNameWrapper="col-span-1 sm:col-span-2 mx-auto mt-5"
                    />
                )}
                {!products && (
                    <>
                        <SkullItem />
                        <SkullItem />
                        <SkullItem />
                        <SkullItem />
                        <SkullItem />
                        <SkullItem />
                        <SkullItem />
                        <SkullItem />
                    </>
                )}
            </div>
        </div>
    );
}

function Item({ name, description, photo_url, category }) {
    return (
        <div className="flex flex-row items-center gap-5 p-3 font-content ">
            <img
                src={photo_url}
                className="w-20 rounded-full aspect-square border-solid border-4 border-gray-300 object-cover"
            />
            <div className="flex flex-col gap-1">
                <h3 className="flex font-title text-sm">{name}</h3>
                <p className="text-sm leading-4 max-h-8 overflow-hidden opacity-70">
                    {description}
                </p>
                <div className="flex items-center gap-[1px]">
                    <span className="font-title text-[0.8rem] opacity-70">
                        {category?.business?.name}
                    </span>
                    <svg viewBox="0 0 24 24" className="w-[12px] fill-blue-500 pt-[1.5px]">
                        <path d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

function SkullItem() {
    return (
        <div className="flex flex-row items-center gap-5 p-3 font-content animate-pulse bg-black/15 m-2 rounded-xl">
            <div className="w-20 min-w-20 rounded-full aspect-square border-solid border-4 border-gray-400 object-cover bg-gray-200" />
            <div className="flex flex-col w-full gap-2">
                <h3 className="w-48 h-3 bg-slate-500 rounded-full " />
                <p className="w-72 h-3 bg-slate-500 rounded-full " />
                <div className="flex flex-row w-full items-center gap-1">
                    <span className="flex w-28 h-3 bg-slate-500 rounded-full " />
                    <div className="w-3 h-3 bg-slate-500 rounded-full" />
                </div>
            </div>
        </div>
    );
}
