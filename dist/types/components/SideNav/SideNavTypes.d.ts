import { SvgIconComponent } from "@root/types";
export interface SideNavProps {
    /**
     * List of lists of links, each list represents a section of links
     */
    links: Link[][];
}
export declare type Link = {
    /**
     * Optional descriptive mark of the link.
     */
    badge?: string;
    /**
     * Label that names the link.
     */
    label: string;
    /**
     * Optional link left icon.
     */
    icon?: SvgIconComponent;
    /**
     * Callback that each link will execute on an onClick event.
     */
    onClick: () => void;
    /**
     * Each link could have an optional action which consists of an
     * icon that will be displayed when hovering over the link and
     * an onClick callback
     */
    action?: {
        icon: SvgIconComponent;
        onClick: () => void;
    };
};
