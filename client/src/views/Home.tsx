import { Link } from "react-router-dom";

import { createLinkRoute } from "../global/utils";
import { UrlPath } from "../global/constants";
import { SvgCooking } from "../assets/icons/cooking";
import { SvgShoppingCard } from "../assets/icons/shopping_cart";

// upcoming events
export function Home() {
    return (
        <div>
            <div>
                <Link
                    className="block border border-primary-text"
                    to={createLinkRoute(UrlPath.RECIPES)}
                >
                    <p>Cooking recipes</p>
                    <SvgCooking />
                </Link>
                <Link
                    className="block border border-primary-text"
                    to={createLinkRoute(UrlPath.SHOPPING)}
                >
                    <p>Shopping card</p>
                    <SvgShoppingCard />
                </Link>
            </div>
        </div>
    );
}
