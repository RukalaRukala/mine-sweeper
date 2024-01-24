let onePerOfHeight = document.documentElement.clientHeight / 100
let countBlock;
localStorage.getItem('countBlock') ? countBlock = +localStorage.getItem('countBlock') : countBlock = 10;
let sizeBlock;

let wrapper = document.createElement('div');
wrapper.id = 'wrapper';
document.body.append(wrapper);

let rebootWrapper = document.createElement('div');
rebootWrapper.id = 'reboot-wrapper';
rebootWrapper.style.height = `${onePerOfHeight * 100}px`;
wrapper.append(rebootWrapper);

let reboot = document.createElement('div');
reboot.id = 'reboot';
reboot.style.height = `${onePerOfHeight * 10}px`;
reboot.innerHTML = 'Нажми,<br/>чтобы продолжить'
rebootWrapper.append(reboot);

message = document.createElement('div');
message.id = 'message';
message.style.height = `${onePerOfHeight * 15}px`;
message.innerHTML = 'Для начала игры<br/>нажми Start<br/>либо на любую ячейку игрового поля';
wrapper.append(message);

let showResults = document.createElement('div');
showResults.id = 'show-results';

let span = document.createElement('span');
span.id = 'span';
span.innerHTML = '';
showResults.append(span);
showResults.style.display = 'none';
wrapper.append(showResults);

let canvas = document.createElement('canvas');
canvas.id = 'canvas';
wrapper.append(canvas);

let counterNames = document.createElement('div');
counterNames.id = 'counter-names';
counterNames.style.height = `${onePerOfHeight * 3.5}px`;
wrapper.append(counterNames);

let time = document.createElement('div');
time.id = 'time';
time.style.height = `${onePerOfHeight * 3.5}px`;
time.innerHTML = 'Time'
counterNames.append(time);

let cli = document.createElement('div');
cli.id = 'cli';
cli.style.height = `${onePerOfHeight * 3.5}px`;
cli.innerHTML = 'Clicks';
counterNames.append(cli);

let f_l_a_g = document.createElement('div');
f_l_a_g.id = 'fla';
f_l_a_g.style.height = `${onePerOfHeight * 3.5}px`;
f_l_a_g.innerHTML = 'Flags';
counterNames.append(f_l_a_g);

let secondCounter = document.createElement('div');
secondCounter.id = 'second-counter';
secondCounter.style.height = `${onePerOfHeight * 4.5}px`;
wrapper.append(secondCounter);

let stepCounter = document.createElement('div');
stepCounter.id = 'step-counter';
stepCounter.style.height = `${onePerOfHeight * 4.5}px`;
wrapper.append(stepCounter);

let flagsCounter = document.createElement('div');
flagsCounter.id = 'flags-counter';
flagsCounter.style.height = `${onePerOfHeight * 4.5}px`;
wrapper.append(flagsCounter);

secondCounter.innerHTML = localStorage.getItem('seconds');
stepCounter.innerHTML = localStorage.getItem('clicks');
flagsCounter.innerHTML = localStorage.getItem('flags');

let sound = document.createElement('div');
sound.id = 'sound';
sound.style.height = `${onePerOfHeight * 4}px`;
sound.innerHTML = 'SOUND OFF';
wrapper.append(sound);

let results = document.createElement('div');
results.id = 'results';
results.innerHTML = 'Results';
results.style.height = `${onePerOfHeight * 4}px`;
wrapper.append(results);

let theme = document.createElement('div');
theme.id = 'theme';
theme.innerHTML = 'LIGHT';
results.style.height = `${onePerOfHeight * 4}px`;
wrapper.append(theme);

let start = document.createElement('div');
start.id = 'start';
start.innerHTML = 'S t a r t /<br/>R e s t a r t';
start.style.height = `${onePerOfHeight * 9}px`;
wrapper.append(start);

let light = document.createElement('div');
light.id = 'light';
light.innerHTML = 'light';
light.style.height = `${onePerOfHeight * 2.5}px`;

if (JSON.parse(localStorage.getItem('level')) === 'light') {
  light.style.backgroundColor = 'rgb(7, 118, 81)';
  light.style.color = 'rgb(189, 239, 221)';
} else {
  light.style.backgroundColor = '';
  light.style.color = '';
}

wrapper.append(light);

