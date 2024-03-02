import { LinkItemOne } from "@components";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ContentListItemsProps } from "@interfaces";

function ContentListOne({ data, classContainer, classTitle, classLink }: ContentListItemsProps) {

    return (
        <div className={twMerge(clsx(
            classContainer
        ))}>
            <h3 className={twMerge(clsx(
                "font-medium text-lg mb-4 cursor-default",
                classTitle
            ))}>{data.title}</h3>

            <nav className={`grid`}>
                {
                    data.links.map((item, index) => (
                        <LinkItemOne
                            key={index}
                            href={item.url}
                            className={clsx(
                                classLink
                            )}
                        >
                            {item.title}
                        </LinkItemOne>
                    ))
                }
            </nav>
        </div>
    )
}

export default ContentListOne