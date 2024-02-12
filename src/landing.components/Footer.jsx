import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="relative overflow-hidden font-content ">
            <img
                src="/image/food1.jpg"
                alt="imagen de vegetales"
                className="absolute w-full  aspect-video"
            />
            <div className="relative z-10 container px-[--pdd]">
                <div className="flex flex-col items-center py-10 gap-5">
                    <Link to="/home">
                        <img src="/img/logo.png" alt="" className="max-w-10" />
                    </Link>
                    Footer
                </div>
                <div className="flex flex-row border-solid border-t border-gray-400">
                    <div className="flex-1 font-link">
                        <Link to="">Contactos</Link>
                    </div>
                    <div className="flex flex-1">
                        <span className="w-full text-end bg-gray-300">
                            © 2024 Todos los derechos reservados.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
