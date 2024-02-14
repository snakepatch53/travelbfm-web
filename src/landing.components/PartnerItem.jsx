import { Link } from "react-router-dom";
import { cls } from "../utils/utils";

export default function PartnerItem({
    classNameWrapper = "",
    img,
    title,
    text,
    classNameImg = "",
    classNameImgWrapper = "",
    classNameTitle = "",
    classNameText = "",
    tag = "link",
    ...props
}) {
    const classNames = cls(
        "group flex flex-col items-center gap-3 text-[--c4-txt]",
        classNameWrapper
    );

    if (tag === "link")
        return (
            <Link className={classNames} {...props}>
                <ItemContent
                    title={title}
                    text={text}
                    img={img}
                    classNameImg={classNameImg}
                    classNameImgWrapper={classNameImgWrapper}
                    classNameTitle={classNameTitle}
                    classNameText={classNameText}
                />
            </Link>
        );

    if (tag === "a")
        return (
            <a target="blank" rel="noreferrer" className={classNames} {...props}>
                <ItemContent
                    title={title}
                    text={text}
                    img={img}
                    classNameImg={classNameImg}
                    classNameImgWrapper={classNameImgWrapper}
                    classNameTitle={classNameTitle}
                    classNameText={classNameText}
                />
            </a>
        );
}

function ItemContent({
    title,
    text,
    img,
    classNameImg,
    classNameImgWrapper,
    classNameTitle,
    classNameText,
}) {
    return (
        <>
            <div
                className={cls(
                    "w-full aspect-video rounded-md overflow-hidden",
                    classNameImgWrapper
                )}
            >
                <img
                    src={img}
                    className={cls(
                        "w-full h-full object-cover group-hover:scale-125 transition-transform duration-200",
                        classNameImg
                    )}
                />
            </div>
            <h3 className={cls("font-title text-center", classNameTitle)}>{title}</h3>
            <p className={cls("font-content text-center text-sm opacity-70", classNameText)}>
                {text}
            </p>
        </>
    );
}
