function findEvenIndex(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      let sum1 = 0;
      let sum2 = 0;
      for(let j = 0; j < i; j++) {
        sum1 += arr[j];
      }
      for(let j = i + 1; j < arr.length; j++) {
        sum2 += arr[j];
      }
      if(sum1 == sum2) {
        result.push(i);
      }
    }
    return result.length == 0 ? -1 : result[0];
}