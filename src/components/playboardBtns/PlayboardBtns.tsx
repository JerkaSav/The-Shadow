import * as React from "react";

type Props = {
  options: string[];
  onClick: (key: number) => void;
};
export const PlayboardBtns: React.FC<Props> = ({ options, onClick }) => (
  <div className="btn-options">
    {options.map((item, key) => (
      <button key={key} onClick={() => onClick(key)}>
        {item}
      </button>
    ))}
  </div>
);
