import Button from "./Button";

export default function Form() {
    return (
        <div>
            <div className="flex flex-col items-center">
                <h3 className="font-title2 text-center text-7xl text-[--c3-txt2]">
                    Hacer Reservacion
                </h3>
                <img src="/image/title.png" />
            </div>
            <p>
                Lorem iP5um dolor amet, consectetur adipi5icing elit, do eiusmod tempor incididunt
                Ut labore dolore magna aliaua. Ut enim ad minim nostrud exercitation ullarnco nisi.
            </p>
            <div className="flex flex-row">
                <div className="flex flex-1">
                    <form className="flex flex-col items-center gap-5">
                        <h3 className="font-title2 text-center text-3xl ">
                            Formulario de Reservacion
                        </h3>
                        <Input text="holi" />
                        <Input text="nombre" />
                        <Input text="Apellido" />
                        <Button text="Enviar" className="" />
                    </form>
                </div>
                <div className="flex flex-1">
                    <img src="/image/food1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

function Input({ text }) {
    return (
        <input
            type="text"
            placeholder={text}
            className="border-solid border border-gray-400  p-2"
        />
    );
}
