import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="searchBar">
      {/* <div className="container"> */}
        <div className="row">
          <InputGroup className="col">
            <FormControl
              className="w-150"
              placeholder="Search for gluten free recipes"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <Button className="searchButton" id="button-addon2">
              Search
            </Button>
          </InputGroup>
        </div>
      {/* </div> */}
    </div>
  );
}

export default SearchBar;
