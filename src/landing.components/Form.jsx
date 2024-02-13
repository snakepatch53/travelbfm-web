import clsx from "clsx";
import Button from "./Button";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Title from "./Title";

export default function Form() {
    return (
        <div className="relative flex flex-col font-content gap-10">
            <img
                src="/image/came1.png"
                className="-rotate-12 absolute -z-10 top-0 left-0 max-w-60 hidden lg:block"
            />
            <div className="flex flex-col items-center ">
                <Title text="Hacer Reservacion" big />
                <p className="text-base sm:px-20 lg:px-60 text-center font-content opacity-80 mt-5">
                    Lorem iP5um dolor amet, consectetur adipi5icing elit, do eiusmod tempor
                    incididunt Ut labore dolore magna aliaua. Ut enim ad minim nostrud exercitation
                    ullarnco nisi.
                </p>
            </div>
            <div
                className="flex flex-col md:flex-row rounded-md w-full max-w-[900px] mx-auto px-4 sm:px-10 md:p-0 md:pt-10 md:pl-10 bg-white"
                style={{
                    boxShadow: "0 4px 20px 2px rgba(0,0,0,0.2)",
                }}
            >
                <div className="flex flex-1 items-center justify-center py-10">
                    <form className="flex flex-col w-full items-center gap-3">
                        <h3 className="font-title2 text-center text-3xl mb-5">
                            Formulario de Reservacion
                        </h3>
                        <Input text="Nombres" />
                        <Input text="Asunto" />
                        <Input text="Mensaje" tag="textarea" />
                        <Button
                            text="Enviar"
                            classNameWrapper="group w-full justify-center bg-[--c1] text-white py-1 rounded-md uppercase mt-5 hover:text-white"
                            classNameIcon="text-base group-hover:translate-x-2 transition-all duration-300"
                            icon={faArrowRight}
                            // className="w-full bg-[--c2-bg] text-center py-1 hover:bg-white hover:text-[--c3-txt2] transition-all "
                        />
                    </form>
                </div>
                <div className="flex flex-1">
                    <img
                        src="/img/deliverywoman.png"
                        className="h-full object-contain object-bottom"
                    />
                </div>
            </div>
        </div>
    );
}

function Input({ tag, text, className = "" }) {
    let classNameWrapper = clsx(
        "flex w-full border-solid border border-gray-400  px-3 py-2 rounded-sm",
        className
    );
    if (tag === "textarea") {
        return <textarea placeholder={text} className={classNameWrapper} />;
    }
    return <input type="text" placeholder={text} className={classNameWrapper} />;
}
