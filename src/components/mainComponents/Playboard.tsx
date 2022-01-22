import "../../styles/components-style/playboard.scss";
import { PlayboardBtn } from "../playboardBtns/playboardBtn";
import { PlayboardBtns } from "../playboardBtns/PlayboardBtns";
import { location, locations } from "../../functions/gameLogic";
import { typewriter } from "../../functions/typewriter";
import * as React from "react";
import { useEffect, useState } from "react";

export const Playboard: React.FC = () => {
  const [currentLocation, setCurrentLocation] = useState(
    new location(locations[0])
  );
  const [story, setStory] = useState<string | undefined | Promise<string>>(
    "Beginning"
  );
  const [options, setOptions] = useState<string[]>();
  const progress = async () => {
    currentLocation.modifyArray();
    setStory(await currentLocation.next);
  };
  useEffect(() => {
    (async () => {
      if (story?.toString().includes(">")) {
        setStory(story?.toString().replace(">", ""));
        setOptions(currentLocation.options);
      }
      await typewriter(story, 20);
    })();
    if (!story) {
      setCurrentLocation(new location(locations[1]));
    }
  }, [story]);
  useEffect(() => {
    setStory(currentLocation.intro[0]);
  }, [currentLocation]);
  return (
    <div className="playboard">
      <div className="text-container" />
      {options ? (
        <PlayboardBtns
          options={options}
          onClick={(key) => {
            setStory(currentLocation.answer(key));
            setOptions(undefined);
          }}
        />
      ) : (
        <PlayboardBtn onClick={() => progress()} />
      )}
    </div>
  );
};
