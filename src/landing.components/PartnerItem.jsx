import { clsx } from "clsx";
import { Link } from "react-router-dom";

export default function Item({
    img,
    to,
    title,
    text,
    classNameWrapper = "",
    classNameImg = "",
    classNameTitle = "",
    classNameText = "",
}) {
    return (
        <Link
            to={to}
            className={clsx(
                "w- flex flex-col items-center gap-3 text-[--c4-txt]",
                classNameWrapper
            )}
        >
            <div className="group/image w-full aspect-video rounded-md overflow-hidden">
                <img
                    src={img}
                    className={clsx(
                        "w-full object-cover group-hover/image:scale-125 transition-transform duration-200",
                        classNameImg
                    )}
                />
            </div>
            <h3 className={clsx("font-title", classNameTitle)}>{title}</h3>
            <p className={clsx("font-content text-center text-sm opacity-70", classNameText)}>
                {text}
            </p>
        </Link>
    );
}
