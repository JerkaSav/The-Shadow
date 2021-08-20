import '../../styles/components-style/playboard.scss';
import { story } from '../../text/story.json';
import PlayboardBtn from '../playboardBtns/playboardBtn';
import gameLogic from '../../functions/gameLogic';
import typewriter from '../../functions/typewriter';
import { useEffect, useRef } from 'react';

function Playboard() {
  let text = story.intro;
  let isIntro = true;
  const textContainer = useRef(null);
  const btn = useRef(null);
  let count = 0;
  function changeText(outro) {
    if (outro) {
      console.log('in outro');
      text = gameLogic(story.hotel, count, 'outro');
      if (text[1]) {
        text.splice(0, 1);
      } else {
        alert('end of arrival');
      }
    } else {
      console.log('out of outro');
      if (text[1]) {
        text.splice(0, 1);
      } else {
        isIntro = !isIntro;
        count++;
        text = gameLogic(story.hotel, count, 'greeting');
      }
    }
    if (Array.isArray(text)) {
      typewriter(text[0], textContainer.current, 5, btn.current);
    } else {
      typewriter(text, textContainer.current, 5, btn.current);
      text = [];
    }
  }
  function answer(response) {
    console.log(response);
    text = gameLogic(story.hotel, count, response);
    typewriter(text, textContainer.current, 5, btn.current);
  }

  useEffect(() => {
    typewriter(text[0], textContainer.current, 5, btn.current);
  });

  return (
    <div className='playboard'>
      <div className='text-container' ref={textContainer}></div>

      <PlayboardBtn
        onOff={isIntro}
        changeText={changeText}
        btn={btn}
        options={story.hotel.hotelManager.options}
        response={answer}
      />
    </div>
  );
}

export default Playboard;
