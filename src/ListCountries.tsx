import React from "react";
import { Icon } from "@iconify/react";
import { match } from "ts-pattern";
import classNames from "clsx";
import { CSSTransition } from "react-transition-group";

import { useCountries } from "./hooks";
import { Country, Params } from "./types";

import { StyledListCountries } from "./style";
import "./font.css";

interface CountryProps {
  name: string;
  capital: string;
  region: string;
  population: string;
  flag: string;
  onClick: () => void;
}

const CountryComponent: React.FC<CountryProps> = ({
  name,
  flag,
  population,
  region,
  capital,
  onClick,
}) => {
  return (
    <button className="country" onClick={onClick}>
      <div className="flag" style={{ backgroundImage: `url(${flag})` }} />
      <div className="country-info">
        <h2 className="country-name">{name}</h2>
        <p className="country-population">
          <span className="label">Population:</span> {population}
        </p>
        <p className="country-region">
          <span className="label">Region:</span> {region}
        </p>
        <p className="country-capital">
          <span className="label">Capital:</span> {capital}
        </p>
      </div>
    </button>
  );
};

const formatter = new Intl.NumberFormat("en-US");
const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

interface Props {
  onSelect: (country: Country) => void;
}

const ListCountries: React.FC<Props> = ({ onSelect }) => {
  const [search, setSearch] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [params, setParam] = React.useState<Params | undefined>();
  const [inProp, setInProp] = React.useState(false);

  const { data, status } = useCountries(params);

  React.useEffect(() => {
    if (region) setParam({ value: region, mode: "region" });
  }, [region]);

  return (
    <StyledListCountries>
      <div className="search-box">
        <div className="search-input">
          <Icon icon="material-symbols:search" fontSize={24} className="search-icon" />
          <input
            type="text"
            placeholder="Search for a country"
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                if (search)
                  setParam({
                    value: search,
                    mode: "name",
                  });
                else setParam(undefined);
                setRegion("");
              }
            }}
            value={search}
          />
        </div>
        <button className="filter" onClick={() => setInProp(!inProp)}>
          <p className="filter-value">{region || "Filter by Region"}</p>
          <Icon icon="material-symbols:keyboard-arrow-down" />
          <CSSTransition
            in={inProp}
            timeout={200}
            classNames="my-node"
            unmountOnExit
          >
            <ul className="filter-list">
              {regions.map((r) => (
                <li
                  className={classNames({
                    selected: region === r,
                  })}
                >
                  <button onClick={(e) => setRegion(e.currentTarget.innerText)}>
                    {r}
                  </button>
                </li>
              ))}
            </ul>
          </CSSTransition>
        </button>
      </div>
      <div className="countries">
        {match(status)
          .with("idle", () => <></>)
          .with("loading", () => <p>Loading...</p>)
          .with("error", () => <p>Error...</p>)
          .with("success", () =>
            data?.map((country) => (
              <CountryComponent
                key={country.name}
                name={country.name}
                flag={country.flags.svg}
                population={formatter.format(country.population)}
                region={country.region}
                capital={country.capital}
                onClick={() => onSelect(country)}
              />
            ))
          )
          .exhaustive()}
        {status === "success" && data?.length < 4 && (
          <>
            <div className="empty-slot" />
            <div className="empty-slot" />
            <div className="empty-slot" />
            <div className="empty-slot" />
          </>
        )}
      </div>
    </StyledListCountries>
  );
};

export default ListCountries;
