import "./Sidebar.css";

import {
    faBagShopping,
    faBox,
    faHome,
    faLayerGroup,
    faStore,
    faUser,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { SessionContext } from "../context/session";

export default function Sidebar() {
    const { session } = useContext(SessionContext);
    return (
        <div className="relative z-10 panel-sidebar-component">
            <img
                src={session.photo_url}
                alt={"Foto del usuario " + session.name}
                className="user_img"
            />
            <span className="text-[var(--color4-txt)]">{session.name}</span>
            <span className="user_name">{session.role}</span>

            <Link className="option" to="./">
                <FontAwesomeIcon icon={faHome} />
                <span>Inicio</span>
            </Link>
            <hr />
            <Link className="option" to="./profile">
                <FontAwesomeIcon icon={faUser} />
                <span>Perfil</span>
            </Link>
            <hr />
            <Link className="option" to="./users">
                <FontAwesomeIcon icon={faUsers} />
                <span>Usuarios</span>
            </Link>
            <hr />
            <Link className="option" to="./business">
                <FontAwesomeIcon icon={faStore} />
                <span>Negocios</span>
            </Link>
            <hr />
            <Link className="option" to="./categories">
                <FontAwesomeIcon icon={faLayerGroup} />
                <span>Categorias</span>
            </Link>
            <hr />
            <Link className="option" to="./products">
                <FontAwesomeIcon icon={faBox} />
                <span>Productos</span>
            </Link>
            <hr />
            <Link className="option" to="./shop">
                <FontAwesomeIcon icon={faBagShopping} />
                <span>Tienda</span>
            </Link>
        </div>
    );
}
