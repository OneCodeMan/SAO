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
var limit:number = 0;

function range(start:number, end:number):number[] {
    var nums = [];
    for(var i = start; i < end; i++) {
        nums.push(i);
    }
    return nums;
}

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
}
