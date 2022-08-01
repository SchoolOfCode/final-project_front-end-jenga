import React, { useState } from "react";
import "./searchBar.css";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const google = window.google;

export default function SearchBar({ setSearchTerm, searchTerm, navigate }) {
  const [address, setAddress] = useState("");

  const handleChange = (addressInput) => {
    setAddress(addressInput);
    console.log(address);
    setSearchTerm(addressInput);
    console.log("this works", searchTerm);
  };

  const handleSelect = (addressInput) => {
    setSearchTerm(addressInput);
    navigate("/SearchResult");

    geocodeByAddress(addressInput)
      .then((results) => getLatLng(results[0])) //not using this function only Console logging
      .then((latLng) => console.log("Success", latLng))
      .catch((error) => console.error("Error", error));
  };

  const searchOptions = {
    location: new google.maps.LatLng(-34, 151),
    radius: 100,
    types: ["country"],
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={handleChange}
      onSelect={handleSelect}
      searchOptions={searchOptions}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: "SEARCH",
              className: "location-search-input",
            })}
            // onChange={searchChange}
            value={searchTerm}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map((suggestion) => {
              const className = suggestion.active
                ? "suggestion-item--active"
                : "suggestion-item";
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: "none", cursor: "pointer" }
                : { backgroundColor: "none", cursor: "pointer" };
              return (
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
}
