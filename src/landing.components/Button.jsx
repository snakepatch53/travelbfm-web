import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { clsx } from "clsx";
import { Link } from "react-router-dom";

export default function Button({
    children,
    text = "",
    icon = false,
    style = 1,
    tag = "link",
    classNameWrapper = "",
    classNameText = "",
    classNameIcon = "",
    ...props
}) {
    const basicClassNames =
        "group/button flex items-center px-3 py-1 gap-1 border-solid  rounded-sm border-[--c2-bg] text-[--c2-bg] cursor-pointer hover:bg-[--c2-bg] hover:text-[--c2-txt] transition-all duration-300";

    let buttonClassNames = "text-xl border-2";
    if (style == 2) buttonClassNames = "text-base border";

    buttonClassNames = clsx(basicClassNames, buttonClassNames, classNameWrapper);

    let childrenDefault = (
        <>
            <div
                className={clsx(
                    "font-link tracking-wide transition-all duration-100",
                    classNameText
                )}
            >
                {text}
            </div>
            {icon && (
                <FontAwesomeIcon
                    icon={icon}
                    className={clsx("transition-all duration-200", classNameIcon)}
                />
            )}
        </>
    );

    if (children) childrenDefault = children;

    if (tag == "button") {
        return (
            <button className={buttonClassNames} {...props}>
                {childrenDefault}
            </button>
        );
    } else if (tag == "a") {
        return (
            <a className={buttonClassNames} {...props}>
                {childrenDefault}
            </a>
        );
    } else {
        return (
            <Link className={buttonClassNames} {...props}>
                {childrenDefault}
            </Link>
        );
    }
}
