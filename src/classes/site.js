export class Site {
  constructor(selector) {
    this.$el = document.querySelector(selector);
  }

  // почему сайт дублируется на страницы, потому что когда мы каждый раз вызываем render,
  // мы не чистим шаблон.
  render(model) {
    // перед тем как рендерить модель, мы будем чистить шаблон
    this.$el.innerHTML = '';
    model.forEach((block) => {
      this.$el.insertAdjacentHTML('beforeend', block.toHTML());
    });
  }
}
