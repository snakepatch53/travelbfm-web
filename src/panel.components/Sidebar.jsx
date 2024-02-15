import "./Sidebar.css";

import { faHome, faImage, faUsers, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Sidebar({ session }) {
    return (
        <div className="panel-sidebar-component">
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
            <Link className="option" to="./users">
                <FontAwesomeIcon icon={faUsers} />
                <span>Usuarios</span>
            </Link>
            <hr />
            <Link className="option" to="./slider">
                <FontAwesomeIcon icon={faImage} />
                <span>Slider</span>
            </Link>
            <hr />
            <Link className="option" to="./courses">
                <FontAwesomeIcon icon={faVideo} />
                <span>Cursos</span>
            </Link>
        </div>
    );
}
