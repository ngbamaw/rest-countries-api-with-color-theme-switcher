import React from "react";
import { useCountries } from "./hooks";
import { Country } from "./types";

import { StyledCountry } from "./style";

const formatter = new Intl.NumberFormat("en-US");
interface Props {
    country?: Country;
    onBack: () => void;
    onClick: (country: Country) => void;
}

const CountryDetails: React.FC<Props> = ({ country, onBack, onClick }) => {
    const { data } = useCountries();
    const borderCountries = data?.filter((c) =>
        country?.borders?.includes(c.alpha3Code)
    );

    return (
        <StyledCountry>
            <button className="btn-back" onClick={onBack}>
                Back
            </button>
            <div className="country">
                <img
                    src={country?.flags.svg}
                    alt={country?.name}
                    className="flag"
                />
                <div className="country-info">
                    <h2>{country?.name}</h2>

                    <div className="fields">
                        <div className="fields-left">
                            <p className="field">
                                <span className="label">Native Name:</span>{" "}
                                {country?.nativeName}
                            </p>
                            <p className="field">
                                <span className="label">Population:</span>{" "}
                                {formatter.format(country?.population || 0)}
                            </p>
                            <p className="field">
                                <span className="label">Region:</span>{" "}
                                {country?.region}
                            </p>
                            <p className="field">
                                <span className="label">Sub Region:</span>{" "}
                                {country?.subregion}
                            </p>
                            <p className="field">
                                <span className="label">Capital:</span>{" "}
                                {country?.capital}
                            </p>
                        </div>
                        <div className="fields-right">
                            <p className="field">
                                <span className="label">Top Level Domain:</span>{" "}
                                {country?.topLevelDomain.join(", ")}
                            </p>
                            <p className="field">
                                <span className="label">Currencies:</span>{" "}
                                {country?.currencies
                                    .map((c) => c.name)
                                    .join(", ")}
                            </p>
                            <p className="field">
                                <span className="label">Languages:</span>{" "}
                                {country?.languages
                                    .map((l) => l.name)
                                    .join(", ")}
                            </p>
                        </div>
                    </div>
                    <p className="border-countries">
                        <span className="label">Border Countries:</span>
                        {borderCountries?.map((c) => (
                            <button
                                key={c.alpha3Code}
                                onClick={() => onClick(c)}
                                className="border-country"
                            >
                                {c.name}
                            </button>
                        ))}
                    </p>
                </div>
            </div>
        </StyledCountry>
    );
};

export default CountryDetails;
