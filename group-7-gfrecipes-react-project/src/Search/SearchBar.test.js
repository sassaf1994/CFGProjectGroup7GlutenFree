import React from "react";
import { render, cleanup, waitForElement} from "react-testing-library";
import "jest-dom/extend-expect";
import axiosMock from "axios";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchResults";

afterEach(cleanup);

test('')

// it("test that recipeView renders when data fetched from api", async () => {
//     const data = [
//         {
//         "Calories": "4228kcal",
//         "Carbs which Sugar": "16g",
//         "Fibre": "19g",
//         "Image URL": "https://edamam-product-images.s3.amazonaws.com/web-img/e42/e42f9119813e890af34c259785ae1cfb-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJGMEQCIAfXcneq1CykZcvMBwC4BtJ0FaodbmlV%2BCDyipaccBxMAiBdgSbO5ahc9gE2JrsmZZf4fP%2BjEZvkRXI66%2B%2F9RZ7OOCrSBAh3EAAaDDE4NzAxNzE1MDk4NiIMnyIS7IVGiwLZu78FKq8ER0d%2B%2B9ZrQoXKv%2BaPXl5rWwy4ZVIeC1WHkJQ9UbtehmhAx%2B0BZTMvTbaTI7zr10S1uNUMfFuBIBcFAFOftCcPoAV3lL0GBuK4n5XfBLa4X7jFXl8Pt7ZnISyTSOcIK%2BM77Ru3pnMSc1L06AvElmpMHSLxLUWHMEJcC8ithOpF5io4pJFrkZp0UO1EdSX%2FAdEIjHL6eaw8y2JpgEpCSELoRRRZlX9%2FG65EWZm6LE0DRg%2Fwz5ruMs%2BrB4HxjJHjLCRVy79ZegiJJoMm%2Bb3Yf7KWSRhdg3wHKHnrHmUal6eQkstVX%2FrzSgEkvKVt%2F8tzuRAZxoXNBN71UXcKV0Oa2I6zKAgGJIT%2FtxxvMQdG9A%2FGUw36HeJK1RIDTsZODIpF9CHwVI6x1KPzW0ICU29nEtoXes9QjN%2B%2FbNiNtv0%2Bd9h5QT1TSQsFnO98v681R%2FcDaS0ZNUdlenYuCXoRpfOSPRBZmHjZCsPQVFpClXg2kqDh0Cwzs8g0vvkrL6hHLUZkgIgO%2Bb36oJCmEUJSHrWhYSohwVUvTzbDUE7hohQQck61yY1FcV1Xn%2F7SqhjeKsy%2B71uwqtnWISUPEMODR74xwFRgf7u6F%2F2bzD7iklfmNHkZ8MhJSmZAJlZw2sZi49tttE1s6kei%2BGugeCLM2y24%2Ba8s6jStGIsbMawijrHDhJQ0sM4oEW1RP2nYqIO8%2FX4vsWT5IPfI7AnLSqOfSQ5QAp4fM4LNUnajqYwTc5Wl%2FnuMjzDErtmXBjqqAdb7b62AzQOZyGbwm2aDMnidhqLyi8Pw8uniyZmXT9abC8Q%2FWfRRrs3dKGscg0Wr1USxcboyg%2FC%2BfguuWTYj%2BTzaxFYesJXvcOBQfLbbLt2CU2LagFTlxKc%2FJLO20ho0%2FFl3vLPith89CJBeSt4NlyCeTjPqiNlUShGwE%2FxiVKCyFeyXMPmx9vVsApKtK%2BtTOf32kODzDSLE4NVOB3YpwTs3VCSHGwPYtmOT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220812T142655Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOBGQEDGR%2F20220812%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f15f9f72d5e2c8ba4b0471cb388bdab0719215534c31a746febf2a9fed5c01ca",
//         "Ingredients": [
//         "1/2 cup olive oil",
//         "5 cloves garlic, peeled",
//         "2 large russet potatoes, peeled and cut into chunks",
//         "1 3-4 pound chicken, cut into 8 pieces (or 3 pound chicken legs)",
//         "3/4 cup white wine",
//         "3/4 cup chicken stock",
//         "3 tablespoons chopped parsley",
//         "1 tablespoon dried oregano",
//         "Salt and pepper",
//         "1 cup frozen peas, thawed"
//         ],
//         "Mono Fat": "147g",
//         "Name": "Chicken Vesuvio",
//         "Net Carbs": "0g",
//         "Poly Fat": "47g",
//         "Protein": "230g",
//         "Recipe ID": "b79327d05b8e5b838ad6cfd9576b30b6",
//         "Recipe URL": "http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html",
//         "Salt": "6888mg",
//         "Sat Fat": "62g",
//         "Source": "Serious Eats",
//         "Total Carbs": "175g",
//         "Total Fat": "274g"
//         },
//         {
//         "Calories": "901kcal",
//         "Carbs which Sugar": "0g",
//         "Fibre": "0g",
//         "Image URL": "https://edamam-product-images.s3.amazonaws.com/web-img/01c/01cacb70890274fb7b7cebb975a93231-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLWVhc3QtMSJGMEQCIAfXcneq1CykZcvMBwC4BtJ0FaodbmlV%2BCDyipaccBxMAiBdgSbO5ahc9gE2JrsmZZf4fP%2BjEZvkRXI66%2B%2F9RZ7OOCrSBAh3EAAaDDE4NzAxNzE1MDk4NiIMnyIS7IVGiwLZu78FKq8ER0d%2B%2B9ZrQoXKv%2BaPXl5rWwy4ZVIeC1WHkJQ9UbtehmhAx%2B0BZTMvTbaTI7zr10S1uNUMfFuBIBcFAFOftCcPoAV3lL0GBuK4n5XfBLa4X7jFXl8Pt7ZnISyTSOcIK%2BM77Ru3pnMSc1L06AvElmpMHSLxLUWHMEJcC8ithOpF5io4pJFrkZp0UO1EdSX%2FAdEIjHL6eaw8y2JpgEpCSELoRRRZlX9%2FG65EWZm6LE0DRg%2Fwz5ruMs%2BrB4HxjJHjLCRVy79ZegiJJoMm%2Bb3Yf7KWSRhdg3wHKHnrHmUal6eQkstVX%2FrzSgEkvKVt%2F8tzuRAZxoXNBN71UXcKV0Oa2I6zKAgGJIT%2FtxxvMQdG9A%2FGUw36HeJK1RIDTsZODIpF9CHwVI6x1KPzW0ICU29nEtoXes9QjN%2B%2FbNiNtv0%2Bd9h5QT1TSQsFnO98v681R%2FcDaS0ZNUdlenYuCXoRpfOSPRBZmHjZCsPQVFpClXg2kqDh0Cwzs8g0vvkrL6hHLUZkgIgO%2Bb36oJCmEUJSHrWhYSohwVUvTzbDUE7hohQQck61yY1FcV1Xn%2F7SqhjeKsy%2B71uwqtnWISUPEMODR74xwFRgf7u6F%2F2bzD7iklfmNHkZ8MhJSmZAJlZw2sZi49tttE1s6kei%2BGugeCLM2y24%2Ba8s6jStGIsbMawijrHDhJQ0sM4oEW1RP2nYqIO8%2FX4vsWT5IPfI7AnLSqOfSQ5QAp4fM4LNUnajqYwTc5Wl%2FnuMjzDErtmXBjqqAdb7b62AzQOZyGbwm2aDMnidhqLyi8Pw8uniyZmXT9abC8Q%2FWfRRrs3dKGscg0Wr1USxcboyg%2FC%2BfguuWTYj%2BTzaxFYesJXvcOBQfLbbLt2CU2LagFTlxKc%2FJLO20ho0%2FFl3vLPith89CJBeSt4NlyCeTjPqiNlUShGwE%2FxiVKCyFeyXMPmx9vVsApKtK%2BtTOf32kODzDSLE4NVOB3YpwTs3VCSHGwPYtmOT&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220812T142655Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOBGQEDGR%2F20220812%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=32efc1cf6c49f51a69718944172f729ec67b135045a185aa24a303a6e6acb90e",
//         "Ingredients": [
//         "6 bone-in chicken breast halves, or 6 chicken thighs and wings, skin-on",
//         "1/2 teaspoon coarse salt",
//         "1/2 teaspoon Mrs. Dash seasoning",
//         "1/4 teaspoon freshly ground black pepper"
//         ],
//         "Mono Fat": "19g",
//         "Name": "Baked Chicken",
//         "Net Carbs": "0g",
//         "Poly Fat": "10g",
//         "Protein": "108g",
//         "Recipe ID": "be3ba087e212f13672b553ecfa876333",
//         "Recipe URL": "http://www.marthastewart.com/318981/baked-chicken",
//         "Salt": "1216mg",
//         "Sat Fat": "13g",
//         "Source": "Martha Stewart",
//         "Total Carbs": "0g",
//         "Total Fat": "48g"
//         }]
//     const { getByTestId } = render(<RecipeView data={data}/>)

//     expect(getByTestId("")).toHaveDataContent([data])
// });