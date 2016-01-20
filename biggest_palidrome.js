function biggestPalindrome(str){
    var longest_substring = 1;
    for(var i = 0; i < str.length; i++){
        var x, y, palindrome;
        x = i;
        y = i+1;
        palindrome = 0;
        while(x >= 0 && y < str.length && str[x] == str[y]){
            x--;
            y++;
            palindrome += 2;
        }
        longest_substring = Math.max(longest_substring, palindrome);
        x = i - 1;
        y = i + 1;
        palindrome = 1;
        while (x >= 0 && y < str.length && str[x] == str[y]) {
            x--;
            y++;
            palindrome += 2;
        }
        longest_substring = Math.max(longest_substring, palindrome);
    }
    return longest_substring;
}
