import { Children } from "@interfaces";

export default interface LinkItemProps extends Children{
    className?: string;
    href: string;
}