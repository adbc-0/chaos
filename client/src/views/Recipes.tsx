import recipes from "../assets/cooking_recipes.json";

// add selected recipe ingredients to shopping list

export function Component() {
    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <details>
                        <summary>
                            <span className="font-bold">{recipe.title}</span>
                            {Boolean(recipe.url) && (
                                <a
                                    className="text-red-400 ml-2"
                                    href={recipe.url}
                                    target="_blank"
                                >
                                    [LINK]
                                </a>
                            )}
                        </summary>
                        <div>
                            {recipe.ingredients.map((ingredient) => (
                                <div key={ingredient.id}>
                                    <input
                                        type="checkbox"
                                        id={`recipe-${recipe.id}-ingredient-${ingredient.id}`}
                                        name={`recipe-${recipe.id}-ingredient-${ingredient.id}`}
                                    />
                                    <label
                                        htmlFor={`recipe-${recipe.id}-ingredient-${ingredient.id}`}
                                    >
                                        {ingredient.name}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </details>
                </div>
            ))}
        </div>
    );
}

Component.displayName = "RecipesModule";
