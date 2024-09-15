import { Children } from "@interfaces";

interface ContentTwoProps extends Children {
    title: string;
    isOneText?: boolean;
    text?: string;
}

function ContentTwo({
    children,
    title,
    isOneText = true,
    text,
}: ContentTwoProps) {
    return (
        <div className="grid gap-3">
            <h1 className="font-semibold text-lg">{title}</h1>
            {isOneText ? (
                <p className="text-gray-600 text-justify">{children}</p>
            ) : (
                <>
                    <p>{text}</p>
                    {children}
                </>
            )}
        </div>
    );
}

export default ContentTwo;
