export type LinkType = {
    href: string;
    label: string;
    icon: JSX.Element;
    target: boolean;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    links: LinkType[];
    activeLink: number;
    setActiveLink: (index: number) => void;
}
