import type { ReactProps } from "../types";

type SvgProps = ReactProps & {
    title: string;
};

export function Svg({ children, title }: SvgProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="fill-primary-text"
            role="img"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
        >
            <title>{title}</title>
            {children}
        </svg>
    );
}
