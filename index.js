const model = [
  { type: 'title', value: 'Hello World from JS' },
  { type: 'text', value: 'here we go some text' },
  { type: 'columns', value: ['111111', '222222', '333333', '444444'] },
  { type: 'image', value: './assets/image.png' },
];

// получаем <div id="site"></div>
const $site = document.querySelector('#site');

model.forEach((block) => {
  console.log(block);

  let html = '';

  if (block.type === 'title') {
    html = title(block);
  } else if (block.type === 'text') {
    html = text(block);
  } else if (block.type === 'columns') {
    html = columns(block);
  } else if (block.type === 'image') {
    html = image(block);
  }

  // выводим в <div id="site"></div> элементы нашего массива (массив данных рендерим в код html)
  $site.insertAdjacentHTML('beforeend', html);
});

function title(block) {
  return `
    <div class="row">
        <div class="col-sm">
        <h1>${block.value}</h1>
        </div>
    </div>        
    `;
}

function text(block) {
  return `
    <div class="row">
        <div class="col-sm">
        <p>
        ${block.value}
        </p>
        </div>
    </div>
  `;
}

function columns(block) {
  // let html = '';

  // block.value.forEach((item) => {
  //   html += `
  //     <div class="col-sm">
  //     ${item}
  //     </div>
  //     `;
  // });

  const html = block.value.map((item) => `<div class="col-sm">${item}</div>`);

  return `
    <div class="row">
        ${html.join('')}
    </div>
  `;
}

function image(block) {
  return `
    <div class="row">
      <img src="${block.value}">
    </div>
  `
}