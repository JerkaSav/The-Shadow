import { Header } from "../components/Header";
import { Btn } from "../components/mainComponents/Btn";
import { Playboard } from "../components/mainComponents/Playboard";
import * as React from "react";

export const Main: React.FC = () => (
  <div className="grid main">
    <Header text="The Shadow" />
    <Btn />
    <Playboard />
  </div>
);
