/*
TODO: Disable button when value is above max
TODO: Mobile first UI
*/

var display = document.getElementById('display-text');
var genButton = document.getElementById('generate-button');
var numInput = document.getElementById('num');
numInput.defaultValue = 0;
var factDisplay = document.getElementById('fact-display');
var limit:number = 0;

function sieve(limit:number):number[] {

    if (limit <= 1) {
        return [];
    }

    var nums:boolean[] = Array.from({ length: limit }, () => true);
    var primesOnly:number[] = [];

    for(var i:number = 2; i < nums.length; i++) {
        if (nums[i]) {
            primesOnly.push(i);
            for(var j:number = i*i; j < limit; j += i) {
                nums[j] = false;
            }
        }
    }

    return primesOnly;

}

genButton.onclick = function() {
    limit = numInput.value;
    var primesRaw:number[] = sieve(limit);
    var primes:string = primesRaw.join(' ');
    display.innerHTML = primes;
    factDisplay.innerHTML = 'There are ' + primesRaw.length + ' prime numbers under ' + limit;
}