let middle = document.createElement('div');
middle.id = 'middle';
middle.innerHTML = 'middle';
middle.style.height = `${onePerOfHeight * 2.5}px`;

if (JSON.parse(localStorage.getItem('level')) === 'middle') {
  middle.style.backgroundColor = 'rgb(7, 118, 81)';
  middle.style.color = 'rgb(189, 239, 221)';
} else {
  middle.style.backgroundColor = '';
  middle.style.color = '';
}

wrapper.append(middle);

let hard = document.createElement('div');
hard.id = 'hard';
hard.innerHTML = 'hard';
hard.style.height = `${onePerOfHeight * 2.5}px`;

if (JSON.parse(localStorage.getItem('level')) === 'hard') {
  hard.style.backgroundColor = 'rgb(7, 118, 81)';
  hard.style.color = 'rgb(189, 239, 221)';
} else {
  hard.style.backgroundColor = '';
  hard.style.color = '';
}

wrapper.append(hard);

let div = document.createElement('div');
div.id = 'div';

let p = document.createElement('p');
p.id = 'p';
p.innerHTML = 'Введи количество мин<br/>от 10 до 99:';
div.append(p);

let input = document.createElement('input');
input.id = 'input';
input.setAttribute('type', 'text');
div.append(input);

let button = document.createElement('button');
button.setAttribute('type', 'submit');
button.id = 'save';
button.innerHTML = 'Save';
div.append(button);
wrapper.append(div);

function formSizeArea() {
  if (document.documentElement.clientHeight < document.documentElement.clientWidth) {
    sizeBlock = document.documentElement.clientHeight / countBlock * 0.8;
  } else {
    sizeBlock = document.documentElement.clientWidth / countBlock;
  }

  let onePerOfWidth = countBlock * sizeBlock / 100;
  
  canvas.width = canvas.height = countBlock * sizeBlock;
  wrapper.style.width = `${countBlock * sizeBlock}px`;
  wrapper.style.height = `${onePerOfHeight * 99.5}px`;
  
  message.style.width = `${onePerOfWidth * 80}px`;
  message.style.top = `${onePerOfHeight * 5}px`;
  message.style.left = `${onePerOfWidth * 10}px`;
  message.style.fontSize = `${onePerOfWidth * 4}px`;

  rebootWrapper.style.width = `${onePerOfWidth * 100}px`;

  reboot.style.width = `${onePerOfWidth * 40}px`;
  reboot.style.top = `${onePerOfHeight * 40}px`;
  reboot.style.left = `${onePerOfWidth * 30}px`;
  reboot.style.fontSize = `${onePerOfWidth * 4}px`;

  showResults.style.width = `${onePerOfWidth * 60}px`;
  showResults.style.top = `${onePerOfHeight * 20}px`;
  showResults.style.left = `${onePerOfWidth * 20}px`;
  showResults.style.fontSize = `${onePerOfWidth * 4}px`;
  
  counterNames.style.width = `${onePerOfWidth * 32}px`;
  counterNames.style.top = `${onePerOfHeight * 81.5}px`;
  counterNames.style.left = `${onePerOfWidth * 3}px`;
  counterNames.style.fontSize = `${onePerOfWidth * 3}px`;

  secondCounter.style.width = `${onePerOfWidth * 10}px`;
  secondCounter.style.top = `${onePerOfHeight * 85}px`;
  secondCounter.style.left = `${onePerOfWidth * 3}px`;
  secondCounter.style.fontSize = `${onePerOfWidth * 5}px`;
  
  stepCounter.style.width = `${onePerOfWidth * 10}px`;
  stepCounter.style.top = `${onePerOfHeight * 85}px`;
  stepCounter.style.left = `${onePerOfWidth * 14}px`;
  stepCounter.style.fontSize = `${onePerOfWidth * 5}px`;

  flagsCounter.style.width = `${onePerOfWidth * 10}px`;
  flagsCounter.style.top = `${onePerOfHeight * 85}px`;
  flagsCounter.style.left = `${onePerOfWidth * 25}px`;
  flagsCounter.style.fontSize = `${onePerOfWidth * 5}px`;

  sound.style.width = `${onePerOfWidth * 32}px`;
  sound.style.top = `${onePerOfHeight * 90}px`;
  sound.style.left = `${onePerOfWidth * 3}px`;
  sound.style.fontSize = `${onePerOfWidth * 4}px`;
  
  start.style.width = `${onePerOfWidth * 32}px`;
  start.style.top = `${onePerOfHeight * 85}px`;
  start.style.left = `${onePerOfWidth * 65}px`;
  start.style.fontSize = `${onePerOfWidth * 4}px`;

  results.style.width = `${onePerOfWidth * 15}px`;
  results.style.top = `${onePerOfHeight * 85}px`;
  results.style.left = `${onePerOfWidth * 48}px`;
  results.style.fontSize = `${onePerOfWidth * 4}px`;

  theme.style.width = `${onePerOfWidth * 15}px`;
  theme.style.top = `${onePerOfHeight * 90}px`;
  theme.style.left = `${onePerOfWidth * 48}px`;
  theme.style.fontSize = `${onePerOfWidth * 4}px`;
  
  light.style.width = `${onePerOfWidth * 10}px`;
  light.style.top = `${onePerOfHeight * 85}px`;
  light.style.left = `${onePerOfWidth * 37}px`;
  light.style.fontSize = `${onePerOfWidth * 2.5}px`;
  
  middle.style.width = `${onePerOfWidth * 10}px`;
  middle.style.top = `${onePerOfHeight * 88.3}px`;
  middle.style.left = `${onePerOfWidth * 37}px`;
  middle.style.fontSize = `${onePerOfWidth * 2.5}px`;
  
  hard.style.width = `${onePerOfWidth * 10}px`;
  hard.style.top = `${onePerOfHeight * 91.6}px`;
  hard.style.left = `${onePerOfWidth * 37}px`;
  hard.style.fontSize = `${onePerOfWidth * 2.5}px`;

  input.style.width = `${onePerOfWidth * 5}px`;
  input.style.marginRight = `${onePerOfWidth * 1}px`;
  input.style.height = `${onePerOfHeight * 3}px`;
  div.style.height = `${onePerOfHeight * 18}px`;
  div.style.width = `${onePerOfWidth * 40}px`;
  div.style.top = `${onePerOfHeight * 55}px`;
  div.style.left = `${onePerOfWidth * 30}px`;

  p.style.fontSize = `${onePerOfHeight * 3}px`;

  button.style.width = `${onePerOfWidth * 12}px`;
  button.style.height = `${onePerOfHeight * 4}px`;
  button.style.fontSize = `${onePerOfHeight * 2.5}px`;
}

