function braces_valid(str){
    var open = '', i;
    for(i = 0; i < str.length; i++){
        switch(str[i]){
            case '(':
            case '[':
            case '{':
                open += str[i];
                break;
            case ')':
                if(open[open.length-1] == '('){
                    open = open.slice(0, -1);
                } else{
                    return false;
                }
                break;
            case ']':
                if(open[open.length-1] == '['){
                    open = open.slice(0, -1);
                } else{
                    return false;
                }
                break;
            case '}':
                if(open[open.length-1] == '{'){
                    open = open.slice(0, -1);
                } else{
                    return false;
                }
                break;
            default:
                break;
        }
    }
    return open.length == 0 ? true : false;
}
