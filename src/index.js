module.exports = function check(str, bracketsConfig) {
    let stringOfOpenBraskets = '';
    let stringOfCloseBraskets = '';
    for (let i = 0; i < bracketsConfig.length; i++){
        stringOfOpenBraskets += bracketsConfig[i][0];
        stringOfCloseBraskets += bracketsConfig[i][1];
    }
    let lastDeletedBrackets= '';
    stackOfBrackets = [];
    for (let i = 0; i < str.length; i++){
        if (stringOfOpenBraskets.indexOf(str[i]) != -1){
            if (stringOfOpenBraskets[stringOfOpenBraskets.indexOf(str[i])] ==
                stringOfCloseBraskets[stringOfOpenBraskets.indexOf(str[i])]){ //open = close braskets
                if (stackOfBrackets.length > 0){
                    if (stackOfBrackets[stackOfBrackets.length - 1] != str[i]){
                        stackOfBrackets.push(str[i]);
                    } else{
                        stackOfBrackets.pop();
                    }
                } else
                    stackOfBrackets.push(str[i]);

            } else{
                stackOfBrackets.push(str[i]);
            }
        } else if (stackOfBrackets.length == 0){// closing brackets rest
            return false;
        } else if (stringOfCloseBraskets.indexOf(str[i]) == stringOfOpenBraskets.indexOf(stackOfBrackets[stackOfBrackets.length -1 ])){
            stackOfBrackets.pop();
        } else
            return false;
    }
    return stackOfBrackets.length == 0;
}