import React from "react";
import { ThemeProvider } from "styled-components";

import CountryDetails from "./CountryDetails";
import ListCountries from "./ListCountries";
import "./font.css";
import RestCountriesPage from "./style";
import { Country } from "./types";

const lightTheme = {
  element: "hsl(0, 0%, 100%)",
  background: "hsl(0, 0%, 98%)",
  text: "hsl(200, 15%, 8%)",
  input: "hsl(0, 0%, 52%)",
};

const darkTheme = {
  element: "hsl(209, 23%, 22%)",
  background: "hsl(207, 26%, 17%)",
  text: "hsl(0, 0%, 100%)",
  input: "hsl(0, 0%, 100%)",
};

const App = () => {
  const [theme, setTheme] = React.useState(lightTheme);
  const [selectedCountry, setSelectedCountry] = React.useState<Country>();
  return (
    <ThemeProvider theme={theme}>
      <RestCountriesPage>
        <header>
          <h1>Where in the world?</h1>
          <button
            className="theme-switcher"
            onClick={() =>
              setTheme(theme === lightTheme ? darkTheme : lightTheme)
            }
          >
            {theme === lightTheme ? "Dark Mode" : "Light Mode"}
          </button>
        </header>

        {!selectedCountry ? (
          <ListCountries
            onSelect={(country: Country) => setSelectedCountry(country)}
          />
        ) : (
          <CountryDetails
            onBack={() => setSelectedCountry(undefined)}
            country={selectedCountry}
            onClick={(country) => setSelectedCountry(country)}
          />
        )}
      </RestCountriesPage>
    </ThemeProvider>
  );
};

export default App;