formSizeArea();

let a = (window.innerWidth - sizeBlock) / 2;
let countMines;
localStorage.getItem('countMines') ? countMines = +localStorage.getItem('countMines') : countMines = 10
let blocks;
localStorage.getItem('blocks') ? blocks = JSON.parse(localStorage.getItem('blocks')) : blocks =[];
let game = false;
localStorage.getItem('game') ? game = JSON.parse(localStorage.getItem('game')) : game = false;
let soundSwitcher = true;
let fl = 0;
let startTime;
let endTime;
let seconds;
let countHiddenBlocks;
localStorage.getItem('hidden') ? countHiddenBlocks = +localStorage.getItem('hidden') : countHiddenBlocks = countBlock ** 2;
let countHiddenBlocks1;
localStorage.getItem('hidden1') ? countHiddenBlocks1 = +localStorage.getItem('hidden') : countHiddenBlocks1 = countBlock ** 2;
let countClick;
localStorage.getItem('clicks') ? countClick = +localStorage.getItem('clicks') : countClick = 0;
let sec;
localStorage.getItem('seconds') ? sec = +localStorage.getItem('seconds') : sec = 0;
let interval;
let records = [];
localStorage.getItem('top10') ? records = JSON.parse(localStorage.getItem("top10")) : records = [];
let themeValue;
localStorage.getItem('theme') ? themeValue = localStorage.getItem('theme') : themeValue = 'dark';
let ctx = canvas.getContext('2d');

const startTimer = () => {
  sec += 1;
  secondCounter.innerHTML = sec;
};

function soundClick(s_r_c) {
  const audio = new Audio();
  audio.src = s_r_c;
  audio.play();
}

