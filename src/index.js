const generator = require('./modules/generator');
const createElem = require('./modules/midle-modules/create-elem');


document.addEventListener('DOMContentLoaded', () => {
    
        setInterval(() => {
            generator(3)
                .subscribe(e => createElem(e, '.text'))
                .unsubscribe();
        }, 3000);
});