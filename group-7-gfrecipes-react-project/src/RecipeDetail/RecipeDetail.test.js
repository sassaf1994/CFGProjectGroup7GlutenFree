import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { RecipeDetailImpl } from "./RecipeDetail";

afterEach(cleanup);

test("recipeDetail renders expected snapshot", () => {
  const data = {
    "Average Review": 4.7,
    Calories: "2516kcal",
    "Carbs which Sugar": "26g",
    Fibre: "18g",
    "Image URL":
      "https://edamam-product-images.s3.amazonaws.com/web-img/5ed/5ed4915abd206364bb6ab0236811309b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLWVhc3QtMSJHMEUCIQCA9EtsWO5Y3XZz%2BQPl6arwRBPcNVO%2Fj5kZ2FLnGUvR%2FgIga23%2FlgPWgFT%2BGi2sWEoGmwnv8ZMPCOgpAb5r8RpGl%2Boq2wQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDFoOQpmQPCrs8nQLhyqvBE93CINjNuB7z0N96W%2FYynSnvHRO%2BDjTpIsoQDQIBsbtwl%2FE3tS1EBYmMdSY9IG8PxLohA%2BH7WwyKhFQ4h4T7qCUys3MPiRbBj%2B5Z0SPkHO46xK4j0E%2Fnq7Lk60CEHeMottpEwbKlwGRLiqncKpfTVToJMfJ5yxCSDTnvNmd4iSL6VAvf9WTCjL2GjV5R2%2Bg2uEm96s4be4GovrHAIHTOQg3HFCNTsFdABYVhqrmAMjHmXPTN7ojZSUJN0t7Fb8W3f3axdTtgW6NcsdrIzHz%2F%2B1z2DXJ8htT9ojeWp3QldhgX0LJ8YqdcOfgsiSucmdV0Vx9mKwMyDdpCQ2i48gksb%2F0JHaAD9yL3DLh9D%2FGauCdNxXJQbHCgo67i5OUcffbI2ccT5IHRqp77F93h4SU8N2MzTFrRGUSljEHYZrXBUV5wrw%2F45N2VWZIhzxhuXQTs%2FRjlAV3YV1kOLYhBGWpvMmvihPFepDpNSZ1ssBx3ZvLOq9vGQ1eBd8Jx7r9hgiPqqlOacQzwKrxIKTVbb1RU%2BLUpH7nvQn1g8pPpHOEntCWpFPu55eALOi%2B9Uhd8AkP4sf2C4dV4aGhPn6JZd97aUUI9vOpmWXzF9nwY3YAx6RDP0M6JwqqlkQapZcms7%2F%2BWNon2SkW3eYbPUx3dW5tH9OVcGQ56%2FFcLVQ9XcZNz8MmEGMbLgP9nbfnsl5fiTvqamc676QyHjwMFj5L1syX8JpUpuXdbr93HQJyxtqHUWIwl%2BjklwY6qQFQwI35EBVg5kdXKb%2Bx5FquQAi%2Bnmc%2Fof19oegp5Wdsd6MoiAJSrS1LPoXoWXVbQxQI%2BwMp%2FmIro710H5cyiDbj2sFBHOA%2FxRnrCHD%2FUFUS7oxH%2BgtEm3vFaOtWRczV2EXq3Yv%2BqciZkZKKi7G0NCxeL1HmZrAP9MJT%2BV0n4UA9jnp%2FkNMiN%2BMvZd3nQa9Gak%2BM%2Fbzpe8BNIRY1AMqKPL4LEpb9zXDCJqmY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220814T184655Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBAIZCKHV%2F20220814%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1843962e67375c0ef69c987a95bbb4d99a3f74a574b6b7eaa749dad2d9762dad",
    Ingredients: [
      "450.0g white fish fillets, cut into large chunks",
      "2.0 tbsp curry paste , Madras is good for this",
      "olive oil for frying",
      "2 x 400g tins chopped tomato",
      "1 onion , finely sliced",
      "a small handful of coriander leaves",
    ],
    "Mono Fat": "157g",
    Name: "Fish Curry",
    "Net Carbs": "0g",
    "Poly Fat": "25g",
    Protein: "99g",
    "Recipe ID": "46f0285ac49d2b918bc7171142de042b",
    "Recipe URL": "http://www.bbcgoodfood.com/recipes/4328/",
    Salt: "1326mg",
    "Sat Fat": "32g",
    Servings: 4,
    Source: "BBC Good Food",
    "Total Carbs": "45g",
    "Total Fat": "222g",
  };

  expect(render(<RecipeDetailImpl data={data} />).asFragment())
    .toMatchInlineSnapshot(`
<DocumentFragment>
  <div
    class="container"
  >
    <div
      class="row"
    >
      <div
        class="col-8"
      >
        <h1
          class="recipeTitle"
        >
          Fish Curry ⭐️ No ratings yet!
        </h1>
        <a
          class="recipeLink"
          href="http://www.bbcgoodfood.com/recipes/4328/"
          rel="noreferrer"
          target="_blank"
        >
          See the full recipe at 'BBC Good Food' here
        </a>
      </div>
      <div
        class="col-4"
      >
        <div
          class="rating"
        >
          <h2>
            Rate This Recipe
          </h2>
          <div
            class="star-icons"
          >
            <div
              class="cursor-pointer"
            >
              <div
                class="starIcon"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div
              class="cursor-pointer"
            >
              <div
                class="starIcon"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div
              class="cursor-pointer"
            >
              <div
                class="starIcon"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div
              class="cursor-pointer"
            >
              <div
                class="starIcon"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div
              class="cursor-pointer"
            >
              <div
                class="starIcon"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row"
      >
        <div
          class="col-5"
        >
          <img
            alt="Fish Curry"
            class="recipeImage"
            height="400"
            src="https://edamam-product-images.s3.amazonaws.com/web-img/5ed/5ed4915abd206364bb6ab0236811309b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLWVhc3QtMSJHMEUCIQCA9EtsWO5Y3XZz%2BQPl6arwRBPcNVO%2Fj5kZ2FLnGUvR%2FgIga23%2FlgPWgFT%2BGi2sWEoGmwnv8ZMPCOgpAb5r8RpGl%2Boq2wQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDFoOQpmQPCrs8nQLhyqvBE93CINjNuB7z0N96W%2FYynSnvHRO%2BDjTpIsoQDQIBsbtwl%2FE3tS1EBYmMdSY9IG8PxLohA%2BH7WwyKhFQ4h4T7qCUys3MPiRbBj%2B5Z0SPkHO46xK4j0E%2Fnq7Lk60CEHeMottpEwbKlwGRLiqncKpfTVToJMfJ5yxCSDTnvNmd4iSL6VAvf9WTCjL2GjV5R2%2Bg2uEm96s4be4GovrHAIHTOQg3HFCNTsFdABYVhqrmAMjHmXPTN7ojZSUJN0t7Fb8W3f3axdTtgW6NcsdrIzHz%2F%2B1z2DXJ8htT9ojeWp3QldhgX0LJ8YqdcOfgsiSucmdV0Vx9mKwMyDdpCQ2i48gksb%2F0JHaAD9yL3DLh9D%2FGauCdNxXJQbHCgo67i5OUcffbI2ccT5IHRqp77F93h4SU8N2MzTFrRGUSljEHYZrXBUV5wrw%2F45N2VWZIhzxhuXQTs%2FRjlAV3YV1kOLYhBGWpvMmvihPFepDpNSZ1ssBx3ZvLOq9vGQ1eBd8Jx7r9hgiPqqlOacQzwKrxIKTVbb1RU%2BLUpH7nvQn1g8pPpHOEntCWpFPu55eALOi%2B9Uhd8AkP4sf2C4dV4aGhPn6JZd97aUUI9vOpmWXzF9nwY3YAx6RDP0M6JwqqlkQapZcms7%2F%2BWNon2SkW3eYbPUx3dW5tH9OVcGQ56%2FFcLVQ9XcZNz8MmEGMbLgP9nbfnsl5fiTvqamc676QyHjwMFj5L1syX8JpUpuXdbr93HQJyxtqHUWIwl%2BjklwY6qQFQwI35EBVg5kdXKb%2Bx5FquQAi%2Bnmc%2Fof19oegp5Wdsd6MoiAJSrS1LPoXoWXVbQxQI%2BwMp%2FmIro710H5cyiDbj2sFBHOA%2FxRnrCHD%2FUFUS7oxH%2BgtEm3vFaOtWRczV2EXq3Yv%2BqciZkZKKi7G0NCxeL1HmZrAP9MJT%2BV0n4UA9jnp%2FkNMiN%2BMvZd3nQa9Gak%2BM%2Fbzpe8BNIRY1AMqKPL4LEpb9zXDCJqmY&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220814T184655Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBAIZCKHV%2F20220814%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1843962e67375c0ef69c987a95bbb4d99a3f74a574b6b7eaa749dad2d9762dad"
            width="400"
          />
          <div>
            <button
              class="myCookBookButton"
            >
              📖 Add this recipe to Cookbook
            </button>
          </div>
        </div>
        <div
          class="col-7"
        >
          <div
            class="recipeDetails"
          >
            <div
              class="nutritionIngredients"
            >
              <div
                class="row"
              >
                <div
                  class="col"
                >
                  <h2
                    class="niTitle"
                  >
                    Nutrition
                  </h2>
                  <div
                    class="nutritionLine"
                  >
                    <p>
                      Total Fat: 222g
                    </p>
                    <ul>
                      <li>
                        Saturated Fat: 32g
                      </li>
                      <li>
                        Polyunsaturated Fat: 25g
                      </li>
                      <li>
                        Monounsaturated Fat: 157g
                      </li>
                    </ul>
                    <p>
                      Total Carbs: 45g
                    </p>
                    <ul>
                      <li>
                        Of which sugars: 26g
                      </li>
                      <li>
                        Net Carbs: 0g
                      </li>
                    </ul>
                    <p>
                      Salt: 1326mg
                    </p>
                    <p>
                      Protein: 99g
                    </p>
                    <p>
                      Fibre: 18g
                    </p>
                  </div>
                </div>
                <div
                  class="col"
                >
                  <h2
                    class="niTitle"
                  >
                    Ingredients
                  </h2>
                  <div
                    class="ingredientLine"
                  >
                    <p>
                      450.0g white fish fillets, cut into large chunks
                    </p>
                  </div>
                  <div
                    class="ingredientLine"
                  >
                    <p>
                      2.0 tbsp curry paste , Madras is good for this
                    </p>
                  </div>
                  <div
                    class="ingredientLine"
                  >
                    <p>
                      olive oil for frying
                    </p>
                  </div>
                  <div
                    class="ingredientLine"
                  >
                    <p>
                      2 x 400g tins chopped tomato
                    </p>
                  </div>
                  <div
                    class="ingredientLine"
                  >
                    <p>
                      1 onion , finely sliced
                    </p>
                  </div>
                  <div
                    class="ingredientLine"
                  >
                    <p>
                      a small handful of coriander leaves
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</DocumentFragment>
`);
});
