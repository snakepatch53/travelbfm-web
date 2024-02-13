import { Link } from "react-router-dom";
import social from "../mook/social.json";

export default function Footer() {
    return (
        <div className="relative overflow-hidden font-content text-sm text-[--c4-txt]">
            <img
                src="/image/food1.jpg"
                alt="imagen de vegetales"
                className="absolute w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            <div className="relative z-10 container px-[--pdd]">
                <div className="flex flex-col items-center py-10 gap-5">
                    <Link to="/home">
                        <img src="/img/logo.png" alt="" className="max-w-20" />
                    </Link>
                    <span className="text-center">
                        20, floor, Queenslad Victoria Building. 60 california street california USA
                    </span>
                    <ItemLink text="hello@dawat.com" />
                    <ItemLink text="+592 987654321" />
                    <div className="flex flex-row gap-5 p-5">
                        {social.map((item) => (
                            <Item key={item.id} icon={item.icon} href={item.link} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row py-5 gap-5 items-center border-solid border-t border-gray-400">
                    <div className="flex flex-1 font-link gap-3">
                        <ItemLink text="Contactos" to="#" />
                        <ItemLink text="Privasidad" to="#" />
                        <ItemLink text="Terminos" to="#" />
                    </div>
                    <div className="flex flex-1">
                        <span className="w-full text-end ">
                            © 2024 Todos los derechos reservados.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Item({ icon, href }) {
    return (
        <a href={href} target="blank" rel="noreferrer">
            <div
                dangerouslySetInnerHTML={{ __html: icon }}
                className="w-6 fill-white opacity-70 hover:opacity-100 transition-all duration-300"
            />
        </a>
    );
}

function ItemLink({ text, to }) {
    return (
        <Link to={to} className=" hover:underline hover:text-[--c1] transition-all">
            {text}
        </Link>
    );
}
