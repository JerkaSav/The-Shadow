import * as React from "react";
import {Link} from "react-router-dom";

type Props = {
    text: string;
};

export const Button: React.FC<Props> = ({text}) => (
    <Link to="/main">
        <button className="btn fp-btn">{text}</button>
    </Link>
);
