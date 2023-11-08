function largestRadialSum(arr, d) {
    let count = 0;
    let distance = arr.length/d;
    let sum;
    let maxSum;
    while(count < distance) {
      sum = 0;
      for(let i = count; i < arr.length; i += distance) {
        sum += arr[i];
      }
      maxSum = count == 0 ? sum : sum > maxSum ? sum : maxSum;
      count++;
    }
    return maxSum;
}