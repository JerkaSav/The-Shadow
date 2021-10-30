import { prologeIntro } from "../story/main/main.json";
import { hotelIntro, hotelOutro } from "../story/hotel/hotel.json";

export enum Story {
  Prologe = "prologe",
  HotelIntro = "hotelIntro",
  HotelOutro = "hotelOutro",
}

export const gameLogic = (action: Story): string[] => {
  switch (action) {
    case Story.Prologe:
      return prologeIntro;
    case Story.HotelIntro:
      return hotelIntro;
    case Story.HotelOutro:
      return hotelOutro;
  }
};
