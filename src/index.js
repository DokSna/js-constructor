import { model } from './model';
// // import { title, text, columns, image } from './templates';
// import { templates } from './templates';
import './styles/main.css';

const key = 'title';
// console.log(templates['title']);
// получаем <div id="site"></div>
const $site = document.querySelector('#site');

model.forEach((block) => {
  // console.log(block.toHTML());

  // let html = '';

  // if (block.type === 'title') {
  //   html = title(block);
  // } else if (block.type === 'text') {
  //   html = text(block);
  // } else if (block.type === 'columns') {
  //   html = columns(block);
  // } else if (block.type === 'image') {
  //   html = image(block);
  // }

  // const toHTML = templates[block.type];
    $site.insertAdjacentHTML('beforeend', block.toHTML());
  // if (toHTML) {
  //   // выводим в <div id="site"></div> элементы нашего массива (массив данных рендерим в код html)
  //   $site.insertAdjacentHTML('beforeend', toHTML(block));
  // }
});
