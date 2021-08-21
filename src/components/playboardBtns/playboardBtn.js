import { useState, useEffect } from 'react';

function PlayboardBtn({ onOff, changeText, btn, options, response }) {
  const [isIntro, setIsIntro] = useState(true);
  let count = 0;
  const [outro, setOutro] = useState(false);
  function check() {
    count++;
    if (count >= 6) {
      setIsIntro(false);
    }

    changeText(outro);
  }
  function sendResponse(player_answer) {
    count = 0;
    setOutro(true);
    setIsIntro(true);
    response(player_answer);
  }
  useEffect(() => {
    if (!isIntro) {
      setOutro(true);
    }
  }, [isIntro, outro]);

  return (
    <div>
      {isIntro ? (
        <button onClick={check} ref={btn} className='btn-continue'>
          Continue
        </button>
      ) : (
        <div className='btn-options'>
          <button
            onClick={() => {
              sendResponse('one');
            }}
            ref={btn}>
            {options[0]}
          </button>
          <button
            onClick={() => {
              sendResponse('two');
            }}
            ref={btn}>
            {options[1]}
          </button>
          <button
            onClick={() => {
              sendResponse('three');
            }}
            ref={btn}>
            {options[2]}
          </button>
        </div>
      )}
    </div>
  );
}

export default PlayboardBtn;
