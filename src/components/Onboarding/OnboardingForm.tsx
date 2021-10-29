import "../../styles/components-style/onboarding.scss";
import * as React from "react";

type Props = {
  update: () => void;
};
export const OnboardingForm: React.FC<Props> = ({ update }) => {
  return (
    <div className="onboarding-start">
      <section>
        <h4>Who are we playing as today?</h4>
      </section>
      <section>
        <input type="text" placeholder="Username..." />
        <button className="btn" onClick={() => update()}>
          Submit
        </button>
      </section>
    </div>
  );
};
