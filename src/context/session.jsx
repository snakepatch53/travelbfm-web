import { createContext, useEffect, useState } from "react";

// 1. Crear el contexto
export const SessionContext = createContext();

// 2. Crear el provider
export function SessionProvider({ children }) {
    const [session, setSession] = useState(null);
    const updateSession = (data) => {
        setSession(data);
        window.localStorage.setItem("session", JSON.stringify(data));
    };

    const removeSession = () => {
        setSession([]);
        window.localStorage.removeItem("session");
    };

    useEffect(() => {
        const session_str = window.localStorage.getItem("session");
        if (session_str) setSession(JSON.parse(session_str));
        else setSession([]);
    }, []);

    return (
        <SessionContext.Provider
            value={{
                session,
                updateSession,
                removeSession,
            }}
        >
            {children}
        </SessionContext.Provider>
    );
}
