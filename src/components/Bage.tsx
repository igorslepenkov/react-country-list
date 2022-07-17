import { BageLabel, Color } from "../types";

interface IProps {
  color: Color;
  label: BageLabel;
  value: number;
  colsize: number;
}

export const Bage = ({ color, label, value, colsize }: IProps) => {
  return (
    <p
      className={`badge bg-${color} col-${colsize} mb-0`}
    >{`${label}: ${value}`}</p>
  );
};
