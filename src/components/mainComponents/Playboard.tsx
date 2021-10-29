import "../../styles/components-style/playboard.scss";
import { story } from "../../text/story.json";
import PlayboardBtn from "../playboardBtns/playboardBtn";
import { gameLogic } from "../../functions/gameLogic";
import typewriter from "../../functions/typewriter";
import { useEffect, useRef } from "react";
import * as React from "react";

export const Playboard: React.FC = () => {
  // text variable is the holder of the text rendered on the screen
  let text: string | string[];
  // !!Might not be needed!!
  const isIntro = true;

  // gets the textContainer and btn from the DOM
  const textContainer = useRef(null);
  const btn = useRef(null);

  // Location = where the player can go
  const location = ["NaN", "hotel"];
  // What actions exist in that location
  const action = ["intro", "locationIntro", "greeting", "outro"];

  function changeText() {
    console.log("Location:", location[0], "action:", action[0]);
    // Checks if text variable is not empty and if its almost empty
    if (text !== undefined && text.length === 1) {
      // initial check to make the game move to hotel location
      if (location[0] === "NaN") {
        location.splice(0, 1);
      }
      // Makes so the next action is loaded in
      action.splice(0, 1);
      console.log("spliced location and action");
    }
    // Get the text fom gameLogic
    text = gameLogic(location[0], action[0]);
    console.log(text.length, text);

    if (text.length > 1) {
      text.slice(0, 1);
    }
    typewriter(text[0], textContainer.current, 5, btn.current);
  }

  function answer(response: string) {
    typewriter(
      gameLogic("hotel", response),
      textContainer.current,
      5,
      btn.current
    );
  }

  useEffect(() => {
    typewriter(
      gameLogic(location[0], action[0])[0],
      textContainer.current,
      5,
      btn.current
    );
  });

  return (
    <div className="playboard">
      <div className="text-container" ref={textContainer}></div>

      <PlayboardBtn
        onOff={isIntro}
        changeText={changeText}
        btn={btn}
        options={story.hotel.people.hotelManager.options}
        response={answer}
      />
    </div>
  );
};
