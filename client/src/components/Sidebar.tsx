import { Link } from "react-router-dom";

import RecipesSvg from "../assets/icons/cooking.svg";
import ShoppingSvg from "../assets/icons/shopping_cart.svg";
import SettingsSvg from "../assets/icons/settings.svg";
import { UrlPath } from "../global/constants";
import { SvgHome } from "../assets/icons/home";
import { SvgCooking } from "../assets/icons/cooking";
import { SvgShoppingCard } from "../assets/icons/shopping_cart";
import { SvgSettings } from "../assets/icons/settings";

const createLinkRoute = (path: string) => "/" + path;

export function Sidebar() {
    return (
        <nav className="py-2 px-4">
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
        </nav>
    );
}
