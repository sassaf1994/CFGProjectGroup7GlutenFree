import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import "./SearchBar.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import RecipeView from "../RecipeView/RecipeView";

// TODO Consider a more appropriate name and actually have a separate SearchBar.
function SearchBar(props) {
  const [recipeData, setRecipeData] = useState(null); // null | RecipeData[]
  const [recipeQuery, setRecipeQuery] = useState("");
  const [recipeDataIsLoading, setRecipeDataIsLoading] = useState(false);
  const searchReference = useRef("");

  // function handleError(err) {
  //   console.log("Error: ", err);
  // }

  //TODO: Handle errors and write condition so if API doesn't recognise query, we return a message
  // to check query and try again.

  function handleEnterPressed(event) {
    if (event.key === "Enter") {
      console.log("Enter pressed");
      setRecipeQuery(searchReference.current.value);
      console.log(`Recipe Query: ${recipeQuery}`);
    }
  }

  useEffect(
    function getRecipeData() {
      if (recipeQuery !== "") {
        let apiUrl = `http://127.0.0.1:5000/recipes/${recipeQuery}`;
        axios.get(apiUrl).then((response) => {
          console.log({ response });
          setRecipeData(response.data);
          setRecipeDataIsLoading(false);
        });
        setRecipeData(null);
      }
    },
    [recipeQuery]
  );

  useEffect(() => {
    console.log(`Recipe Data at useEffect: ${recipeData}`);
  }, [recipeData]);

  // useEffect( function getRecipeData() {
  //   if (recipeQuery !== "") {
  //     let apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipeQuery}&app_id=2b855013&app_key=%2031c3d687bb811cf2472599ed3c033640&health=gluten-free`;
  //   axios.get(apiUrl).then((response) => {
  //     console.log({ response });
  //     setRecipeData(response.data.hits);
  //     setRecipeDataIsLoading(false);
  //   });
  //   setRecipeData(null);
  //   }
  // }, [recipeQuery]);

  // useEffect(() => {
  //   console.log(`Recipe Data at useEffect: ${recipeData}`);
  // }, [recipeData]);

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
              onKeyPress={handleEnterPressed}
              ref={searchReference}
            />
            {/* <Button
              className="searchButton"
              id="button-addon2"
              onClick={handleSearch}
            >
              Search
            </Button> */}
          </InputGroup>
        </div>
      </div>
      {recipeDataIsLoading ? (
        <ThreeDots color="#F8D2CF" height={80} width={80} />
      ) : recipeData === null ? null : (
        <RecipeView data={recipeData} />
      )}
    </>
  );
}

export default SearchBar;
