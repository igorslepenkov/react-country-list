import { ICountry, ICountryData } from "../../types";

const trasformCountry = ({
  name,
  capital,
  population,
  flags,
  area,
  region,
}: ICountryData): ICountry => {
  const newCountry: ICountry = {
    name: name.common,
    capital,
    population,
    flag: flags.svg,
    area,
    region,
  };

  return newCountry;
};

export const countriesMapper = (countries: ICountryData[]): ICountry[] => {
  return countries.map(trasformCountry);
};
