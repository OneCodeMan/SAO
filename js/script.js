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
console.log(sieve(2));
