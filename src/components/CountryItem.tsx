import { Color, ICountry } from "../types";
import { Bage } from "./Bage";

interface IProps {
  country: ICountry;
}

export const CountryItem = ({
  country: { flag, name, capital, region, area, population },
}: IProps) => {
  return (
    <li className="list-group-item row d-flex align-items-center justify-content-between">
      <div className="col-2 d-flex align-items-center justify-content-between">
        <img className="col-5 pe-3" src={flag} alt={`${name} flag`} />
        <p className="col-5 mb-0">{name}</p>
      </div>
      <div className="col-3 d-flex justify-content-between">
        <p className="col-5 mb-0">{capital}</p>
        <p className="col-5 mb-0">{region}</p>
      </div>
      <div className="col-4 d-flex justify-content-between">
        <Bage color={Color.Primary} label={"area"} value={area} colsize={4} />
        <Bage
          color={Color.Secondary}
          label={"population"}
          value={population}
          colsize={5}
        />
      </div>
    </li>
  );
};
