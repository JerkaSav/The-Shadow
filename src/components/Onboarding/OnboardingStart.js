import inventory from '../../assets/inventory.svg';
import logBook from '../../assets/logbook.svg';
import equipment from '../../assets/equipment.svg';
import arrow from '../../assets/arrow.svg';

import { useState } from 'react';

function OnboardingStart() {
  const [imgShown, setImgShown] = useState(inventory);
  const [textDisplayed, setTextDisplayed] = useState('The trusty backpack that every adventures needs! Click on me to review its contents');

  function ChangeImg() {
    if (imgShown !== equipment) {
      if (imgShown === inventory) {
        setImgShown(logBook);
        setTextDisplayed('So you dont have to remember everything. Click on this when you feel lost');
      }
      if (imgShown === logBook) {
        setImgShown(equipment);
        setTextDisplayed('Time to change those old rags? Click here to review what your hand is holding');
      }
    } else {
      console.log('Onboarding done');
    }
  }
  return (
    <div>
      <div>
        <p>{textDisplayed}</p>
      </div>
      <button>
        <img src={imgShown} alt="inventory" />
      </button>
      <img src={arrow} alt="arrow" className="arrow" onClick={ChangeImg} />
    </div>
  );
}

export default OnboardingStart;
