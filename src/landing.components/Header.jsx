import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from "clsx";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    window.onscroll = () => setIsScrolled(window.scrollY > 0);
    return (
        <div
            className={clsx("fixed top-0 right-0 z-50 w-full", {
                "": isScrolled,
                "bg-transparent": !isScrolled,
            })}
        >
            <div className="relative w-full px-[--pdd] py-2">
                {isScrolled && <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />}
                <div className="relative z-10 container flex justify-between items-center">
                    <Link to="/" className="block h-16 aspect-square overflow-hidden">
                        <img
                            src="/img/logo.png"
                            alt="Logo de Travel BFM"
                            className="w-full h-full object-contain"
                        />
                    </Link>
                    <nav
                        className={clsx(
                            "fixed flex flex-col justify-center w-full max-w-96 pb-36 gap-4 top-0 h-dvh bg-white transition-all duration-300",
                            "lg:static lg:flex-row lg:h-auto lg:pb-0 lg:right-0 lg:opacity-100 lg:w-auto lg:max-w-none lg:bg-transparent",
                            {
                                "right-0 opacity-100": isMenuOpen,
                                "-right-full opacity-0": !isMenuOpen,
                            }
                        )}
                    >
                        <Option isScrolled={isScrolled} name="Inicio" to="/" />
                        <Option isScrolled={isScrolled} name="Ver la carta" to="/business" />
                        <Option isScrolled={isScrolled} name="Sobre nosotros" to="/about" />
                        <Option isScrolled={isScrolled} name="Contactos" to="/contact" />
                    </nav>
                    <button
                        className={clsx(
                            "relative z-10 flex justify-center items-center w-8 aspect-square rounded-sm lg:hidden hover:bg-black/15",
                            {
                                "text-white": !isScrolled && !isMenuOpen,
                                "text-black": isScrolled,
                            }
                        )}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <FontAwesomeIcon icon={faBars} className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function Option({ isScrolled, name, to }) {
    const { pathname } = useLocation();
    const isActive = pathname === to;
    return (
        <Link
            to={to}
            className={clsx(
                "font-link uppercase text-base text-nowrap tracking-wide hover:text-[--c1] transition-colors duration-200 text-center w-full py-3",
                "lg:w-auto lg:py-0",
                {
                    "text-black": isScrolled && !isActive,
                    "lg:text-white": !isScrolled && !isActive,
                    "text-[--c1]": isActive,
                }
            )}
        >
            {name}
        </Link>
    );
}
