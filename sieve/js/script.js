/*
TODO: Declaring a function variable in TS.
TODO: Display the numbers on the page.
TODO: Implement pure.css.
TODO: Implement sick UI.
*/
var display = document.getElementById('display-text');
var genButton = document.getElementById('generate-button');
var numInput = document.getElementById('num');
numInput.defaultValue = 0;
var limit = 0;
function range(start, end) {
    var nums = [];
    for (var i = start; i < end; i++) {
        nums.push(i);
    }
    return nums;
}
function sieve(limit) {
    if (limit <= 1) {
        return [];
    }
    var nums = Array.from({ length: limit }, () => true);
    var primesOnly = [];
    for (var i = 2; i < nums.length; i++) {
        if (nums[i]) {
            primesOnly.push(i);
            for (var j = i * i; j < limit; j += i) {
                nums[j] = false;
            }
        }
    }
    return primesOnly;
}
genButton.onclick = function () {
    limit = numInput.value;
    var primesRaw = sieve(limit);
    var primes = primesRaw.join(' ');
    display.innerHTML = primes;
};
