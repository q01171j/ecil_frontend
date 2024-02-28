export default interface ContentListItemsProps {
    data: {
        title: string;
        links: {
            title: string;
            url: string;
        }[]
    },
    classContainer?: string;
    classTitle?: string;
    classLink?: string;
}