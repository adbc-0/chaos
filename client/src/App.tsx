import { createSignal, type Component, onMount, onCleanup } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";

import { Nav } from "./components/Nav/Nav";
import { CalendarPage } from "./pages/calendar/CalendarPage";
import { NotesPage } from "./pages/notes/NotesPage";
import { RecipesPage } from "./pages/recipes/RecipesPage";
import { ShoppingListPage } from "./pages/shopping_list/ShoppingListPage";
import { TodoListPage } from "./pages/todo_list/TodoListPage";
import { HomePage } from "./pages/home/HomePage";
import { Sidebar } from "./components/Sidebar/Sidebar";

// Add lazy loading
const WrappedApp: Component = () => {
    return (
        <Router>
            <App />
        </Router>
    );
};

function isMobile(width: number) {
    return width < 768;
}

// Detect size
// https://stackoverflow.com/questions/74987753/how-can-i-react-to-changes-in-the-window-size-in-solidjs
const App: Component = () => {
    const [width, setWidth] = createSignal(window.innerWidth);
    const mobileLayout = () => isMobile(width());

    const handler = () => {
        setWidth(window.innerWidth);
    };

    onMount(() => {
        window.addEventListener("resize", handler);
    });

    onCleanup(() => {
        window.removeEventListener("resize", handler);
    });

    return (
        <>
            {mobileLayout() ? <Nav /> : <Sidebar />}
            <main>
                <Routes>
                    <Route path="/" component={HomePage} />
                    <Route path="/calendar" component={CalendarPage} />
                    <Route path="/notes" component={NotesPage} />
                    <Route path="/recipes" component={RecipesPage} />
                    <Route path="/shopping-list" component={ShoppingListPage} />
                    <Route path="/todo-list" component={TodoListPage} />
                </Routes>
            </main>
        </>
    );
};

export default WrappedApp;
