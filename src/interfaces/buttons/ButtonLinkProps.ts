import { Children } from "@interfaces";

export default interface ButtonLinkProps extends Children {
    href: string;
    className?: string;
}