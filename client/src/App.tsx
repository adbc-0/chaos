import {
    RouterProvider,
    Link,
    Outlet,
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { Home } from "./views/Home";
import { UrlPath } from "./global/constants";
import { useIsSmallScreen } from "./hooks/useIsSmallScreen";
import { Sidebar } from "./components/Sidebar";
import { Footbar } from "./components/Footbar";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
                path={UrlPath.RECIPES}
                lazy={() => import("./views/Recipes")}
            />
            <Route
                path={UrlPath.SHOPPING}
                lazy={() => import("./views/Shopping")}
            />
            <Route
                path={UrlPath.SETTINGS}
                lazy={() => import("./views/Settings")}
            />
            <Route path="*" element={<NoMatch />} />
        </Route>,
    ),
);

function App() {
    return <RouterProvider router={router} />;
}

function Layout() {
    const isMobileLayout = useIsSmallScreen();

    if (!isMobileLayout) {
        return (
            <div className="flex">
                <Sidebar />
                <Outlet />
            </div>
        );
    }

    return (
        <div>
            <Outlet />
            <Footbar />
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}

export default App;

// ToDo: Style
// ToDo: Add aliases https://dev.to/tilly/aliasing-in-vite-w-typescript-1lfo
