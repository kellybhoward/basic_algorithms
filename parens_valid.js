function parens_valid(str){
    var open = 0, close = 0, i;
    for(i = 0; i < str.length; i++){
        if(str[i] == '('){
            open ++;
        } else if (str[i] == ')'){
            close ++;
        }
        if(close > open){
            return false;
        }
    }
    return open > close ? false : true;
}