function addEndingToSeconds(sec) {
  if (sec.at(-1) === '1' && sec.at(-2) !== '1') {
    return 'у';
  } else if ((sec.at(-1) === '2' | sec.at(-1) === '3' | sec.at(-1) === '4') && sec.at(-2) !== '1') {
    return 'ы';
  } else {
    return '';
  }
}

function addEndingToStep(step) {
  if (step.at(-1) === '1' && step.at(-2) !== '1'){
    return '';
  } else if ((step.at(-1) === ('2' | '3' | '4')) && step.at(-2) !== '1') {
    return 'a';
  } else {
    return 'ов';
  }
}

function addOneInNearCell(row, col) {
  if (row >= 0 && row < countBlock && col >= 0 && col < countBlock) {
    if (!blocks[row][col].bomb) {
      blocks[row][col].nearBombs += 1;
    }
  }
}

function beginning(ro, co) {
  
  formSizeArea();
  sec = 0;
  secondCounter.innerHTML = 0;
  interval = setInterval(startTimer, 1000);

  if (countClick == 0) {
  countClick = 0;
  } else {
    countClick = 1;
  }
  stepCounter.innerHTML = countClick;
  flagsCounter.innerHTML = 0;

  countHiddenBlocks = countBlock ** 2;
  blocks = [];
  message.style.display = 'none';
  showResults.style.display = 'none';
  wrapper.style.backgroundColor = 'rgb(127, 203, 178)';

  if (blocks.length === 0) {
    let mines = countMines;
    while (mines != 0) {
      for (let i = 0; i < countBlock; i += 1) {
        let row = [];
        for (let j = 0; j < countBlock; j += 1) {
  
          if (i == ro && j == co) {
            row.push({bomb: false, show: false, nearBombs: 0, flag: false});
            continue;
          }
  
          if (Array.isArray(blocks[i])) {
            if (typeof(blocks[i][j])) {
              if (blocks[i][j].bomb) {
                row.push({bomb: true, show: false, flag: false});
                continue;
              }
            }
          }
  
          if (mines != 0 && Math.random() < 0.02) {
            row.push({bomb: true, show: false, flag: false});
            mines -= 1;
          } else {
            row.push({bomb: false, show: false, nearBombs: 0, flag: false})
          }
        }
        if (blocks[i]) {
          blocks[i] = row;
        } else {
          blocks.push(row);
        }
      }
    }
    
    for (let i = 0; i < countBlock; i += 1) {
      for (let j = 0; j < countBlock; j += 1) {
        if (blocks[i][j].bomb) {
          addOneInNearCell(i, j - 1);
          addOneInNearCell(i - 1, j);
          addOneInNearCell(i - 1, j - 1);
          addOneInNearCell(i, j + 1);
          addOneInNearCell(i + 1, j);
          addOneInNearCell(i + 1, j + 1);
          addOneInNearCell(i + 1, j - 1);
          addOneInNearCell(i - 1, j + 1);
        }
      }
    }
  }
game = true;
}

