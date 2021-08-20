function gameLogic(obj, count, option) {
  const objKeys = Object.keys(obj);
  console.log(obj[objKeys[count]], count);
  if (Array.isArray(obj[objKeys[count]])) {
    return obj[objKeys[count]];
  } else {
    console.log(handleMeeting(obj[objKeys[count]], option));
    return handleMeeting(obj[objKeys[count]], option);
  }
}

function handleMeeting(person, option) {
  switch (option) {
    case 'greeting':
      return person.greeting;
    case 'one':
      return person.answers.one;
    case 'two':
      return person.answers.two;
    case 'three':
      return person.answers.three;
    case 'outro':
      return person.outro;
    default:
      alert('ERR');
  }
}

export default gameLogic;
