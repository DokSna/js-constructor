import { block } from '../utils';
import { TextBlock, TitleBlock } from './blocks';
export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback;

    this.init();
  }

  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    // сразу после инициализации, когда мы собрали DOM, мы начинаем слушать событие submit
    this.$el.addEventListener('submit', this.add.bind(this)); //с помощью метода .bind(this) привязываем контекст, который в этом месте теряется
  }

  get template() {
    return [
      block('text'), //добавление нескольких блоков через массив
      block('title'),
    ].join('');

    //return block('text'); //добавление одного блока в сайдбар

    //// return '<h1>template</h1>';
  }

  add(event) {
    event.preventDefault(); //и страница не перезагружается при нажатии кнопки

    // console.log(event.target);

    const type = event.target.name;

    const value = event.target.value.value;
    const styles = event.target.styles.value;

    // debugger;

    // // создаём блок с заданными параметрами
    // // вариант кода №1
    // let newBlock;

    // if (type === 'title') {
    //   newBlock = new TitleBlock(value, { styles });
    // } else {
    //   newBlock = new TextBlock(value, { styles });
    // }

    // создаём блок с заданными параметрами
    // вариант кода №2 с помощью тернарного выражения

    const newBlock =
      type === 'title'
        ? new TitleBlock(value, { styles })
        : new TextBlock(value, { styles });

    // debugger;
    this.update(newBlock);
  }
}
