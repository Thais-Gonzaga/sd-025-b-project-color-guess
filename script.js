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
