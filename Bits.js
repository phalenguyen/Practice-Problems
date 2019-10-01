/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    var string = n.toString();
    console.log( typeof string)
    return string.length;
};

console.log(hammingWeight(00000000000000000000000000001011));
