function isPalindrome(str){
    var x, y = Math.ceil(str.length/2);
    str.length % 2 == 0 ? x = y - 1 : x = y - 2;
    for(y; y < str.length; y ++){
        if(str[y] == str[x]){
            x --;
        }
        else{
            return false
        }
    }
    return true;
}
