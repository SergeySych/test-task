const randomStr = require('./random-str');

function defineStr (length) {
    const str = randomStr(length);
    const arr = str.split('');
    const reversed = arr.slice().reverse();
    
    if (str === ''){
        return {
            str,
            type: 'common'
        };
    }
    
    for (let i = 0; i < arr.length; i++){
        
        if( isNaN(parseInt(arr[i])) ){
            if (arr.toString() == reversed.toString()){
                return {
                    str,
                    type: 'palindrom'
                };
            }else {
                return {
                    str,
                    type: 'common'
                };
            }
        }
    }
    return {
        str,
        type: 'numbers'
    };
         
}
    
module.exports = defineStr;