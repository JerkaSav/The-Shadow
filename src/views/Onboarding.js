import Header from '../components/Header';
import OnboardingForm from '../components/Onboarding/OnboardingForm';
import OnboardingStart from '../components/Onboarding/OnboardingStart';
import '../styles/view-style/onboarding.scss';

import { useState } from 'react';

function Onboarding() {
  const [headerText, setHeaderText] = useState('Welcome to The Shadow');
  const [onboardingStarted, setOnboardingStarted] = useState(false);
  function handleClick() {
    setOnboardingStarted(!onboardingStarted);
    setHeaderText('Inventory');
  }

  return (
    <article>
      <section>
        <Header text={headerText} />
      </section>
      {onboardingStarted ? <OnboardingStart /> : <OnboardingForm update={handleClick} />}
    </article>
  );
}

export default Onboarding;
