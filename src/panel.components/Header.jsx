import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header({ info, onClickButtonBars, onLogout }) {
    return (
        <div className="panel-page-header">
            <span>{info.name}</span>
            <button className="toggle_button" onClick={onClickButtonBars}>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <button className="session_button" onClick={onLogout}>
                Cerrar sesion
            </button>
        </div>
    );
}
