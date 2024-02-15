import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { SessionContext } from "../context/session";
import Loading from "../pages/Loading";

export default function SessionOutGuard() {
    const { session } = useContext(SessionContext);
    if (session == null) return <Loading />;
    if (!session?.id) return <Outlet />;
    return <Navigate replace to="/panel" />;
}
