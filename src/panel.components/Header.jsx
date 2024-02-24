import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import ShopCart from "./ShopCart";
import { useContext } from "react";
import { SessionContext } from "../context/session";

export default function Header({ info, onClickButtonBars }) {
    const { logout } = useContext(SessionContext);
    return (
        <>
            <div
                className="panel-page-header fixed top-0 left-0 flex items-center w-full h-[50px] bg-[--c6-bg] z-50"
                style={{
                    boxShadow: "0 3px 6px 2px rgba(0, 0, 0, 0.2)",
                }}
            >
                <span
                    className="block w-[200px] max-w-full h-full px-[10px] text-[16px] tracking-[0.7px] text-[--c5-txt] whitespace-nowrap text-ellipsis overflow-hidden leading-[3.1] bg-black/20 border border-r border-black/20 text-center"
                    style={{
                        textShadow: "0 0 1px var(--c6-txt)",
                    }}
                >
                    {info.name}
                </span>
                <button
                    className="flex justify-center items-center w-[50px] h-full bg-transparent cursor-pointer hover:bg-black/10"
                    onClick={onClickButtonBars}
                >
                    <FontAwesomeIcon icon={faBars} className="text-[1.1rem] text-[--c6-txt]" />
                </button>
                <div className="flex ml-auto mr-2 h-full">
                    <button
                        className="block px-4 whitespace-nowrap text-[--c6-txt] text-sm tracking-wide hover:underline hover:bg-transparent"
                        onClick={logout}
                    >
                        Cerrar sesion
                    </button>

                    <ShopCart />
                </div>
            </div>
        </>
    );
}
