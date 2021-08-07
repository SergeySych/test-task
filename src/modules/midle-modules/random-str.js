function getRandomStr(length) {
    let result = '';

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   
    for ( let i = 0; i < length; i++ ) {
        const newChar = characters.charAt(Math.floor(Math.random() * characters.length));
        
        if (+newChar === 0) {
            return '';
        }
      result += newChar;
    }
    
    return result;
}

module.exports =  getRandomStr;