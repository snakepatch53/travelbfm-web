import clsx from "clsx";

export default function Title({ text = "", dark = false, big = false }) {
    return (
        <div className="flex flex-col items-center">
            <h3
                className={clsx("font-title2 text-center text-[--c3-txt2]", {
                    "text-[--c1-txt]": !dark,
                    "text-white": dark,
                    "text-7xl": big,
                    "text-5xl": !big,
                })}
            >
                {text}
            </h3>
            <img
                src="/img/title.png"
                className={clsx("", {
                    "invert brightness-0": dark,
                })}
            />
        </div>
    );
}
