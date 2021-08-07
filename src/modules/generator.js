const {  of } = require('rxjs')
const { startWith } = require('rxjs/operators')
const defineStr = require('./midle-modules/define-str')

function generate ( length ) {
    const defaultState = defineStr(length)
    const stream$ = of(defaultState)
    
    stream$.pipe(
        startWith(defaultState)  
    )
    return stream$
}

module.exports = generate