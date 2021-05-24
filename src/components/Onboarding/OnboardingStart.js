import inventory from '../../assets/inventory.svg';
import logBook from '../../assets/logbook.svg';
import equipment from '../../assets/equipment.svg';
import arrow from '../../assets/arrow.svg';
import '../../styles/components-style/onboarding.scss';

import { useState } from 'react';

function OnboardingStart({ update }) {
  const [imgShown, setImgShown] = useState(inventory);
  let [textDisplayed, setTextDisplayed] = useState('The trusty backpack that every adventures needs! Click on me to review its contents');

  function ChangeImg() {
    if (imgShown !== equipment) {
      if (imgShown === inventory) {
        setImgShown(logBook);
        setTextDisplayed('So you dont have to remember everything. Click on this when you feel lost');
        update('Logbook');
      }
      if (imgShown === logBook) {
        setImgShown(equipment);
        setTextDisplayed('Time to change those old rags? Click here to review what your hand is holding');
        update('Equipment');
      }
    } else {
      console.log('Onboarding done');
    }
  }
  return (
    <div className="flex-container">
      <div className="text-bubble">
        <p>{textDisplayed}</p>
      </div>
      <button className="btn-dark">
        <img src={imgShown} alt="inventory" />
      </button>
      <img src={arrow} alt="arrow" className="arrow" onClick={ChangeImg} />
    </div>
  );
}

export default OnboardingStart;