function drawCells() {
  if (themeValue === 'dark') {
    ctx.fillStyle = '#222';
  } else {
    ctx.fillStyle = 'rgb(191, 236, 221)';
  }
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < blocks.length; i += 1) {
    for (let j = 0; j < blocks[i].length; j += 1) {
      if (blocks[i][j].show) {
        if (blocks[i][j].bomb) {
          ctx.beginPath();
          ctx.fillStyle = '#f00';
          ctx.arc(j * sizeBlock + sizeBlock / 2, i * sizeBlock + sizeBlock/2, sizeBlock/3, 0, 2 * Math.PI, true);
          ctx.fill();
          continue;
        }

        if (themeValue === 'dark') {
          ctx.fillStyle = '#666';
        } else {
          ctx.fillStyle = 'rgb(209, 215, 209)';
        }
        ctx.fillRect(j * sizeBlock, i * sizeBlock, sizeBlock, sizeBlock);

        if (blocks[i][j].nearBombs) {

          canvas.style.font = canvas.getContext("2d").font;
          canvas.style.fontSize = sizeBlock /2 + "px";
          canvas.getContext("2d").font = canvas.style.font;
          if (blocks[i][j].nearBombs === 1) {
            ctx.fillStyle = 'blue';
          } else if (blocks[i][j].nearBombs === 2) {
            ctx.fillStyle = 'red';
          } else if (blocks[i][j].nearBombs === 3) {
            ctx.fillStyle = 'green';
          } else if (blocks[i][j].nearBombs === 4) {
            ctx.fillStyle = 'orange';
          } else if (blocks[i][j].nearBombs === 5) {
            ctx.fillStyle = 'yellow';
          } else if (blocks[i][j].nearBombs === 6) {
            ctx.fillStyle = 'rgb(19, 244, 229)';
          } else if (blocks[i][j].nearBombs === 7) {
            ctx.fillStyle = 'rgb(154, 15, 234)';
          } else if (blocks[i][j].nearBombs === 8) {
            ctx.fillStyle = 'white';
          }
          ctx.fillText(blocks[i][j].nearBombs, j * sizeBlock + sizeBlock / 2.5, (i + 1) * sizeBlock - sizeBlock / 2.5)

        }
      } else {

        if (blocks[i][j].flag === true) {
          ctx.beginPath();
          ctx.fillStyle = 'rgb(0, 128, 0)';
          ctx.arc(j * sizeBlock + sizeBlock / 2, i * sizeBlock + sizeBlock/2, sizeBlock/3, 0, 2 * Math.PI, true);
          ctx.fill();
        }

      }
    }
  }

  for (let line = 0; line < countBlock + 1; line += 1) {
    if (themeValue === 'dark') {
      ctx.strokeStyle = '#fff';
    } else {
      ctx.strokeStyle = '#000';
    }
    ctx.beginPath();
    ctx.moveTo(0, line * sizeBlock);
    ctx.lineTo(canvas.width, line * sizeBlock);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(line * sizeBlock, 0);
    ctx.lineTo(line * sizeBlock, canvas.height);
    ctx.stroke();
  }
}
setInterval(drawCells, 25);

canvas.onclick = (event) => {
  message.style.display = 'none';

  showResults.style.display = 'none';
  div.style.display = 'none';

  countClick += 1;
  stepCounter.innerHTML = countClick;

  let i = Math.floor((event.clientY/sizeBlock));
  let j = Math.floor((event.clientX/sizeBlock));

  if (!game) {
    beginning(i, j);
  }

  if (blocks[i][j].bomb) {
    wrapper.style.backgroundColor = 'rgb(252, 4, 4, 0.5)';
    message.style.backgroundColor = 'rgb(252, 4, 4)';
    message.innerHTML = 'Увы, вы проиграли((((<br/>Сыграем ещё?<br/>Чтобы продолжить нажмите на любую ячейку в поле игры либо нажмите "START"';
    message.style.display = 'block';
    localStorage.removeItem('blocks');
    clearInterval(interval);
    if (soundSwitcher) soundClick('assets/audio/поражение.mp3');
    game = false;
  } else {
    if (soundSwitcher) soundClick('assets/audio/клик.mp3');
  }
  countHiddenBlocks1 = countHiddenBlocks;
  showBlock(i, j);  
  if (Math.abs(countHiddenBlocks1 - countHiddenBlocks) > 1) {
    if (soundSwitcher) soundClick('assets/audio/раскрытие.mp3');
  }

  if (countHiddenBlocks == countMines) {
    if (records.length <= 9) {
      records.push([secondCounter.innerHTML, countClick]);
      localStorage.setItem('top10', JSON.stringify(records));
    } else {
      records.shift();
      records.push([secondCounter.innerHTML, countClick]);
      localStorage.setItem('top10', JSON.stringify(records));
    }
    message.innerHTML = `Это было круто!!!<br/>Ты справился за ${secondCounter.innerHTML} секунд${addEndingToSeconds(String(seconds))} и ${countClick} ход${addEndingToStep(String(countClick))}.`;
    message.style.display = 'block';
    message.style.backgroundColor = 'rgb(12, 247, 4)';
    wrapper.style.backgroundColor = 'rgb(12, 247, 4, 0.7)';
    localStorage.removeItem('blocks');
    clearInterval(interval);
    if (soundSwitcher) soundClick('assets/audio/победа.mp3');
    game = false;
  }
  localStorage.setItem('blocks', JSON.stringify(blocks));
};

