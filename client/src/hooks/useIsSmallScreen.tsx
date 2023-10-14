import { useEffect, useState } from "react";

import { MOBILE_LAYOUT_BREAKPOINT } from "../global/constants";

export function useIsSmallScreen(): boolean {
    const [width, setWidth] = useState<number>(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange);
        return () => {
            window.removeEventListener("resize", handleWindowSizeChange);
        };
    }, []);

    return width <= MOBILE_LAYOUT_BREAKPOINT;
}
