const model = [
    {type: 'title', value: 'Hello World from JS'},
    {type: 'text', value: 'here we go some text'},
    {type: 'columns', value: [
        '111111',
        '222222',
        '333333'
    ]}
]

const $site = document.querySelector('#site');

model.forEach(block => {
    console.log(block);
})