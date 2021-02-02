import { row, col, css } from '../utils';

class Block {
  constructor(value, options) {
    (this.value = value), (this.options = options);
  }

  toHTML() {
    throw new Error('Метод toHTML должен быть реализован');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { tag = 'h1', styles } = this.options;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}
export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const { imageStyles: iS, alt = '', styles } = this.options;
    return row(
      `<img src="${this.value}" alt="${alt}" style="${css(iS)}">`,
      css(styles)
    );
  }
}
export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    const html = this.value.map(col).join(''); //(item) => col(item) == col
    return row(html, css(this.options.styles));
  }
}
export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }
  toHTML() {
    // const temp = css(this.options.styles); //смотрели в что выдаёт css(this.options.styles)
    // console.log(temp);
    return row(col(`<p>${this.value}</p>`), css(this.options.styles));
  }
}
