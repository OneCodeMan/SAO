function sieve(limit: number):number[] {

    if (limit <= 1) {
        return [];
    }

    var nums:boolean[] = Array.from({ length: limit }, () => true);
    var primesOnly:number[] = [];

    for(var i:number = 2; i < nums.length; i++) {
        if nums[i] {
            primesOnly.push(i);
            for(var j:number = i*i; j < limit; j += i) {
                nums[j] = false;
            }
        }
    }

    return primesOnly;

}

console.log(sieve(2));
