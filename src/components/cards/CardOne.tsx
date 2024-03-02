import { ButtonOne } from "@components";
import { Children } from "@interfaces";
import clsx from "clsx";

interface CardOneProps extends Children {
    h3: string;
    span: string;
    href: string;
    textButton: string;
}

function CardOne({ children, h3, span, textButton, href }: CardOneProps) {
    return (
        <article className="rounded-md border p-4 grid gap-4">
            <div className="flex items-start gap-4">
                <div className="p-1 text-2xl rounded bg-sky-100 fill-[#224e61]">{children}</div>
                <div className="grid">
                    <h3 className="font-semibold">{h3}</h3>
                    <span className="text-gray-500 text-sm">{span}</span>
                </div>
            </div>
            <ButtonOne href={href} className={clsx("bg-sky-50 border-sky-50 text-[#224e61] font-medium hover:text-white")}>{textButton}</ButtonOne>
        </article>
    );
}

export default CardOne;
