import { story } from "../text/story.json";
interface People {
  hotelManager: {
    greeting: string;
    answers: { one: string; two: string; three: string };
  };
}

interface Location {
  intro: string;
  people: People;
  outro: string;
}

export const gameLogic = (location: any, action: string): string | string[] => {
  switch (action) {
    case "intro":
      console.log("intro");
      return story.intro;
    case "locationIntro":
      console.log("locationIntro");
      return location.intro;
    case "greeting":
      console.log("greeting");
      return location.people.hotelManager.greeting;
    case "one":
      return location.people.hotelManager.answers.one;
    case "two":
      return location.people.hotelManager.answers.two;
    case "three":
      return location.people.hotelManager.answers.three;
    case "outro":
      console.log("outro");
      return location.outro;
    default:
      return "ERROR";
  }
};
