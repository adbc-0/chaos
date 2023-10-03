import { Link } from "react-router-dom";

import HomeSvg from "../assets/icons/home.svg";
import RecipesSvg from "../assets/icons/cooking.svg";
import ShoppingSvg from "../assets/icons/shopping_cart.svg";
import SettingsSvg from "../assets/icons/settings.svg";
import { UrlPath } from "../global/constants";

const createLinkRoute = (path: string) => "/" + path;

export function Sidebar() {
    return (
        <nav className="py-2 px-4">
            <ul>
                <li>
                    <Link to="/">
                        <img src={HomeSvg} alt="home" />
                    </Link>
                </li>
                <li>
                    <Link to={createLinkRoute(UrlPath.RECIPES)}>
                        <img src={RecipesSvg} alt="recipes" />
                    </Link>
                </li>
                <li>
                    <Link to={createLinkRoute(UrlPath.SHOPPING)}>
                        <img src={ShoppingSvg} alt="shopping" />
                    </Link>
                </li>
                <li>
                    <Link to={createLinkRoute(UrlPath.SETTINGS)}>
                        <img src={SettingsSvg} alt="settings" />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
