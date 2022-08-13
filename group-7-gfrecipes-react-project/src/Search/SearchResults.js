import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./SearchBar.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import RecipeView from "../RecipeView/RecipeView";

function SearchResults(props) {
  const [recipeData, setRecipeData] = useState(null);
  const [recipeQuery, setRecipeQuery] = useState("");
  const [recipeDataIsLoading, setRecipeDataIsLoading] = useState(false);
  const onSearch = (searchQuery) => {
    console.log("Searching with query", searchQuery);
    setRecipeQuery(searchQuery);
  };

  function handleError(err) {
    console.log("Error: ", err);
  }

  //TODO: Handle errors and write condition so if API doesn't recognise query, we return a message
  // to check query and try again.

  useEffect(
    function getRecipeData() {
      if (recipeQuery !== "") {
        console.log(recipeQuery);
        let apiUrl = `http://127.0.0.1:5000/recipes/${recipeQuery}`;
        axios.get(apiUrl).then((response) => {
          console.log({ response });
          setRecipeData(response.data);
          setRecipeDataIsLoading(false);
        }, handleError);
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
        <RecipeView data={recipeData} />
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
                // console.log("SEARCH BAR ON CHANGE EVENT: ", evt);
              }}
            />
          </InputGroup>
        </div>
      </div>
    </>
  );
}
