import React, { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./Search.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import RecipeResults from "../RecipeResults/RecipeResults";
import * as backendApiUtils from "../backendApiUtils";

function SearchResults(props) {
  const [recipeData, setRecipeData] = useState(null);
  const [recipeQuery, setRecipeQuery] = useState("");
  const [recipeDataIsLoading, setRecipeDataIsLoading] = useState(false);

  useEffect(
    function getRecipeData() {
      if (recipeQuery !== "") {
        console.log(recipeQuery);
        const apiUrl = `${backendApiUtils.URL}/recipes/${recipeQuery}`;
        axios
          .get(apiUrl)
          .then((response) => {
            console.log("search result response", response);
            const reviewsRequest =
              getReviewsRequestForAllReviewsInSearchResults(response.data);
            return axios
              .put(`${backendApiUtils.URL}/recipe/reviews`, reviewsRequest)
              .then((reviewsResponse) => {
                const recipeDataWithReviews = response.data.map((item) => ({
                  ...item,
                  "Average Review": reviewsResponse.data[item["Recipe ID"]],
                }));
                setRecipeData(recipeDataWithReviews);
                setRecipeDataIsLoading(false);
              });
          })
          .catch(function (error) {
            console.log("Error retrieving data from backend", error);
          });
        setRecipeData(null);
      }
    },
    [recipeQuery]
  );

  useEffect(() => {
    console.log(`Recipe Data at useEffect: ${recipeData}`);
  }, [recipeData]);

  return (
    <>
      <SearchBar onSearch={setRecipeQuery} />
      {recipeDataIsLoading ? (
        <ThreeDots color="#F8D2CF" height={80} width={80} />
      ) : recipeData === null ? null : (
        <RecipeResults data={recipeData} />
      )}
    </>
  );
}

export default SearchResults;

function SearchBar(props) {
  const [currentSearchText, setCurrentSearchText] = useState("");
  return (
    <>
      <div className="searchBar">
        <div className="row">
          <InputGroup className="col">
            <FormControl
              className="w-150"
              placeholder="🔎  Search for gluten free recipes"
              aria-label="Search"
              aria-describedby="basic-addon2"
              autoFocus="on"
              id="search-field"
              onKeyPress={(evt) => {
                if (evt.key === "Enter") {
                  props.onSearch(currentSearchText);
                }
              }}
              onChange={(evt) => {
                setCurrentSearchText(evt.target.value);
              }}
            />
          </InputGroup>
        </div>
      </div>
    </>
  );
}

// Function creates object of {recipeid: recipeName} for PUT request
// Could look at amending so we only send id
function getReviewsRequestForAllReviewsInSearchResults(data) {
  return Object.fromEntries(
    data.map((recipe) => [recipe["Recipe ID"], recipe["Name"]])
  );
}
