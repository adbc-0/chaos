import { A } from "@solidjs/router";
import type { Component } from "solid-js";

export const Sidebar: Component = () => {
    return (
        <nav>
            <p>Side bar</p>
            <A href="/">Home</A>
            <A href="/calendar">Calendar</A>
            <A href="/notes">Notes</A>
            <A href="/recipes">Recipes</A>
            <A href="/shopping-list">Shopping List</A>
            <A href="/todo-list">Todo</A>
        </nav>
    );
};
