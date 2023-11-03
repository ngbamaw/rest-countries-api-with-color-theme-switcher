import { Country, Params } from "../types";

const fields = [
  "name",
  "nativeName",
  "capital",
  "region",
  "population",
  "flags",
  "subregion",
  "languages",
  "currencies",
  "topLevelDomain",
  "borders",
  "alpha3Code",
];

const getAllCountries = async () => {
  const response = await fetch(
    `https://restcountries.com/v2/all?fields=${fields.join(",")}`
  );
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data as Country[];
};

const getCountriesByName = async (name: string) => {
  const response = await fetch(
    `https://restcountries.com/v2/name/${name}?fields=${fields.join(",")}`
  );
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data as Country[];
};

const getCountriesByRegion = async (region: string) => {
  const response = await fetch(
    `https://restcountries.com/v2/region/${region}?fields=${fields.join(",")}`
  );
  if (response.status === 404) {
    return [];
  }
  const data = await response.json();
  return data as Country[];
};

const getCountries = async (params: Params = { value: "" }) => {
  switch (params.mode) {
    case "name":
      return await getCountriesByName(params.value);
    case "region":
      return await getCountriesByRegion(params.value);
    default:
      return await getAllCountries();
  }
};

export default { getCountries };
