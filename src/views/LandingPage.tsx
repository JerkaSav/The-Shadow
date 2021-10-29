import { LandingForm } from "../components/LandingForm";
import { Header } from "../components/Header";
import * as React from "react";

export const LandingPage: React.FC = () => {
  return (
    <article className="grid grid-big">
      <Header text="The Shadow" className="landing-header" />
      <LandingForm text="Login" />
    </article>
  );
};

export default LandingPage;
