/**
 * Created by YaNaY on 22/03/14.
 */
function isPalindrome(str) {
    var i = 0;
    var j = str.length;
    while (j > i) {
        if (str.charAt(i) != str.charAt(j-1)) {
            return false;
        }
        j--;
        i++;
    }
    return true;
}
console.log('result is', isPalindrome('aa'));
console.log('result is', isPalindrome('aga'));
console.log('result is', isPalindrome('agg'));