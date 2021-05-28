import inventory from '../../assets/inventory.svg';
import logBook from '../../assets/logbook.svg';
import equipment from '../../assets/equipment.svg';
import arrow from '../../assets/arrow.svg';
import { useHistory } from 'react-router-dom';
import '../../styles/components-style/onboarding.scss';

import { useState } from 'react';

function OnboardingStart({ update }) {
  const history = useHistory();
  const [imgShown, setImgShown] = useState(inventory);
  let [textDisplayed, setTextDisplayed] = useState(`The trusty backpack that every adventures needs! Click on me to review its contents`);

  function ChangeImg() {
    switch (imgShown) {
      case inventory:
        setImgShown(logBook);
        setTextDisplayed('So you dont have to remember everything. Click on this when you feel lost');
        update('Logbook');
        break;
      case logBook:
        setImgShown(equipment);
        setTextDisplayed('Time to change those old rags? Click here to review what your hand is holding');
        update('Equipment');
        break;
      default:
        history.push('/main');
    }
  }
  return (
    <div className="onboarding-start">
      <div className="flex-container">
        <div className="wrapper">
          <button className="btn-dark">
            <div className="text-bubble">
              <div className="arrow-container">
                <div className="triangle"></div>
              </div>
              <p>{textDisplayed}</p>
            </div>
            <img src={imgShown} alt="inventory" />
          </button>
        </div>
      </div>
      <footer className="onboarding-footer">
        <img src={arrow} alt="arrow" className="arrow" onClick={ChangeImg} />
      </footer>
    </div>
  );
}

export default OnboardingStart;
