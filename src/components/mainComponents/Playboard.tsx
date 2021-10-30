import "../../styles/components-style/playboard.scss";
import { PlayboardBtn } from "../playboardBtns/playboardBtn";
import { gameLogic, Story } from "../../functions/gameLogic";
import { typewriter } from "../../functions/typewriter";
import * as React from "react";
import { useEffect, useState } from "react";

export const Playboard: React.FC = () => {
  const [story, setStory] = useState(gameLogic(Story.Prologe));
  useEffect(() => {
    (async () => {
      if (!story[0]) {
        setStory(await gameLogic(Story.HotelIntro));
        await typewriter(story[0], 20);
      } else {
        await typewriter(story[0], 20);
      }
    })();
  }, [story]);
  return (
    <div className="playboard">
      <div className="text-container" />
      <PlayboardBtn onClick={() => setStory(story.slice(1))} />
    </div>
  );
};
