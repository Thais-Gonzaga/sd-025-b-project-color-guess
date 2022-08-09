const header = document.createElement('header');
document.body.appendChild(header);

const h1 = document.createElement('h1');
h1.id = 'title';
h1.innerText = 'Adivinhe a cor!';
header.appendChild(h1);

const main = document.createElement('main');
document.body.appendChild(main);

const p = document.createElement('p');
p.id = 'rgb-color';
main.appendChild(p);

const divCircle = document.createElement('div');
divCircle.id = 'conteiner-circle';
main.appendChild(divCircle);

const elementp = document.createElement('p');
elementp.id = 'answer';
elementp.innerText = 'Escolha uma cor';
main.appendChild(elementp);

const button = document.createElement('button');
button.id = 'reset-game';
button.innerText = 'JOGAR';
document.body.appendChild(button);

function random() {
  const random1 = Math.round(Math.random() * 16).toString(16);
  const random2 = Math.round(Math.random() * 16).toString(16);
  const random3 = Math.round(Math.random() * 16).toString(16);
  return `#${random1}${random2}${random3}`;
}

function checkColor(event) {
  const clickColor = event.target.style.background;
  if (clickColor === p.innerText) elementp.innerText = 'Acertou!';
  if (clickColor !== p.innerText) elementp.innerText = 'Errou! Tente novamente!';
}

function createDiv() {
  for (let index = 1; index <= 6; index += 1) {
    const div = document.createElement('div');
    div.classList.add('ball');
    div.style.background = random();
    divCircle.appendChild(div);
    div.addEventListener('click', checkColor);
  }
}
createDiv();
function teste() {
  const ball = document.querySelectorAll('.ball');
  const sort = Math.round(Math.random() * 5);
  p.innerText = ball[sort].style.background;
  console.log(ball[sort]);
  console.log(sort);
}
teste();

function play() {
  teste();
  elementp.innerText = 'Escolha uma cor';
  const div = document.querySelectorAll('.ball');
  for (let index = 0; index < div.length; index += 1) {
    div[index].style.background = random();
  }
}
button.addEventListener('click', play);
