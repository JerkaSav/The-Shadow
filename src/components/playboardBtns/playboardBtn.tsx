import * as React from "react";
type Props = {
  onClick: () => void;
};
export const PlayboardBtn: React.FC<Props> = ({ onClick }) => (
  <button className="btn-continue" onClick={onClick}>
    Continue
  </button>
);
