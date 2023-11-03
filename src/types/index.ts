export interface Params {
  mode?: string;
  value: string;
}

interface Currency {
  code: string;
  name: string;
  symbol: string;
}
export interface Country {
  flags: { svg: string; png: string };
  name: string;
  nativeName: string;
  capital: string;
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: Currency[];
  languages: { name: string }[];
  borders?: string[];
  alpha3Code: string;
}
