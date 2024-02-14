import { Link } from "react-router-dom";
import Button from "../landing.components/Button";

/*
{
    "name": "Daisy Lehner",
    "lastname": "Cummerata",
    "photo": "http://localhost/storage/app/public/img/user.png",
    "phone": "234.389.2779",
    "address": "93631 Kuhlman Forge Suite 094\nNorth Anahi, KS 57381",
    "email": "nikolas.towne@example.net"
},
*/
import { cls } from "../utils/utils";

export default function Register({ info }) {
    return (
        <section className="relative flex justify-center items-center  overflow-hidden font-content min-h-dvh">
            <img
                src="/image/food2.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/90" />

            <div className="relative z-10 flex flex-col items-center px-10  w-full max-w-[700px]">
                <div className="flex flex-col justify-center items-center">
                    <div className="w-full max-w-32 aspect-square bg-white rounded-full pb-7 pt-4">
                        <img
                            src={info.logo}
                            alt={"Logo de " + info.name}
                            className="w-full h-full object-contain object-center"
                        />
                    </div>
                    <h3 className="text-[--c1-txt] text-3xl text-center font-title p-5">
                        Iniciar sesion
                    </h3>
                </div>
                <Form />
                <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-row justify-between mt-2">
                        <Item to="/" text="Volver al inicio" />
                        <Item to="/login" text="Iniciar Sesión" />
                    </div>
                </div>
            </div>
        </section>
    );
}

function Form() {
    return (
        <form className="flex flex-col gap-9 items-center w-full">
            <div className="grid sm:grid-cols-2 gap-8 w-full">
                <Input text="Nombre" />
                <Input text="Apellido" />
                <Input text="Foto" />
                <Input text="Celular" />
                <Input text="Direccion" />
                <Input text="Email" />
            </div>
            <Button
                text="Guardar"
                to="/panel"
                classNameWrapper="w-full items-center bg-[--c6-bg] text-[--c6-txt] border-0 hover:bg-white justify-center"
            />
        </form>
    );
}

function Input({ text, className }) {
    return (
        <input
            placeholder={text}
            className={cls(
                "py-2 w-full border-solid border-b border-gray-400 bg-transparent text-[--c1-txt] ",
                className
            )}
        />
    );
}

function Item({ to, text, className }) {
    return (
        <Link
            to={to}
            className={cls("text-[--c1-txt] text-sm hover:underline opacity-70", className)}
        >
            {text}
        </Link>
    );
}
