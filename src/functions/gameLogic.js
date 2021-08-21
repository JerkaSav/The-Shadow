import { story } from '../text/story.json';
function gameLogic(location, action) {
  // Gets all the key of the object that are loaded in
  // !!MIGHT NOT BE NEEDED BECAUSE OF SWITCH FUNCTION handleMeeting!!
  // const objKeys = Object.keys(obj);

  return handleMeeting(story[location], action);
}

function handleMeeting(location, action) {
  switch (action) {
    case 'intro':
      console.log('intro');
      return story.intro;
    case 'locationIntro':
      console.log('locationIntro');
      return location.intro;
    case 'greeting':
      console.log('greeting');
      return location.people.hotelManager.greeting;
    case 'one':
      return location.people.hotelManager.answers.one;
    case 'two':
      return location.people.hotelManager.answers.two;
    case 'three':
      return location.people.hotelManager.answers.three;
    case 'outro':
      console.log('outro');
      return location.outro;
    default:
      alert('ERR');
  }
}

export default gameLogic;
