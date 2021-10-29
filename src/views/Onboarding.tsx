import { Header } from "../components/Header";
import { OnboardingForm } from "../components/Onboarding/OnboardingForm";
import { OnboardingStart } from "../components/Onboarding/OnboardingStart";

import * as React from "react";
import { useState } from "react";

export const Onboarding: React.FC = () => {
  const [headerText, setHeaderText] = useState("Welcome to The Shadow");
  const [onboardingStarted, setOnboardingStarted] = useState(false);
  function handleClick() {
    setOnboardingStarted(!onboardingStarted);
    setHeaderText("Inventory");
  }
  function handleChangeHeader(newHeader: string) {
    setHeaderText(newHeader);
  }

  return (
    <article className="grid">
      <Header text={headerText} />
      {onboardingStarted ? (
        <OnboardingStart update={handleChangeHeader} />
      ) : (
        <OnboardingForm update={handleClick} />
      )}
    </article>
  );
};