canvas.oncontextmenu = (event) => {
  message.style.display = 'none';
  if (showResults.style.display === 'block') {
    showResults.style.display = 'none';
  }

  if (div.style.display === 'block') {
    div.style.display = 'none';
  }

  let i = Math.floor((event.clientY/sizeBlock));
  let j = Math.floor((event.clientX/sizeBlock));
  if (blocks[i][j].flag === false) {
    blocks[i][j].flag = true;
    flagsCounter.innerHTML = +flagsCounter.innerHTML + 1;
    if (soundSwitcher) soundClick('assets/audio/флаг.mp3');
  } else {
    blocks[i][j].flag = false;
    flagsCounter.innerHTML = +flagsCounter.innerHTML - 1;
    if (soundSwitcher) soundClick('assets/audio/флаг.mp3');
  }
  localStorage.setItem('blocks', JSON.stringify(blocks));
  return false;
};

function showBlock(row, col) {
  countHiddenBlocks -= 1;
  blocks[row][col].show = true;
  if (blocks[row][col].nearBombs != 0) {
    return;
  }

  openEmpty(row, col - 1);
  openEmpty(row - 1, col);
  openEmpty(row - 1, col - 1);
  openEmpty(row, col + 1);
  openEmpty(row + 1, col);
  openEmpty(row + 1, col + 1);
  openEmpty(row + 1, col - 1);
  openEmpty(row - 1, col + 1);
}

function openEmpty(row, col) {
  if (row >= 0 && row < countBlock && col >= 0 && col < countBlock) {
    if (!blocks[row][col].show) {
      showBlock(row, col);
    }
  }
}

start.onclick = (event) => {
  clearInterval(interval);
  countClick = 0;
  beginning();
  clearInterval(interval);
  game = false;
};

for (let level of [[light, 10], [middle, 15], [hard, 25]]) {
  level[0].addEventListener('click', (event) => {
    for (let lev of [light, middle, hard]) {
      lev.style.backgroundColor = '';
      lev.style.color = '';
    }
    level[0].style.backgroundColor = 'rgb(7, 118, 81)';
    level[0].style.color = 'rgb(189, 239, 221)';
    div.style.display = 'block';
    button.addEventListener('click', () => {
      if (+input.value < 10 || +input.value > 99) {
        p.innerHTML = 'Внимание!!!<br/> от 10 до 99'
      } else {
        clearInterval(interval);
        p.innerHTML = 'Введи количество мин<br/>от 10 до 99:'
        countClick = 0;
        countMines = document.getElementById('input').value;
        localStorage.setItem('countMines', countMines);
        document.getElementById('div').style.display = 'none';
        countBlock = level[1];
        localStorage.setItem('countBlock', countBlock);
        localStorage.setItem('level', JSON.stringify(level[0].innerHTML));
        beginning();
        clearInterval(interval);
        game = false;
      }

    })
  });
}

results.addEventListener('click', (event) => {
  if (showResults.style.display === 'none') {
    span.innerHTML = 'Последние 10 результатов:<br/><br/>'
    for (let result of records) {
      span.innerHTML += `Время: ${result[0]} / xоды: ${result[1]}<br/>`;
    }
    showResults.style.display = 'block';
  } else {
    showResults.style.display = 'none';
  }
});

message.addEventListener('click', () => {
  message.style.display = 'none'
});

theme.addEventListener('click', () => {
  if (themeValue === 'dark') {
    themeValue = 'light';
    theme.innerHTML = 'DARK';
  } else {
    themeValue = 'dark';
    theme.innerHTML = 'LIGHT';
  }
  localStorage.setItem('theme', themeValue);
});

sound.addEventListener('click', () => {
  if (soundSwitcher) {
    soundSwitcher = false;
    sound.innerHTML = 'SOUND ON';
  } else {
    soundSwitcher = true;
    sound.innerHTML = 'SOUND OFF';
  }
})

reboot.addEventListener('click', () => {
  rebootWrapper.style.display = 'none';
  message.style.display = 'none';
  interval = setInterval(startTimer, 1000);
})

document.addEventListener('mouseout', () => {
  localStorage.setItem('seconds', secondCounter.innerHTML);
  localStorage.setItem('clicks', stepCounter.innerHTML);
  localStorage.setItem('flags', flagsCounter.innerHTML);
  localStorage.setItem('blocks', JSON.stringify(blocks));
  localStorage.setItem('game', JSON.stringify(game));
  localStorage.setItem('hidden', countHiddenBlocks);
  localStorage.setItem('hidden1', countHiddenBlocks1);
})