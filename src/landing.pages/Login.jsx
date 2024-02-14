import Button from "../landing.components/Button";
export default function Login() {
    return (
        <section className="relative pt-20 overflow-hidden">
            <img src="/image/food1.jpg" alt="" className="absolute inset-0 " />
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
            <div className="relative z-10 flex flex-col items-center">
                <form className="flex flex-col gap-5 items-center">
                    <h3>Iniciar sesion</h3>
                    <Input text="Nombre" />
                    <Input text="Contraseña" />
                    <Button text="Reservar" to="/business" />
                </form>
            </div>
        </section>
    );
}

function Input({ text }) {
    return <input placeholder={text} className="border-solid border-b border-gray-300 " />;
}
