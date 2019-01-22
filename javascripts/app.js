// Rover Object Goes Here
var rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [],
};
// ====================== Movement Functions
function turnLeft(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;

    case 'E':
      rover.direction = 'N';
      break;

    case 'S':
      rover.direction = 'E';
      break;

    case 'W':
      rover.direction = 'S';
      break;

    default:
      console.log('No direction found');
      break;
  }
  console.log('turnLeft was called!');
}

function turnRight(rover) {
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;

    case 'E':
      rover.direction = 'S';
      break;

    case 'S':
      rover.direction = 'W';
      break;

    case 'W':
      rover.direction = 'N';
      break;

    default:
      console.log('No direction found');
      break;
  }
  console.log('turnRight was called!');
}

function moveForward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.y -= 1;
      break;

    case 'E':
      rover.x += 1;
      break;

    case 'S':
      rover.y += 1;
      break;

    case 'W':
      rover.x -= 1;
      break;

    default:
      console.log('No direction given');
      break;
  }
  console.log('moveForward was called');
}

function moveBackward(rover) {
  switch (rover.direction) {
    case 'N':
      rover.y += 1;
      break;

    case 'E':
      rover.x -= 1;
      break;

    case 'S':
      rover.y -= 1;
      break;

    case 'W':
      rover.x += 1;
      break;

    default:
      console.log('No direction given');
      break;
  }
  console.log('moveBackward was called');
}


// ====================== TRACKING

function warning(x, y, dir) {
  if (x < 0 || y < 0 || x > 9 || y > 9) {
    console.log('You\'re out of the grid, come back!');
  }
  else if ((x == 0 && dir == 'W') || (y == 0 && dir == 'N') || (x == 9 && dir == 'E') || (y == 9 && dir == 'S')) {
    console.log('You\'re almost out of the grid, turn away!');
  }

}

// =================== Commands

function command() {
  let string = prompt('Please input the desired set of commands that consists of the first single letters of the following words: (F)orward, (B)ackward, (L)eft and (R)right');
  let i = 0;
  while (i < string.length) {
    if (string[i] === 'l' || string[i] === 'L') {
      turnLeft(rover);
    } else if (string[i] === 'r' || string[i] === 'R') {
      turnRight(rover);
    } else if (string[i] === 'f' || string[i] === 'F') {
      moveForward(rover);
      rover.travelLog.push(`X: ${rover.x}, Y: ${rover.y}`);
      warning(rover.x, rover.y, rover.direction);
    } else if (string[i] === 'b' || string[i] === 'B') {
      moveBackward(rover);
      rover.travelLog.push(`X: ${rover.x}, Y: ${rover.y}`);
      warning(rover.x, rover.y, rover.direction);
    } else {
      console.log(`${string[i]} is not a proper command, moving on`);
    }
    i += 1;
  }
  console.log(rover.travelLog);
}

