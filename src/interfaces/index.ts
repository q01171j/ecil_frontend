export interface Children {
    children: React.ReactNode;
}

export interface ButtonLinkProps extends Children {
    href: string;
    className?: string;
    onClick?: () => void;
}

export interface ButtonThreeProps extends Children {
    text: string;
    onClick?: () => void;
    className?: string;
}

export interface LinkItemTwoProps extends Children {
    link: string;
    className?: string;
    onClick?: () => void;
}

export interface DataContent {
    title: string;
    links: {
        title: string;
        url: string;
    }[];
}

export interface ContentListItemsProps {
    data: DataContent;
    onClick?: () => void;
    classContainer?: string;
    classTitle?: string;
    classLink?: string;
}

export interface LinkItemProps extends Children {
    className?: string;
    href: string;
    onClick?: () => void;
}

export interface DataUI {
    value: string;
    label: string;
}

export interface ISelectOneProps {
    data: DataUI[];
    placeholder: string;
    onChange: (values: any) => void;
    className?: string;
}

export interface ISelectTwoProps extends ISelectOneProps {
    label: string;
}

export interface ContentThreeProps extends Children {
    title: string;
    desciption: string;
    classNameContent?: string;
    classNameH3?: string;
    classNameSpan?: string;
    classNameBorder?: string;
    classNameChildren?: string;
}

export interface InputOneProps {
    children?: React.ReactNode;
    id?: string;
    placeholder: string;
    isAuth?: boolean;
}

export interface InputTwoProps {
    children?: React.ReactNode;
    id?: string;
    placeholder: string;
}

export interface ContentFourProps extends Children {
    h4: string;
    classNameChildren?: string;
    classNameContent?: string;
}
