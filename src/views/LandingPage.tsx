import {Button} from "../components/Button";
import {Header} from "../components/Header";
import * as React from "react";

export const LandingPage: React.FC = () => (
    <article className="grid grid-big">
        <Header text="The Shadow" className="landing-header"/>
        <Button text="START"/>
    </article>
);


export default LandingPage;
