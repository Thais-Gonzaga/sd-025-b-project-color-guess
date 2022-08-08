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
p.innerText = 'rgb(168, 34, 1)';
main.appendChild(p);

const divCircle = document.createElement('div');
divCircle.id = 'conteiner-circle';
main.appendChild(divCircle);

function random() {
  const random1 = Math.round(Math.random() * 16).toString(16);
  const random2 = Math.round(Math.random() * 16).toString(16);
  const random3 = Math.round(Math.random() * 16).toString(16);
  return `#${random1}${random2}${random3}`;
}

function createDiv() {
  for (let index = 1; index <= 6; index += 1) {
    const div = document.createElement('div');
    div.classList.add('ball');
    div.style.background = random();
    divCircle.appendChild(div);
  }
}
createDiv();
