var display = document.getElementById('display-text');
var genButton = document.getElementById('generate-button');
var numInput = document.getElementById('num');
numInput.defaultValue = 0;
var factDisplay = document.getElementById('fact-display');
var limit = 0;
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
    factDisplay.innerHTML = 'There are ' + primesRaw.length + ' prime numbers under ' + limit;
};
