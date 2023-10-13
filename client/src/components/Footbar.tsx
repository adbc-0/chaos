import { Link } from "react-router-dom";

import { UrlPath } from "../global/constants";
import { createLinkRoute } from "../global/utils";
import { SvgHome } from "../assets/icons/home";
import { SvgCooking } from "../assets/icons/cooking";
import { SvgShoppingCard } from "../assets/icons/shopping_cart";
import { SvgSettings } from "../assets/icons/settings";

export function Footbar() {
    return (
        <footer>
            <ul>
                <li>
                    <Link to="/">
                        <SvgHome />
                    </Link>
                </li>
                <li>
                    <Link to={createLinkRoute(UrlPath.RECIPES)}>
                        <SvgCooking />
                    </Link>
                </li>
                <li>
                    <Link to={createLinkRoute(UrlPath.SHOPPING)}>
                        <SvgShoppingCard />
                    </Link>
                </li>
                <li>
                    <Link to={createLinkRoute(UrlPath.SETTINGS)}>
                        <SvgSettings />
                    </Link>
                </li>
            </ul>
        </footer>
    );
}
