import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cls(...args) {
    return twMerge(clsx(...args));
}

// for get if the business is open

export function getOpenBusiness(business) {
    if (!business) return false;
    // validar el horario de compra del negocio
    const date = new Date();
    const day = date.toLocaleDateString("en-En", { weekday: "long" });
    const hour = date.getHours();
    const minutes = date.getMinutes();

    // saber si el negocio esta abierto
    const open = business[day.toLowerCase() + "_open"];
    const close = business[day.toLowerCase() + "_close"];
    const [openHour, openMinutes] = open.split(":");
    const [closeHour, closeMinutes] = close.split(":");

    if (
        hour < openHour ||
        (hour == openHour && minutes < openMinutes) ||
        hour > closeHour ||
        (hour == closeHour && minutes > closeMinutes)
    ) {
        return false;
    }
    return true;
}
