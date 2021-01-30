import image from './assets/image.png';

const text = `Крутые видео и уроки по JavaScript.`;

export const model = [
  {
    type: 'title',
    value: 'Конструктор сайтов на чистом JavaScript',
    options: {
      tag: 'h2',
      // styles: `background: linear-gradient(to right, #ff0099, #493240);
      // color: green;
      // padding: 1.5rem;
      // text-align: center`,
      styles: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: 'green',
        padding: '1.5rem',
        'text-align': 'center',
      },
    },
  },
  {
    type: 'image',
    value: image,
    options: {
      styles: {
        padding: '2rem 0',
        display: 'flex',
        'justify-content': 'center',
      },
      imageStyles: {
        width: '500px',
        height: 'auto',
      },
      alt: 'Это картинка',
    },
  },
  {
    type: 'columns',
    value: [
      'Приложение на чистом JavaScript, без использования библиотек',
      'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
      'JavaScript - это просто, интересно. Научись создавать любые UI своими руками',
    ],
    options: {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2em',
        color: '#fff',
        'font-height': 'bold',
      },
    },
  },
  {
    type: 'text',
    value: text,
    options: {
      styles: {
        // background: 'linear-gradient(to right, #ff0099, #493240)',
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
        padding: '1rem',
        'font-weight': 'bold',
      },
    },
  },
];
